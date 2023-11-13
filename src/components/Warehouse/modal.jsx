import React, { useState } from "react";
import "../WarehouseList/modal.scss";

const Modal = ({ showModal, closeModal, handleDelete, deletedItem }) => {
  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          cancel
        </span>
        <button
          onClick={() => {
            handleDelete(deletedItem?.id);
          }}
        >
          Delete Warehouse
        </button>
        <h2> Delete {deletedItem?.warehouse_name} warehouse?</h2>
        <p>
          Please confirm that you'd like to delete the{" "}
          {deletedItem?.warehouse_name} from the list of warehouses. You
          won't be able to undo this action.{" "}
        </p>
      </div>
    </div>
  );
};

export default Modal;
