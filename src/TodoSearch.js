import React from "react"

function TodoSearch({search}){
    return (
    <div style={{
      width:'100%'
    }}>
      <input 
      type="text" 
      value={search.value}
      placeholder="Buscar" style={{
        width:'100%'
      }}
      onChange={(e)=> {
        search.state(e.target.value)
      }}
      
      ></input>
      </div>
      )
  }

  export {TodoSearch}