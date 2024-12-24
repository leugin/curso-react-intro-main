
function TodoItem ({text, completed}){
    return (
      <li style={{display: "flex"}}>
       <input type="checkbox"/>
        <p>{text}</p>
        <button 
        style={
          {padding:'0px', margin:'auto 0 auto auto', background: 'transparent', border: 'none'}
          }>X</button>
      </li>
      
      );
  }

  export {TodoItem}