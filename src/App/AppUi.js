import {TodoSearch} from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
function AppUI (
    {
        total, 
        progress,
        searchValue,
        SetSearchValue,
        todosSearched,
        onChange,
        onDelete
    }

) {

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
                onChange={(e)=> onChange(index, e.target.checked )}
                onDelete={()=>onDelete(index)}
                />
              ))}
            </TodoList>
            <CreateTodoButton/>
      
          </div>
    )
}

export {AppUI}