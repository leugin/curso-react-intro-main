import {TodoSearch} from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { TodoCounter } from '../components/TodoCounter';
import { TodoItem } from '../components/TodoItem';
import { TodoLoading } from '../components/TodosLoading';
function AppUI (
    {
      loading,
      error,
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
            {loading && (<TodoLoading/>)}
            {error && (<h4>Paso un error</h4>)}
            {!loading && todosSearched.length === 0 && (<h4>Nada que hacer</h4>)}
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