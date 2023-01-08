import { useState } from 'react'
import React from 'react'
import Input from './Input'
// import { uuidv4 } from 'uuid';
interface initial{
    id:number,
    title:string,
    status:boolean,
}
const Todo = () => {
    const [todos, setTodos]= useState<Array <initial>>([])
    const handleClick= (newTodo:string):void=>{
     setTodos([...todos,{
        id:Date.now(),
        title:newTodo,
        status:false
     }])
    }
    console.log(todos)
  return (
    <div>
        <Input handleClick={handleClick}/>
    </div>
  )
}

export default Todo