
function TodoLoading ({text, completed}){
    return (
      <>
      {[0,1,2].map((i) => 
        <li style={{display: "flex"}} key={i}>
        <input type="checkbox" className={
         `${completed ? 'is-completed':'incompleted'}`
        }   
         defaultChecked={completed}
         readOnly
        />
         <p style={{opacity:'.6'}}>Cargando...</p>
       </li>
      )}
      
      </>
      );
  }

  export {TodoLoading}