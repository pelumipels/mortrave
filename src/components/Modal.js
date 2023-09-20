import React from "react";
import ScheduleACall from "./ScheduleACall";
import "../styles/Modal.css";

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