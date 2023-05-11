import { useState } from 'react';
import { Button, Modal, Box, TextField } from '@mui/material';
import axios from 'axios';
import { FaPizzaSlice } from 'react-icons/fa'
import styled from 'styled-components';

const StyledButton = styled.button`
font-size: 16px;
width: 10%;
min-width: 125px;
border-radius: 4px;
font-weight: 700;
padding: 10px;
border: none;
cursor: pointer;
color: #fafafa;
padding: 10px;
margin-bottom: 20px;
background-color: #c8102e;
`;

const AddPizzaModal = ({addNewPizza}) => {
  const [addPizzaInfo, setAddPizzaInfo] = useState({
    name: '',
    price: 0,
    category: '',
    size: '',
    toppings: '',
    description:'',
    countInStock: 0,
  })
  const [image, setImage] = useState('')
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('name', addPizzaInfo.name);
      formData.append('category', addPizzaInfo.category);
      formData.append('size', addPizzaInfo.size);
      formData.append('toppings', addPizzaInfo.toppings);
      formData.append('description', addPizzaInfo.description);
      formData.append('price', addPizzaInfo.price);
      formData.append('countInStock', addPizzaInfo.countInStock);
      formData.append('image', image);
  
      const response = await axios.post('/api/menu/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response.data);
      addNewPizza(response.data);
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
      <StyledButton onClick={handleOpen}><FaPizzaSlice/>
        Add Pizza
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
            overflow: 'scroll',
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
              width: '60%',
              height: '80%'
            },
          }}
        >
          <h1>Create Pizza</h1>
          <TextField
            label="Name"
            value={addPizzaInfo.name}
            onChange={(event) =>
            setAddPizzaInfo({...addPizzaInfo, name: event.target.value})}
            variant="outlined"
          />
          <TextField
            label="Price"
            value={addPizzaInfo.price}
            onChange={(event) =>
            setAddPizzaInfo({...addPizzaInfo, price: event.target.value})}
            variant="outlined"
          />
          <TextField
            label="Category"
            value={addPizzaInfo.category}
            onChange={(event) =>
            setAddPizzaInfo({...addPizzaInfo, category: event.target.value})}
            variant="outlined"
          />
          <TextField
            label="Size"
            value={addPizzaInfo.size}
            onChange={(event) =>
            setAddPizzaInfo({...addPizzaInfo, size: event.target.value})}
            variant="outlined"
          />
          <TextField
            label="Toppings"
            value={addPizzaInfo.toppings}
            onChange={(event) =>
            setAddPizzaInfo({...addPizzaInfo, toppings: event.target.value})}
            variant="outlined"
          />
          <TextField
            label="Description"
            value={addPizzaInfo.description}
            onChange={(event) =>
            setAddPizzaInfo({...addPizzaInfo, description: event.target.value})}
            variant="outlined"
          />
          <TextField
            label="Count In Stock"
            value={addPizzaInfo.countInStock}
            onChange={(event) =>
            setAddPizzaInfo({...addPizzaInfo, countInStock: event.target.value})}
            variant="outlined"
          />
           <TextField
           type="file"
           onChange={handleImageChange}
           variant='outlined'
          />
          
          <StyledButton variant="contained" onClick={handleSubmit}>
            <FaPizzaSlice/>Create
          </StyledButton>
        </Box>
      </Modal>
    </>
  );
};

export default AddPizzaModal;
