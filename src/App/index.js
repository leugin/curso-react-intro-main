
import { AppUI } from './AppUi';
import { useLocalStorage } from './useLocalStorage';
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


function App() {
  const [todos, saveTodos] = useLocalStorage(STORAGE_KEY, []);

  const [searchValue, SetSearchValue] = React.useState('');
  const total = todos.length
  const progress = todos.filter(val => !!val.completed).length
  
  const todosSearched = todos
  .filter(val =>  val.
    text.toLowerCase()
    .includes(searchValue.toLowerCase()))
    const onChange =  (index, checked)=> {
      console.log({index, checked})
      const newStat = [...todos]
      newStat[index].completed= checked
      saveTodos(newStat)
    }
    const onDelete = (index)=>{
      console.log(index)
      const newStat = [...todos]
      newStat.splice(index, 1)
      saveTodos(newStat)
    }
  return (
    <AppUI 
    total={total}
    progress = {progress}
    searchValue = {searchValue}
    SetSearchValue = {SetSearchValue}
    todosSearched = {todosSearched}
    onChange = {onChange} 
    onDelete = {onDelete}
    />
  );
}


export default App;
