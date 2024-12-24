import {TodoSearch} from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import React from 'react'


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
  const [searchValue, SetSearchValue] = React.useState('');
  const [todosValue, SetTodosValue] = React.useState(defaultTodos);
  const total = todosValue.length
  const progress = todosValue.filter(val => !!val.completed).length
 
  const todosSearched = todosValue
  .filter(val =>  val.
    text.toLowerCase()
    .includes(searchValue.toLowerCase()))
  
  return (
    <div style={{
      width:"40vw"
    }}>

      <TodoCounter total={total} completed={progress}/>

      <TodoSearch search={{value:searchValue, state: SetSearchValue}}/>
      <TodoList>
        {todosSearched.map((todo, index) => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onChange={(e)=> {
            const newStat = [...todosValue]
            newStat[index].completed= e.target.checked
            SetTodosValue(newStat)
          }}
          onDelete={()=>{
            const newStat = [...todosValue]
            newStat.splice(index, 1)
            SetTodosValue(newStat)
          }}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>

    </div>
  );
}


export default App;
