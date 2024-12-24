import {TodoSearch} from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import React from 'react'
const STORAGE_KEY  = 'TODOS_V1'
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultTodos));
//localStorage.removeItem(STORAGE_KEY);

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage(STORAGE_KEY, []);

  const [searchValue, SetSearchValue] = React.useState('');
  const total = todos.length
  const progress = todos.filter(val => !!val.completed).length
  
  const todosSearched = todos
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
            const newStat = [...todos]
            newStat[index].completed= e.target.checked
            saveTodos(newStat)
          }}
          onDelete={()=>{
            const newStat = [...todos]
            newStat.splice(index, 1)
            saveTodos(newStat)
          }}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>

    </div>
  );
}


export default App;
