import React, { useState } from "react";
import "./modal.scss";

const Modal = ({ showModal, closeModal, handleDelete, deleteWarehouse }) => {
  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <h2> Delete {deleteWarehouse?.warehouse_name} warehouse?</h2>
        <p>
          Please confirm that you'd like to delete the{" "}
          {deleteWarehouse?.warehouse_name} from the list of warehouses. You
          won't be able to undo this action.{" "}
        </p>
        <div className="selectionBox">
          <button className="selectionBox__cancel" onClick={closeModal}>
            cancel
          </button>
          <button
            className="selectionBox__delete"
            onClick={() => {
              handleDelete();
              deleteWarehouse?.id();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
