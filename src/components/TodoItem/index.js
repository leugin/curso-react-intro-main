import { DeleteIcon } from "../DeleteIcon";

function TodoItem ({text, completed, onChange, onDelete}){
    return (
      <li style={{display: "flex"}}>
       <input type="checkbox" className={
        `${completed ? 'is-completed':'incompleted'}`
       }   
        defaultChecked={completed}
        onChange={onChange}
       />
        <p>{text}</p>
        <DeleteIcon
        onClick={onDelete} 
        style={
          {padding:'0px', margin:'auto 0 auto auto', background: 'transparent', border: 'none'}
          }/>
      </li>
      
      );
  }

  export {TodoItem}