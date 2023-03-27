import { useState } from 'react';
import { Button, Modal, Box, TextField } from '@mui/material';
import axios from 'axios';

const AddPizzaModal = ({addNewPizza}) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState('');
  const [description, setDescription] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [image_path, setimage_path] = useState('')


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

      const response = await axios.post('/api/menu/add', data, {
        headers: {
          'Content-Type': 'application/json',
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
    const file = e.target.files[0]
    const formData = new FormData()

    formData.append('image_path', file)
    formData.append
  }

  return (
    <>
      <Button variant="contained" onClick={handleOpen}>
        Add Pizza
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
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
          
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddPizzaModal;
