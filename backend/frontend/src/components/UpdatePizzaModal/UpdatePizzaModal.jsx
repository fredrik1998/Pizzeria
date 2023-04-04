import { useState, useEffect } from 'react';
import { Button, Modal, Box, TextField } from '@mui/material';
import axios from 'axios';
import { FaPizzaSlice } from 'react-icons/fa'
import GlobalStyle from '../../GlobalStyles';
import styled from 'styled-components';

const StyledButton = styled.button`
font-size: 16px;
width: 10%;
min-width: 75px;
border-radius: 5px;
font-weight: 700;
border: none;
cursor: pointer;
color: #121212;
background: none
`;

const UpdatePizzaModal = ({ updatePizza, pizzaToUpdate }) => {
    const [open, setOpen] = useState(false);
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');
    const [toppings, setToppings] = useState('');
    const [description, setDescription] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [image, setImage] = useState('');
  
    useEffect(() => {
      if (pizzaToUpdate) {
        setId(pizzaToUpdate.id);
        setName(pizzaToUpdate.name);
        setPrice(pizzaToUpdate.price);
        setCategory(pizzaToUpdate.category);
        setSize(pizzaToUpdate.size);
        setToppings(pizzaToUpdate.toppings);
        setDescription(pizzaToUpdate.description);
        setCountInStock(pizzaToUpdate.countInStock);
      }
    }, [pizzaToUpdate]);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleSubmit = async () => {
  try {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append('size', size);
    formData.append('toppings', toppings);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('countInStock', countInStock);

    if (image) {
      formData.append('image', image);
    } else {
      formData.append('image_path', pizzaToUpdate.image_path);
    }

    const response = await axios.put(`/api/menu/update/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

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
    }
  
  return (
    <>
      <StyledButton onClick={handleOpen}><FaPizzaSlice/>
        Edit Pizza
      </StyledButton>
      <Modal open={open} onClose={handleClose}>
      <Box
          sx={{
            position: 'absolute',
            fontFamily: 'League Spartan',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            bgcolor: '#f3f0dd',
            boxShadow: 24,
            borderRadius: 5,
            p: 4,
            '& .MuiTextField-root': {
              mb: 2,
              width: '100%',
            },
            '& .MuiButton-root': {
              display: 'block',
              mx: 'auto',
            },
            '@media (max-width: 960px)': {
              width: '80%',
            },
          }}
        >
        <h1>Update Pizza</h1>
          <TextField
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            variant="outlined"
          />
          <TextField
            label="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            variant="outlined"
          />
          <TextField
            label="Category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            variant="outlined"
          />
          <TextField
            label="Size"
            value={size}
            onChange={(event) => setSize(event.target.value)}
            variant="outlined"
          />
          <TextField
            label="Toppings"
            value={toppings}
            onChange={(event) => setToppings(event.target.value)}
            variant="outlined"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            variant="outlined"
          />
          <TextField
            label="Count In Stock"
            value={countInStock}
            onChange={(event) => setCountInStock(event.target.value)}
            variant="outlined"
          />
          <TextField
           type="file"
           onChange={handleImageChange}
           variant='outlined'
          />
          
          <StyledButton variant="contained" onClick={handleSubmit}>
            <FaPizzaSlice/> Update
          </StyledButton>
        </Box>
      </Modal>
    </>
  );
};

export default UpdatePizzaModal;
