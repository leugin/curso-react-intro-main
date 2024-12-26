import React from "react"
import { TodoContext } from "../../provider/todos"

function TodoSearch(){
  const { searchValue, SetSearchValue}  = React.useContext(TodoContext)
    return (
    <div style={{
      width:'100%'
    }}>
      <input 
      type="text" 
      value={searchValue}
      placeholder="Buscar" style={{
        width:'100%'
      }}
      onChange={(e)=> {
        SetSearchValue(e.target.value)
      }}
      
      ></input>
      </div>
      )
  }

  export {TodoSearch}