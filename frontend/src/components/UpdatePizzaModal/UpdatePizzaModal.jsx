import { useState, useEffect } from 'react';
import { Button, Modal, Box, TextField } from '@mui/material';
import axios from 'axios';
import { FaPizzaSlice } from 'react-icons/fa'
import GlobalStyle from '../../GlobalStyles';
import styled from 'styled-components';

const StyledButton = styled.button`
font-size: 16px;
width: 10%;
min-width: 125px;
border-radius: 18px;
font-weight: 700;
letter-spacing: 0.1rem;
padding: 10px;
border: none;
cursor: pointer;
color: #fafafa;
padding: 15px;
margin-bottom: 20px;
background-color: hsl(180, 29%, 50%);
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
    const [image_path, setimage_path] = useState('');
  
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
        setimage_path(pizzaToUpdate.image_path);
      }
    }, [pizzaToUpdate]);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleSubmit = async () => {
      try {
        const data = {
          image_path,
          name,
          price,
          category,
          size,
          toppings,
          description,
          countInStock,
        };
  
        const response = await axios.put(`/api/menu/update/${id}`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log(response.data);
        updatePizza(response.data);
        handleClose();
      } catch (error) {
        console.error(error);
      }
    };
  
  return (
    <>
      <StyledButton onClick={handleOpen}><FaPizzaSlice/>
        Edit Pizza
      </StyledButton>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: '#f3f0dd',
            boxShadow: 24,
            p: 4,
            '& .MuiTextField-root': {
              mb: 2,
              width: '100%',
            },
            '& .MuiButton-root': {
              display: 'block',
              mx: 'auto',
            },
          }}
        >
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
            label="Image path"
            value={image_path}
            onChange={(event) => setimage_path(event.target.value)}
            variant="outlined"
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
