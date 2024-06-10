import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', { email, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error logging in.');
        }
    };

    return (
        <div style={{ paddingTop: "80px", textAlign: "center" }}>
            <Typography variant='h4'>Login</Typography>
            <form onSubmit={handleSubmit}>
                <TextField id="email" label="Email" variant="outlined" fullWidth onChange={(e) => setEmail(e.target.value)} required /><br /><br />
                <TextField id="password" label="Password" type="password" autoComplete="current-password" variant="outlined" fullWidth onChange={(e) => setPassword(e.target.value)} required /><br /><br />
                <Button variant='contained' color='primary' type="submit">Login</Button>
            </form>
            <Typography variant='body1' style={{ marginTop: '20px', color: 'red' }}>{message}</Typography>
        </div>
    );
}

export default Login;
