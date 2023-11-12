import React, { useState } from "react";
import "./modal.scss";
import xLogo from "../../assets/Icons/close-24px.svg";

const Modal = ({ showModal, closeModal, handleDelete, deleteWarehouse }) => {
  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <div className="deleteTitleLogoContainer__outerBox">
          <div className="deleteTitleLogoContainer">
            <h2 className="deleteTitleLogoContainer__title">
              {" "}
              Delete {deleteWarehouse?.warehouse_name} warehouse?
            </h2>
            <img
              onClick={closeModal}
              className="deleteTitleLogoContainer__logo"
              src={xLogo}
              alt="close window logo"
            />
          </div>
          <div className="warehouseListModaldetails_container">
            <p>
              Please confirm that you'd like to delete the{" "}
              {deleteWarehouse?.warehouse_name} from the list of warehouses. You
              won't be able to undo this action.{" "}
            </p>
          </div>
        </div>
        <div className="selectionBox">
          <button className="selectionBox__cancel" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="selectionBox__delete"
            onClick={() => {
              handleDelete(deleteWarehouse.id);
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
