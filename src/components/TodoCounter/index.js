import './TodoCounter.css';
function TodoCounter ({completed, total}){
  if (total > 0 && completed === total){
    return (
      <h1>
        Todas las tareas fueron completadas
      </h1>
      
      )
  }
    return (
      <h1>
        Completastes {completed} de {total}
      </h1>
      
      );
  }

  export { TodoCounter }