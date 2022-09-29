import React from 'react';
import './Login2.css';
import Box from '@mui/material/Box';

const Login2 = () => {
  return (
    <div className='body'>
    <Box
      sx={{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        marginTop:0,
        height:"100vh",
        
      }}
    >
        <Box
        sx={{
            width: 350,
            height: 400,
            backgroundColor: '#013142',
            p:2
        }}
        >
            <div >
                <h3>Ideassion Technology solution</h3>
            </div>

        </Box>
        <Box
        sx={{
            width: 400,
            height: 400,
            backgroundColor: 'white',
            p:2
        }}
        >
            <div>
               <h2> Login</h2>
            </div>

        </Box>

    </Box>
        
        
    </div>
  )
}

export default Login2