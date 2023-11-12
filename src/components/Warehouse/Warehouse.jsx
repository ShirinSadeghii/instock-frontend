import { useState } from "react";
// import dataJson from "../../data/data.json";
import dataDetailsJson from "../../data/datadetails.json";
import "../Warehouse/Warehouse.scss";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import Edit from "../../assets/Icons/edit-24px.svg";
import Chevron from "../../assets/Icons/chevron_right-24px.svg";
import Delete from "../../assets/Icons/delete_outline-24px.svg";
import Sort from "../../assets/Icons/sort-24px.svg";
import Modal from "./modal";
import axios from "axios";
function Warehouse() {
  const [deleteWarehouse, SetDeleteWarehouse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = async (warehouseId) => {
    try {
      const response = await axios.delete(
        `http://3.20.237.64:80/warehouses/${warehouseId}/inventories`
      );
      console.log("Deletion successful:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // const [warehouses, setWarehouses] = useState(dataJson)
  // const [selectedWarehouse, setSelectedWarehouse] = useState(dataDetailsJson[0]);
  const inStock = "In Stock";
  return (
    <section className="warehouse">
      <div className="warehouse__header">
        <div className="warehouse__container">
          <img src={ArrowBack} alt="arrow back icon"></img>
          <h1 className="warehouse__title">{dataJson[0].warehouse_name}</h1>
        </div>
        <div className="warehouse__container">
          <button className="warehouse__edit-btn">
            <img
              className="warehouse__edit-icon"
              src={Edit}
              alt="edit icon"
            ></img>
            <span className="warehouse__edit-txt">Edit</span>
          </button>
        </div>
      </div>
      <ul className="warehouse__list">
        <li className="warehouse__list-item">
          <span className="warehouse__label">WAREHOUSE ADDRESS:</span>
          <span className="warehouse__label-item">
            {dataJson[0].address}, {dataJson[0].city}, {dataJson[0].country}
          </span>
        </li>
        <li className="warehouse__list-item warehouse__list-item--row">
          <div className="contact__container">
            <span className="warehouse__label">CONTACT NAME:</span>
            <span className="warehouse__label-item">
              <br></br>
              {dataJson[0].contact_name}
            </span>
            <span className="warehouse__label-item">
              <br></br>
              {dataJson[0].contact_position}
            </span>
          </div>
          <div>
            <span className="warehouse__label">CONTACT INFORMATION:</span>
            <span className="warehouse__label-item">
              <br></br>
              {dataJson[0].contact_phone}
            </span>
            <span className="warehouse__label-item">
              <br></br>
              {dataJson[0].contact_email}
            </span>
          </div>
        </li>
      </ul>
      <ul className="toolbar">
        <li className="toolbar__container">
          <div className="toolbar__box1">
            <span className="toolbar__item">
              INVENTORY ITEM
              <img src={Sort} alt="sort icon"></img>
            </span>
            <span className="toolbar__item">
              CATEGORY
              <img src={Sort} alt="sort icon"></img>
            </span>
            <span className="toolbar__item toolbar__item--width">
              STATUS
              <img src={Sort} alt="sort icon"></img>
            </span>
          </div>
          <div className="toolbar__box2">
            <span className="toolbar__item">
              QUANTITY
              <img src={Sort} alt="sort icon"></img>
            </span>
            <span className="toolbar__item">
              ACTIONS
              <img src={Sort} alt="sort icon"></img>
            </span>
          </div>
        </li>
      </ul>
      <ul className="warehouse__list warehouse__list--tablet">
        {" "}
        {dataDetailsJson.map((detail, index) => {
          return (
            <li key={index} className="warehouse__inventory">
              <div className="inventory-row">
                <div className="inventory-row__container">
                  <span className="warehouse__label warehouse__label--tablet">
                    INVENTORY ITEM
                  </span>
                  <span className="warehouse__label-item warehouse__label-item--blue">
                    {detail.item_name}
                    <img src={Chevron} alt="chevron icon"></img>
                  </span>
                  <span className="warehouse__label warehouse__label--tablet">
                    CATEGORY
                  </span>
                  <span className="warehouse__label-item warehouse__label-item--width">
                    {detail.category}
                  </span>
                </div>
                <div className="inventory-row__container inventory-row__container2">
                  <span className="warehouse__label warehouse__label--tablet">
                    STATUS
                  </span>
                  <button
                    className={`${
                      detail.status === inStock
                        ? "inventory-row__list-instock"
                        : "inventory-row__list-outstock"
                    }`}
                  >
                    {detail.status}
                  </button>
                  <span className="warehouse__label warehouse__label--tablet">
                    QTY
                  </span>
                  <span className="warehouse__label-item warehouse__label-item--quantity">
                    {detail.quantity}
                  </span>
                </div>
              </div>
              <div className="logo__container">
                <img
                  className="edit-logo"
                  src={Delete}
                  alt="delete icon"
                  onClick={() => {
                    openModal();
                    SetDeleteWarehouse(detail);
                  }}
                />
                <img className="edit-logo" src={Edit} alt="edit icon"></img>
              </div>
            </li>
          );
        })}
      </ul>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        handleDelete={handleDelete}
        deleteWarehouse={deleteWarehouse}
      />
    </section>
  );
}

export default Warehouse;
