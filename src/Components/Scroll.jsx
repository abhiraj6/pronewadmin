// import React, { useState } from 'react';
// import { TextField, Button, Grid, Typography } from '@mui/material';
// import { useHistory } from 'react-router-dom';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const history = useHistory();

//   const handleLogin = () => {
//     // Here you would perform verification logic, like sending a request to a server.
//     if (username === 'admin' && password === 'admi@123') {
//       // Redirect to the desired link after successful login
//       history.push('/HomeMain');
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   return (
//     <Grid container spacing={2} justifyContent="center">
//       <Grid item xs={12}>
//         <Typography variant="h4" align="center">Login</Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           label="Username"
//           variant="outlined"
//           fullWidth
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         {error && <Typography color="error">{error}</Typography>}
//       </Grid>
//       <Grid item xs={12} align="center">
//         <Button variant="contained" color="primary" onClick={handleLogin}>
//           Login
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default LoginForm;
