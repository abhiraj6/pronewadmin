import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sigin = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const addHandler = () => {
    axios.post("http://localhost:8080/adda", inputs)
      .then((response) => {
        console.log(response.data);
        alert("Data added successfully");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to add data");
      });
  };

  return (
    <div style={{ paddingTop: "80px" }}>
      <Typography variant='h4'>
        REGISTRATION
      </Typography>
      <br /><br />
      <TextField label='Username' variant='outlined' name='username' value={inputs.username} onChange={inputHandler} /><br /><br />
      <TextField label='E-mail' variant='outlined' name='email' value={inputs.email} onChange={inputHandler} /><br /><br />
      <TextField label='Password' type='password' variant='outlined' name='password' value={inputs.password} onChange={inputHandler} /><br /><br />
      <Button variant='contained' color='secondary' onClick={addHandler}>Submit</Button><br /><br />
      <Typography variant='h7'>
  already have an account...
   </Typography>
   <Button variant='text'>
               <Link to={'/'} style={{textDecoration:'none',color:'blue'}}>
               LOGIN
               </Link>
   </Button>
      
    </div>
  );
};

export default Sigin;
