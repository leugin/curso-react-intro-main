import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoLoading } from "../components/TodosLoading";
import { TodoContext } from "../provider/todos";
import { Modal } from "../components/Modal";
import  React  from 'react';
import { TodoForm } from "../components/TodoForm";
function AppUI() {
  const { 
    loading,
     error, 
     todosSearched,
     onChange: completeTodo, 
     onDelete:  deleteTodo, 
    openModal

   } = React.useContext(TodoContext)
  return (
    <div
      style={{
        width: "40vw",
      }}
    >
      <TodoCounter/>
      <TodoSearch />
      <TodoList>
            {loading && (
              <>
                <TodoLoading />
              </>
            )}
            {error && <p>error</p>}
            {!loading && todosSearched.length === 0 && <p>emp</p>}

            {todosSearched.map((todo, index) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(index, todo.text)}
                onDelete={() => deleteTodo(index)}
              />
            ))}
          </TodoList>
      <CreateTodoButton></CreateTodoButton>
      {openModal && <Modal>
        <TodoForm></TodoForm>
        </Modal>}
      
    </div>
  );
}

export { AppUI };
