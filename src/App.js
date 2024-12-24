import logo from './platzi.webp';
import './App.css';
import {TodoSearch} from './TodoSearch'
import { TodoList } from './TodoList'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
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


export default App;
