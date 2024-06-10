import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';

const AddsandwitchForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/addsandwitch', { title, description, imageUrl });
      setTitle('');
      setDescription('');
      setImageUrl('');
      alert('Sandwitch order added successfully!');
    } catch (error) {
      console.error('Error adding sandwitch order:', error);
      alert('Error adding sandwitch order. Please try again.');
    }
  };

  return (
    <><br /><br /><br /><br />
    <Typography variant='h3'>Sandwitch</Typography>
    <TextField
      id='title'
      label='Enter Title'
      variant='outlined'
      name='title'
      value={title}
      onChange={(e) => setTitle(e.target.value)} /><br /><br /><TextField
        id='description'
        label='Enter description'
        variant='outlined'
        name='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)} /><br /><br /><TextField
        id='imageUrl'
        label='Enter imageUrl'
        variant='outlined'
        name='imageUrl'
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)} /><br /><br />
        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
        </>
    
  );
};

export default AddsandwitchForm;
