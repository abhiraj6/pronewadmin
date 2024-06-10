import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Button } from 'react-bootstrap';

const AddMandhiForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [mandhis, setMandhis] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/viewmandhi')
      .then((response) => {
        setMandhis(response.data);
      })
      .catch((error) => {
        console.error('Error fetching mandhis:', error);
      });
  }, []);

  const deleteValue = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/removem/${id}`)
      .then((response) => {
        alert(response.data);
        setMandhis(mandhis.filter(mandhi => mandhi._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/addmandhi', { title, description, imageUrl });
      setTitle('');
      setDescription('');
      setImageUrl('');
      alert('Mandhi order added successfully!');
      window.location.reload(false);
    } catch (error) {
      console.error('Error adding mandhi order:', error);
      alert('Error adding mandhi order. Please try again.');
    }
  };

  const handleEdit = (mandhi) => {
    setTitle(mandhi.title);
    setDescription(mandhi.description);
    setImageUrl(mandhi.imageUrl);
    setEditId(mandhi._id);
  };

  const handleCancelEdit = () => {
    setTitle('');
    setDescription('');
    setImageUrl('');
    setEditId(null);
  };

  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:8080/updatem/${id}`, { title, description, imageUrl });
      setTitle('');
      setDescription('');
      setImageUrl('');
      setEditId(null);
      alert('Mandhi order updated successfully!');
      window.location.reload(false);
    } catch (error) {
      console.error('Error updating mandhi order:', error);
      alert('Error updating mandhi order. Please try again.');
    }
  };

  return (
    <>
      <br /><br /><br /><br />
      <Typography variant='h3'>MANDHI</Typography>
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
      {editId ? (
        <>
          <Button variant='contained' onClick={() => handleUpdate(editId)}>Update</Button>
          <Button variant='contained' onClick={handleCancelEdit}>Cancel</Button>
        </>
      ) : (
        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
      )}
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
          {mandhis.map((mandhi) => (
            <TableRow key={mandhi._id}>
              <TableCell>{mandhi.title}</TableCell>
              <TableCell>{mandhi.description}</TableCell>
              <TableCell>{mandhi.imageUrl}</TableCell>
              <TableCell>
                <>
                  <Button
                    onClick={() => deleteValue(mandhi._id)}
                    size="small"
                    variant='contained'
                    color='secondary'>
                    Delete
                  </Button>
                  <Button
                    onClick={() => handleEdit(mandhi)}
                    size="small"
                    variant='contained'
                    color='primary'>
                    Edit
                  </Button>
                </>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AddMandhiForm;
