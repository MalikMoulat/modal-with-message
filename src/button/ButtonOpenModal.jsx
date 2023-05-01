import React from "react";
import { useState } from "react";
import { ModalMessage } from "../lib";

function ButtonOpenModal() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button
        type="submit"
        className="openModal"
        onClick={() => {
          setModal(true);
        }}
      >
        Open Modal
      </button>
      {modal && <ModalMessage closeModal={setModal} />}
    </>
  );
}

export default ButtonOpenModal;
