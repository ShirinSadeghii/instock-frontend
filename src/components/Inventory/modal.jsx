import React, { useState } from "react";
import "../WarehouseList/modal.scss";
import xLogo from "../../assets/Icons/close-24px.svg";

const Modal = ({ showModal, closeModal, handleDelete, deletedItem }) => {
  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <div className="deleteTitleLogoContainer__outerBox">
          <div className="deleteTitleLogoContainer">
            <h2 className="deleteTitleLogoContainer__title">
              Delete {deletedItem?.item_name} inventory item?
            </h2>{" "}
            <img
              onClick={closeModal}
              className="deleteTitleLogoContainer__logo cursor-pointer"
              src={xLogo}
              alt="close window logo"
            />
          </div>
          <div className="warehouseListModaldetails_container">
            <p>
              Please confirm that you'd like to delete the{" "}
              {deletedItem?.item_name} from the list of warehouses. You
              won't be able to undo this action.{" "}
            </p>
          </div>
        </div>
        <div className="selectionBox">
          <button className="selectionBox__cancel cursor-pointer" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="selectionBox__delete cursor-pointer"
            onClick={() => {
              handleDelete(deletedItem.id);
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
