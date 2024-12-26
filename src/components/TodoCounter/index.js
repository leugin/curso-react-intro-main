import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../../provider/todos';
function TodoCounter (){

  const {progress, total} = React.useContext(TodoContext)

  if (total > 0 && progress === total){
    return (
      <h1>
        Todas las tareas fueron completadas
      </h1>
      
      )
  }
    return (
      <h1>
        Completastes {progress} de {total}
      </h1>
      
      );
  }

  export { TodoCounter }