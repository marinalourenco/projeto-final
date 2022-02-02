import react from "react";



const Modal = (props) => {
    const { id = 'modal', onClose = () => {}, children} = props; 

  const handleOutsideClick = (e) => {
      if(e.target.id == id) onClose ();
  };

  return ( 
    <div id={id} className="modal" onClick={handleOutsideClick}>
      <div className="conteiner">

          <button className="close" onClick={onClose}/> 
          <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;