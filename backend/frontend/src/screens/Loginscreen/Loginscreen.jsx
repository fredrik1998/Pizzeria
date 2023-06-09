import React, { useEffect, useState } from "react";
import GlobalStyle from "../../GlobalStyles";
import Header from "../../components/Header/Header";
import axios from "axios";
import {
  LoginWrapper,
  StyledTitle,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledLink,
  StyledButton,
  StyledButtonContainer,
  StyledError,
} from "./LoginscreenElements";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

const Loginscreen = () => {
  const [message, setMessage] = useState("");
  const { user, setUser } = useContext(UserContext);
  const { userId } = useParams();

  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (event) => {
    event.preventDefault();

    const errors = {};

    if (!loginInfo.email) {
      errors.email = "Email is required";
    }

    if (!loginInfo.email) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post("/api/login", {
          username: loginInfo.email,
          password: loginInfo.password,
        });
        console.log("Server response:", response.data);

        if (response.data.access_token) {
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("admin", response.data.is_superuser);
          const userId = response.data.userId;
          localStorage.setItem("userId", response.data.userId);

          setUser({
            username: response.data.username,
            is_superuser: response.data.is_superuser,
            userId: userId,
          });

          if (response.data.is_superuser) {
            navigate("/admin");
          } else {
            navigate(`/userscreen/${userId}`);
          }
        }
      } catch (error) {
        setMessage("Login failed. Please check your email and password.");
      }
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Header />
        <LoginWrapper>
          <StyledForm onSubmit={submitHandler}>
            {message && <StyledError>{message}</StyledError>}

            <StyledTitle>Sign in</StyledTitle>
            <StyledLabel>Email or Username</StyledLabel>
            <StyledInput
              type="text"
              value={loginInfo.email}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, email: e.target.value })
              }
              id="email"
              placeholder="eg. hello@gmail.com"
            ></StyledInput>
            <StyledError>{formErrors.email}</StyledError>
            <StyledLabel>Password</StyledLabel>
            <StyledInput
              type="password"
              id="password"
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
            ></StyledInput>
            <StyledError>{formErrors.password}</StyledError>
            <StyledButtonContainer>
              <StyledLink to="/register">
                Dont have an account? Click here
              </StyledLink>
              <StyledButton type="submit">Login</StyledButton>
            </StyledButtonContainer>
          </StyledForm>
        </LoginWrapper>
      </Layout>
    </>
  );
};

export default Loginscreen;
