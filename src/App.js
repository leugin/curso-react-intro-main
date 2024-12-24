import {TodoSearch} from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import React from 'react'
const total = 6
const progress = 3

const defaultTodos = [
  {
    text: "Cortar cebolla", completed: false
  },
  {
    text: 'Tomar el curso de plazi ',  completed: true
  },
  {
    text: 'lalala', completed: false
  }
]
function App() {
  return (
    <div style={{
      width:"40vw"
    }}>

      <TodoCounter total={total} completed={progress}/>

      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton/>

    </div>
  );
}


export default App;
