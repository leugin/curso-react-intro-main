import React from "react"
import { TodoContext } from "../../provider/todos"

function TodoForm(){
    const {
        todos, 
        saveTodos
    }  = React.useContext(TodoContext) 
    const [newTodoValue, setNewTodoValue] = React.useState('')
    return(
        <form >
        <div style={{
            display: 'flex',
            width: '100%'
        }}>
            <input type="text" style={{
                flex:1
            }} 
            value={newTodoValue}
            onChange={
                (event)=> {
                    setNewTodoValue(event.target.value)
                }
            }
            ></input>
            <button type="button" style={{
                margin:"auto"
            }} onClick={
                (event)=> {
                    const newTodos = [...todos]
                    newTodos.push({
                        text: event.target.form[0].value,
                        completed: false
                    })
                    saveTodos(newTodos)
                    setNewTodoValue('')

                }
                }>Agregar</button>
        </div>
       

    </form>
    )
}

export {TodoForm}