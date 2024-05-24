import React from "react";
import "./modal.css";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={`modal ${active ? "modal_active" : ""}`}
      onClick={() => setActive(false)}
      role="dialog"
      aria-modal="true"
      aria-hidden={!active}
    >
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal__close-button"
          onClick={() => setActive(false)}
          aria-label="Закрыть модальное окно"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

// const Modal = ({ active, setActive, children }) => {
    // <ModalCont className={active ? "modal" : "modal_active"} onClick={() => setActive(false)}>
    //   <ModalContent onClick={e => e.stopPropagation()}>
    //   {children}
    //   </ModalContent>
    // </ModalCont>
