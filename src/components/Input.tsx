import React,{useState} from 'react'
import Box from '@mui/material/Box';
// import { Button, TextField } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
interface props{
  handleClick: (value: string)=> void
}
const initial:string="";
const Input: React.FC<props> = ({handleClick}) => {
  const [newTodo,setNewTodo]= useState(initial)

  const handleChange= (e: any)=>{
    setNewTodo(e.target.value)
  }
  return (
    <Box border={"1px solid red"}>
        <Box display={"flex"} justifyContent="space-around" gap="2rem"  
         sx={{
        width: 500,
        maxWidth: '100%',
      }}
      margin="auto"
      mt="1rem"
      >

         <TextField fullWidth id="fullWidth"  onChange={handleChange} />
         <Button variant="contained" onClick={()=>handleClick(newTodo)}>Add</Button>
        </Box>
    </Box>
  )
}

export default Input