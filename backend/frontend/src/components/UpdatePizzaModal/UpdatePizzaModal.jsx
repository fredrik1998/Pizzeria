import { useState, useEffect } from "react";
import { Button, Modal, Box, TextField } from "@mui/material";
import axios from "axios";
import { FaPizzaSlice } from "react-icons/fa";
import GlobalStyle from "../../GlobalStyles";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 16px;
  width: 10%;
  min-width: 75px;
  border-radius: 5px;
  margin-left: -20px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  color: #121212;
  background: none;
`;

const UpdatePizzaModal = ({ updatePizza, pizzaToUpdate }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const [updatePizzaInfo, setUpdatePizzaInfo] = useState({
    id: null,
    name: "",
    price: 0,
    category: "",
    size: "",
    toppings: "",
    description: "",
    countInStock: 0,
  });

  useEffect(() => {
    if (pizzaToUpdate) {
      setUpdatePizzaInfo({
        id: pizzaToUpdate.id,
        name: pizzaToUpdate.name,
        price: pizzaToUpdate.price,
        category: pizzaToUpdate.category,
        size: pizzaToUpdate.size,
        toppings: pizzaToUpdate.toppings,
        description: pizzaToUpdate.description,
        countInStock: pizzaToUpdate.countInStock,
      });
    }
  }, [pizzaToUpdate]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", updatePizzaInfo.name);
      formData.append("category", updatePizzaInfo.category);
      formData.append("size", updatePizzaInfo.size);
      formData.append("toppings", updatePizzaInfo.toppings);
      formData.append("description", updatePizzaInfo.description);
      formData.append("price", updatePizzaInfo.price);
      formData.append("countInStock", updatePizzaInfo.countInStock);

      if (image) {
        formData.append("image", image);
      } else {
        formData.append("image_path", pizzaToUpdate.image_path);
      }

      const response = await axios.put(
        `/api/menu/update/${updatePizzaInfo.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      updatePizza(response.data);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <>
      <StyledButton onClick={handleOpen}>
        <FaPizzaSlice />
        Edit Pizza
      </StyledButton>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            fontFamily: "League Spartan",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            bgcolor: "#f3f0dd",
            boxShadow: 24,
            borderRadius: 5,
            overflow: "scroll",
            p: 4,
            "& .MuiTextField-root": {
              mb: 2,
              width: "100%",
            },
            "& .MuiButton-root": {
              display: "block",
              mx: "auto",
            },
            "@media (max-width: 960px)": {
              width: "60%",
              height: "80%",
            },
          }}
        >
          <h1>Update Pizza</h1>
          <TextField
            label="Name"
            value={updatePizzaInfo.name}
            onChange={(event) =>
              setUpdatePizzaInfo({
                ...updatePizzaInfo,
                name: event.target.value,
              })
            }
            variant="outlined"
          />
          <TextField
            label="Price"
            value={updatePizzaInfo.price}
            onChange={(event) =>
              setUpdatePizzaInfo({
                ...updatePizzaInfo,
                price: event.target.value,
              })
            }
            variant="outlined"
          />
          <TextField
            label="Category"
            value={updatePizzaInfo.category}
            onChange={(event) =>
              setUpdatePizzaInfo({
                ...updatePizzaInfo,
                category: event.target.value,
              })
            }
            variant="outlined"
          />
          <TextField
            label="Size"
            value={updatePizzaInfo.size}
            onChange={(event) =>
              setUpdatePizzaInfo({
                ...updatePizzaInfo,
                size: event.target.value,
              })
            }
            variant="outlined"
          />
          <TextField
            label="Toppings"
            value={updatePizzaInfo.toppings}
            onChange={(event) =>
              setUpdatePizzaInfo({
                ...updatePizzaInfo,
                toppings: event.target.value,
              })
            }
            variant="outlined"
          />
          <TextField
            label="Description"
            value={updatePizzaInfo.description}
            onChange={(event) =>
              setUpdatePizzaInfo({
                ...updatePizzaInfo,
                description: event.target.value,
              })
            }
            variant="outlined"
          />
          <TextField
            label="Count In Stock"
            value={updatePizzaInfo.countInStock}
            onChange={(event) =>
              setUpdatePizzaInfo({
                ...updatePizzaInfo,
                countInStock: event.target.value,
              })
            }
            variant="outlined"
          />
          <TextField
            type="file"
            onChange={handleImageChange}
            variant="outlined"
          />
          <StyledButton variant="contained" onClick={handleSubmit}>
            <FaPizzaSlice /> Update
          </StyledButton>
        </Box>
      </Modal>
    </>
  );
};

export default UpdatePizzaModal;
