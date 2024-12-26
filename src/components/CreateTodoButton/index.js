import React from "react"
import { TodoContext } from "../../provider/todos"

function CreateTodoButton( ){
    const {SetOpenModal, openModal} = React.useContext(TodoContext)
    return (
        <div  style={{
            display:'flex'
        }}>
            <button type="button" style={{
                margin: 'auto'

            }}
            onClick={()=> {
                SetOpenModal(!openModal)
            }}
            >
                Agregar
            </button>
        </div>
    )
}

export {CreateTodoButton}