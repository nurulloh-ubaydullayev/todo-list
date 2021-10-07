import React from "react";
import "./Modal.scss";
function Modal({ open, setOpen }) {
  return (
    <div
      className={`modal ${open && `modal-open`}`}
      onClick={(evt) => {
        if (evt.target.matches(".modal") || evt.target.matches(".close-btn")) {
          setOpen(false);
        }
      }}
    >
      <div className="inner__modal">
        Lorem, ipsum <button className="close-btn">close</button>
      </div>
    </div>
  );
}

export default Modal;
