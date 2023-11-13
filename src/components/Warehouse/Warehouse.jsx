// import dataJson from "../../data/data.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dataJson from "../../data/data.json";
import dataDetailsJson from "../../data/datadetails.json";
import "../Warehouse/Warehouse.scss";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import Edit from "../../assets/Icons/edit-24px.svg";
import Chevron from "../../assets/Icons/chevron_right-24px.svg";
import Delete from "../../assets/Icons/delete_outline-24px.svg";
import Sort from "../../assets/Icons/sort-24px.svg";
import Modal from "./modal";
import axios from "axios";

function Warehouse({ props }) {
  const inStock = "In Stock";
  const navigate = useNavigate();
  const [deleteWarehouse, SetDeleteWarehouse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [warehouseData, setWarehouseData] = useState();
  const [warehouseInventory, setWarehouseInventory] = useState();

  const handleInventoryItemClick = (itemId) => {
    navigate(`/inventory/${itemId}`, {
      state: { backNavigateUrl: `/details/${props.itemId}` },
    });
  };

  const handleEditInventoryClick = (itemId) => {
    navigate(`/edit-inventory/${itemId}`, {
      state: { backNavigateUrl: `/details/${props.itemId}` },
    });
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleEditWarehouseClick = () => {
    navigate(`/details/edit/${props.itemId}`);
  };

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

  useEffect(() => {
    async function fetchItemData(itemId) {
      const response = await axios.get(
        `http://3.20.237.64:80/warehouses/${itemId}`
      );
      setWarehouseData(response.data);

      const inventoryResponse = await axios.get(
        `http://3.20.237.64:80/warehouses/${itemId}/inventories`
      );
      setWarehouseInventory(inventoryResponse.data);
    }

     fetchItemData(props.itemId);
  }, []);

  return (
    <section className="warehouse">
      <div className="warehouse__header">
        <div className="warehouse__container" onClick={() => handleBackClick()}>
          <img src={ArrowBack} alt="arrow back icon"></img>
          <h1 className="warehouse__title">{warehouseData?.warehouse_name}</h1>
        </div>
        <div className="warehouse__container">
          <button
            className="warehouse__edit-btn"
            onClick={() => handleEditWarehouseClick()}
          >
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
            {warehouseData?.address}, {warehouseData?.city},{" "}
            {warehouseData?.country}
          </span>
        </li>
        <li className="warehouse__list-item warehouse__list-item--row">
          <div className="contact__container">
            <span className="warehouse__label">CONTACT NAME:</span>
            <span className="warehouse__label-item">
              <br></br>
              {warehouseData?.contact_name}
            </span>
            <span className="warehouse__label-item">
              <br></br>
              {warehouseData?.contact_position}
            </span>
          </div>
          <div>
            <span className="warehouse__label">CONTACT INFORMATION:</span>
            <span className="warehouse__label-item">
              <br></br>
              {warehouseData?.contact_phone}
            </span>
            <span className="warehouse__label-item">
              <br></br>
              {warehouseData?.contact_email}
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
        {warehouseInventory?.map((detail, index) => {
          return (
            <li key={index} className="warehouse__inventory">
              <div className="inventory-row">
                <div className="inventory-row__container">
                  <span className="warehouse__label warehouse__label--tablet">
                    INVENTORY ITEM
                  </span>
                  <span
                    className="warehouse__label-item warehouse__label-item--blue"
                    onClick={() => handleInventoryItemClick(detail?.id)}
                  >
                    {detail?.item_name}
                    <img src={Chevron} alt="chevron icon"></img>
                  </span>
                  <span className="warehouse__label warehouse__label--tablet">
                    CATEGORY
                  </span>
                  <span className="warehouse__label-item warehouse__label-item--width">
                    {detail?.category}
                  </span>
                </div>
                <div className="inventory-row__container inventory-row__container2">
                  <span className="warehouse__label warehouse__label--tablet">
                    STATUS
                  </span>
                  <button
                    className={`${
                      detail?.status === inStock
                        ? "inventory-row__list-instock"
                        : "inventory-row__list-outstock"
                    }`}
                  >
                    {detail?.status}
                  </button>
                  <span className="warehouse__label warehouse__label--tablet">
                    QTY
                  </span>
                  <span className="warehouse__label-item warehouse__label-item--quantity">
                    {detail?.quantity}
                  </span>
                </div>
              </div>
              <div className="logo__container">
                <img className="edit-logo" src={Delete} alt="delete icon"></img>
                <img
                  className="edit-logo"
                  src={Edit}
                  alt="edit icon"
                  onClick={() => handleEditInventoryClick(detail?.id)}
                ></img>
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
