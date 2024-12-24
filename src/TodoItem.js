
function TodoItem ({text, completed}){
    return (
      <li>
        <span>{completed ? 'V': '-'}</span>
        <p>{text}</p>
        <span>X</span>
      </li>
      
      );
  }

  export {TodoItem}