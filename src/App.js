import React, { useState, useEffect } from 'react'
import Form from './Components/Form'
import ListItem from './Components/ListItem';

const Todo = () => {
  const[inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);

  //add task to local storage
  useEffect(() => {
    getLocalTodos();
  },[]);

  useEffect(() => {
    saveLocalTodos();
  },[todos]);

  const saveLocalTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  

  return (
    <div className='w-full h-screen flex justify-center items-center max-w-[1240px'>
      <div className='w-[400px] h-[600px] md:w-[650px] md:h-[700px] bg-white absolute top-0 mt-40 rounded-3xl'>
        <div className='flex items-center justify-center w-[180px] h-[70px] name-wrapper bg-blue-300 border border-white absolute rounded-full left-[120px] top-[-30px] md:left-[235px]'>
          <p className='font-bold font-mono text-gray-700'>TODO APP</p>
        </div>
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <div className='flex items-center justify-center'>
          <ul>
            {todos.map(todo => (
              <ListItem
                text={todo.text}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Todo