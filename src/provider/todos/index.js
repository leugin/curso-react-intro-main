import React from "react";
import { useLocalStorage } from "../../App/useLocalStorage";

const TodoContext = React.createContext()
const STORAGE_KEY  = 'TODOS_V1'

function TodoProvider({children}){
    const {
        item:todos, 
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage(STORAGE_KEY, []);
    
      const [searchValue, SetSearchValue] = React.useState('');
      const [openModal, SetOpenModal] = React.useState(false);
      const total = todos.length
      const progress = todos.filter(val => !!val.completed).length
      
      const todosSearched = todos
      .filter(val =>  val.text.toLowerCase()
        .includes(searchValue.toLowerCase()))
        
        const onChange =  (index, checked)=> {
          const newStat = [...todos]
          newStat[index].completed= checked
          saveTodos(newStat)
        }
        
        const onDelete = (index)=>{
          const newStat = [...todos]
          newStat.splice(index, 1)
          saveTodos(newStat)
        }
    return (
        <TodoContext.Provider value={{
            todos,
            saveTodos,
            loading,
            error,
            total, 
            progress,
            searchValue,
            SetSearchValue,
            todosSearched,
            onChange,
            onDelete,
            openModal,
            SetOpenModal  
        }}>
            {children}
        </TodoContext.Provider>
    )
}
export {
    TodoContext, TodoProvider
}