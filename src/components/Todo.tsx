import React from 'react'
import Input from './Input'

const Todo = () => {
    const handleClick= (newTodo:String):void=>{
      console.log(newTodo)
    }
  return (
    <div>
        <Input handleClick={handleClick}/>
    </div>
  )
}

export default Todo