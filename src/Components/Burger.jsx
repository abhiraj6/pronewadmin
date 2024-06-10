import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';

const AddBurgurForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [burgurs, setBurgurs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/viewburgur')
      .then((response) => {
        setBurgurs(response.data);
      })
      .catch((error) => {
        console.error('Error fetching burgurs:', error);
      });
  }, []);

  const deleteValue = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/removem/${id}`)
      .then((response) => {
        alert(response.data);
        setBurgurs(burgurs.filter(burgur => burgur._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/addburgur', { title, description, imageUrl });
      setTitle('');
      setDescription('');
      setImageUrl('');
      alert('Burger order added successfully!');
      window.location.reload(false);
    } catch (error) {
      console.error('Error adding burgur order:', error);
      alert('Error adding burgur order. Please try again.');
    }
  };

  return (
    <>
      <br /><br /><br /><br />
      <Typography variant='h3'>Burgur</Typography>
      <TextField
        id='title'
        label='Enter Title'
        variant='outlined'
        name='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)} /><br /><br />
      <TextField
        id='description'
        label='Enter description'
        variant='outlined'
        name='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)} /><br /><br />
      <TextField
        id='imageUrl'
        label='Enter imageUrl'
        variant='outlined'
        name='imageUrl'
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)} /><br /><br />
      <Button variant='contained' onClick={handleSubmit}>Submit</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>ImageUrl</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {burgurs.map((burgur) => (
            <TableRow key={burgur._id}>
              <TableCell>{burgur.title}</TableCell>
              <TableCell>{burgur.description}</TableCell>
              <TableCell>{burgur.imageUrl}</TableCell>
              <TableCell>
                <Button
                  onClick={() => deleteValue(burgur._id)}
                  size="small"
                  variant='contained'
                  color='secondary'>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AddBurgurForm;
