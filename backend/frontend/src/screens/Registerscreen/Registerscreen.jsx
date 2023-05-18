import React, { useState, useContext } from "react";
import GlobalStyle from "../../GlobalStyles";
import Header from "../../components/Header/Header";
import axios from "axios";
import Layout from "../../components/Layout";
import { UserContext } from "../../UserContext";
import {
  LoginWrapper,
  StyledTitle,
  StyledForm,
  StyledLabel,
  StyledButtonContainer,
  StyledButton,
  StyledInput,
  StyledLink,
  StyledError,
} from "./RegisterScreenElements";
import { useNavigate } from "react-router-dom";

const Registerscreen = () => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();

    const errors = {};

    if (!registerForm.username) {
      errors.username = "Username is required";
    }
    if (!registerForm.email) {
      errors.email = "Email is required";
    } else {
      const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!emailPattern.test(registerForm.email)) {
        errors.email = "Please enter a valid email address";
      }
    }
    if (!registerForm.password) {
      errors.password = "Password is required";
    }
    if (!registerForm.confirmPassword) {
      errors.confirmPassword = "Password is required";
    }

    setFormErrors(errors);

    if (registerForm.confirmPassword !== registerForm.password) {
      setMessage("Password does not match");
    }

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("/api/register", {
          username: registerForm.username,
          email: registerForm.email,
          password: registerForm.password,
        });
        if (response.data.access_token) {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("username", response.data.username);

          setUser({ username: response.data.username });
          navigate("/");
        }
      } catch (error) {
        if (error.response) {
          setMessage(`Register failed: ${error.response.data.message}`);
        } else {
          setMessage(
            "Register failed. Please check your inputs and try again."
          );
        }
      }
    }
  };
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Header />
        <LoginWrapper>
          <StyledForm onSubmit={submitHandler}>
            {message && <StyledError>{message}</StyledError>}
            <StyledTitle>Register</StyledTitle>
            <StyledLabel>Username</StyledLabel>
            <StyledInput
              type="text"
              onChange={(e) =>
                setRegisterForm({ ...registerForm, username: e.target.value })
              }
              value={registerForm.username}
              id="username"
              placeholder="eg. yolo1998"
            ></StyledInput>
            <StyledError>{formErrors.username}</StyledError>
            <StyledLabel>Email</StyledLabel>
            <StyledInput
              type="text"
              onChange={(e) =>
                setRegisterForm({ ...registerForm, email: e.target.value })
              }
              value={registerForm.email}
              id="email"
              placeholder="eg. yolo1998@gmail.com"
            ></StyledInput>
            <StyledError>{formErrors.email}</StyledError>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              onChange={(e) =>
                setRegisterForm({ ...registerForm, password: e.target.value })
              }
              value={registerForm.password}
              id="password"
            ></StyledInput>
            <StyledError>{formErrors.password}</StyledError>
            <StyledLabel>Confirm Password</StyledLabel>
            <StyledInput
              type="password"
              onChange={(e) =>
                setRegisterForm({
                  ...registerForm,
                  confirmPassword: e.target.value,
                })
              }
              value={registerForm.confirmPassword}
              id="confirmPassword"
            ></StyledInput>
            <StyledError>{formErrors.confirmPassword}</StyledError>
            <StyledButtonContainer>
              <StyledLink to="/login">
                Already have an account? Click here
              </StyledLink>
              <StyledButton type="submit">Register</StyledButton>
            </StyledButtonContainer>
          </StyledForm>
        </LoginWrapper>
      </Layout>
    </>
  );
};

export default Registerscreen;
