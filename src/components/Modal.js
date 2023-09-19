import React from "react";
import "../styles/Modal.css";
import ScheduleACall from "./ScheduleACall";

function Modal({ setOpenModal }) {
  return (
    <div className='modalBackground'>
      <div className="modalContainer">
        <ScheduleACall setOpenModal={setOpenModal} />
      </div>
    </div>
  );
}

export default Modal;