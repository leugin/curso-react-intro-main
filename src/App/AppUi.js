import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoCounter } from "../components/TodoCounter";
import { TodoItem } from "../components/TodoItem";
import { TodoLoading } from "../components/TodosLoading";
import { TodoContext } from "../provider/todos";
function AppUI() {
  return (
    <div
      style={{
        width: "40vw",
      }}
    >
      <TodoCounter/>
      <TodoSearch search={{}} ></TodoSearch>
      <TodoContext.Consumer>
        {({ loading, error, todosSearched, completeTodo, deleteTodo }) => (
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
        )}
      </TodoContext.Consumer>
      <CreateTodoButton></CreateTodoButton>
    </div>
  );
}

export { AppUI };
