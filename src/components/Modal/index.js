import ReactDOM from 'react-dom';
import  React  from 'react';
import { TodoContext } from '../../provider/todos';

function Modal({ children }) {
    const {openModal, SetOpenModal} = React.useContext(TodoContext);
  return ReactDOM.createPortal(
    <>
    <div className='Modal Modal-backdrop' onClick={()=> {
        SetOpenModal(false)
    }}></div>
    <div className={`Modal Modal-container Modal-${openModal ? 'open':'closed'}`}>
      {children}
    </div>
    </>
    ,
    document.getElementById('modal')
  );
}

export { Modal };