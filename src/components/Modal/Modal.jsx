import React, { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import style from "./Modal.module.css";
import { ShowModalContext } from "./../../context/ShowModalContext";

export default function Modal() {
  const { showModal, setShowModal } = useContext(ShowModalContext);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={style.modal}>
      <div className={style.modal_body}>
        <div className={style.head}>
          <IoMdClose className={style.close_btn} onClick={handleClick} />
        </div>
        <div className={style.content}>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
    </div>
  );
}
