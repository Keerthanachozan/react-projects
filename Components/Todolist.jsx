import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Todoitem from './Todoitem'

const Todolist = () => {
const [inputVal , setInputVal] = useState('')
const [todoItem , setTodoItem] = useState([])

const getTodo = (event) =>{
    let value = event.target.value;
    setInputVal(value)
}

const addTodo = () =>{
  setTodoItem((prevVal) =>{
      return [...prevVal , {item:inputVal,edit:false}]
  })
  setInputVal("")
}

let deleteItem = (id) =>{
  setTodoItem((prevVal) =>{
     return prevVal.filter((elem , i) =>{
       return id !== i
     })
  })
}

let editItem = (e,elem,id) =>{
  e.preventDefault();
  console.log(elem)
  setTodoItem((prevVal) => {
    const newState = prevVal.map((obj, i) => id === i ? { ...obj, edit: true } : obj);
    return newState;
  })
}
let updateItem = (e, elem, id) => {
  e.preventDefault();
  console.log(elem)
  setTodoItem((prevVal) => {
    const newState = prevVal.map((obj, i) => id === i ? { item:elem, edit: false } : obj);
    return newState;
  })
}
useEffect(() => {
  console.log('Fruit', todoItem);
}, [todoItem])
  return (
    <div>
        <div>
        <h1 className='h1'>TODO-LIST-APP</h1>
        </div>
        <div className='bgc'>
            <input className='input' type="text" placeholder='Add a Todo' onChange={getTodo} value={inputVal}/>
            <button className='add' onClick={addTodo}>Add</button><br /><br />
        </div>
        <br/>
            <div className='box1'>
              <div className='box'>
                <ul itemType='none'>
            {todoItem.map((elem , i) =>{
                return (
                     <Todoitem 
                        item={elem.item}
                        id={i}
                        key={i}
                        deleteItem ={deleteItem}
                        editItem ={editItem}
                        editItemValue={elem.edit}
                        updateItem={updateItem}
                       /> 
                  )
                })}
                </ul>
              </div>
          </div>
    </div>
  )
}

export default Todolist