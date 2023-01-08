import React from 'react'
import Box from '@mui/material/Box';
// import { Button, TextField } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Input: React.FC = () => {
  return (
    <Box border={"1px solid red"}>
        <Box display={"flex"} justifyContent="center" gap="2rem"  border={"1px solid black"}  
    //      sx={{
    //     width: 500,
    //     maxWidth: '100%',
    //   }}
      >

         <TextField fullWidth label="fullWidth" id="fullWidth" />
         <Button>Add</Button>
        </Box>
    </Box>
  )
}

export default Input