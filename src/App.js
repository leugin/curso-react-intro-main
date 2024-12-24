import logo from './platzi.webp';
import './App.css';
import {TodoSearch} from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoCounter } from './TodoCounter';
const total = 6
const progress = 3
function App() {
  return (
    <div className="App">
      <TodoCounter total={total} completed={progress}/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <CreateTodoButton/>
    
    </div>
  );
}

function TodoItem (){
  return (
    <li>
      <span>V</span>
      <p>Llorar por la llorona</p>
      <span>X</span>
    </li>
    
    );
}



export default App;
