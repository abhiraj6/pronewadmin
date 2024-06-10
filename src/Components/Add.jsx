import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function BlurredBox() {
  const handleLogout = () => {
    // Implement your logout logic here
    alert('Logged out'); // For demonstration purposes
  };

  return (
    <div style={{
      background: 'url("https://mir-s3-cdn-cf.behance.net/project_modules/fs/9348dc78812279.5caf875036b87.jpg")',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
    <Box
      height={300}
      width={300}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
      p={7}
      className="blurred-box"
    >
      <Button variant="contained" color="primary" component={Link} to="/" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
    </div>
  );
}

export default BlurredBox;
