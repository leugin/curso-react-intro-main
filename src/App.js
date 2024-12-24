import logo from './platzi.webp';
import './App.css';
import {TodoSearch} from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import React from 'react'
const total = 6
const progress = 3
function App() {
  return (
    <React.Fragment className="App">
      <TodoCounter total={total} completed={progress}/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <CreateTodoButton/>
    
    </React.Fragment>
  );
}


export default App;
