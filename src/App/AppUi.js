import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoLoading } from "../components/TodosLoading";
import { TodoContext } from "../provider/todos";
import { Modal } from "../components/Modal";
import  React  from 'react';
function AppUI() {
  const { 
    loading,
     error, todosSearched,
      completeTodo, 
      deleteTodo, 
    openModal,
    SetOpenModal 

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

            {todosSearched.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
      <CreateTodoButton></CreateTodoButton>
      {openModal && <Modal><p>Este es mi modal</p></Modal>}
      
    </div>
  );
}

export { AppUI };
