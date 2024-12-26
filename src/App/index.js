
import { TodoProvider } from '../provider/todos';
import { AppUI } from './AppUi';
import React from 'react'
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
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  );
}


export default App;
