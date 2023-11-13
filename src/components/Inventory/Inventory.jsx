import { useNavigate } from "react-router-dom";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevronIcon from "../../assets/Icons/chevron_right-24px.svg";
import "./Inventory.scss";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import Modal from "./modal";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

function Inventory({ }) {
  const inStock = "In Stock";
  const [deletedItem, setDeletedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [inventoryItems, setInventoryItems] = useState(null);
  const [warehouseListData, setWarehouseListData] = useState();
  const navigate = useNavigate();
  const handleItemClick = (itemId) => {
    navigate(`/inventory/${itemId}`, {
      state: { backNavigateUrl: "/inventory" },
    });
  };

  const addInventoryItemClick = () => {
    navigate('/add-inventory');
  }

  const editInventoryItemClick = (inventoryItemId) => {
    navigate(`/edit-inventory/${inventoryItemId}`, {
      state: { backNavigateUrl: "/inventory" },
    });
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleGet = async () => {
      try {
        const warehousesResponse = await axios.get(`http://3.20.237.64:80/warehouses`);
        setWarehouseListData(warehousesResponse.data);

        const response = await axios.get(`http://3.20.237.64:80/inventories/`);
        setInventoryItems(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    handleGet();
  }, []);

  const handleDelete = async (Id) => {
    try {
      const response = await axios.delete(`http://3.20.237.64:80/inventories/${Id}`);
      console.log("Deletion successful:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function getWarehouseName(warehouseId) {
    const warehouses = warehouseListData?.filter(warehouse => warehouse.id == warehouseId);
    return warehouses[0].warehouse_name;
  }
  const handleAddItemClick = () => {
    // Navigate to the Add Item Page
    navigate('/add-inventory');
  };



  return (

    <div className="warehouseListContainer">
      <div className="inventoryListContainer__titleBox">
        <h1 className="inventoryListContainer__title">Inventory</h1>
        <div className="inventoryListContainer__items">
          <input className="inventoryListContainer__searchBar" placeholder="Search...">
          </input>
          <button className="inventoryListContainer__searchButton" onClick={handleAddItemClick}>+Add New Item</button>
        </div>
      </div>
      <div className="inventory-titlebar">
        <div className="inventory-titlebar__item">
          INVENTORY ITEM
          <img src={sortIcon} alt="Sort Icon" />
        </div>
        <div className="inventory-titlebar__item">
          CATEGORY
          <img src={sortIcon} alt="Sort Icon" />
        </div>
        <div className="inventory-titlebar__item">
          STATUS
          <img src={sortIcon} alt="Sort Icon" />
        </div>
        <div className="inventory-titlebar__item">
          QUANTITY
          <img src={sortIcon} alt="Sort Icon" />
        </div>
        <div className="inventory-titlebar__item">
          WAREHOUSE
          <img src={sortIcon} alt="Sort Icon" />
        </div>
        <div className="inventory-titlebar__item">
          ACTIONS
          <img src={sortIcon} alt="Sort Icon" />
        </div>
      </div>
      <ul className="inventory">
        {inventoryItems?.map((inventoryItem, index) => {
          return (
            <li key={index} className="inventory__list">
              <div className="inventory__list-top">
                <div className="inventory__list-left">
                  <div className="inventory__list-left-details">
                    <p className="inventory__list-title">Inventory Item</p>
                    <div
                      className="inventory__list-container"
                      onClick={() => handleItemClick(inventoryItem.id)}
                    >
                      <p className="inventory__list-blueItm">
                        {inventoryItem.item_name}
                      </p>
                      <img src={chevronIcon} alt="" />
                    </div>
                  </div>
                  <div className="inventory__list-left-details">
                    <p className="inventory__list-title">Category</p>
                    <p>{inventoryItem.category}</p>
                  </div>
                </div>
                <div className="inventory__list-right">
                  <div className="inventory__list-right-details">
                    <p className="inventory__list-title">Status</p>
                    <p
                      className={` ${inventoryItem.status === inStock
                        ? "inventory__list-instock"
                        : "inventory__list-outstock"
                        }`}
                    >
                      {inventoryItem.status}
                    </p>
                  </div>
                  <div className="inventory__list-right-details">
                    <p className="inventory__list-title">Quantity</p>
                    <p>{inventoryItem.quantity}</p>
                  </div>
                  <div className="inventory__list-right-details">
                    <p className="inventory__list-title">Warehouse</p>
                    <p>{getWarehouseName(inventoryItem.warehouse_id)}</p>
                  </div>
                  <div div className="inventory__icons-tablet">
                    <p className="inventory__list-title">Actions</p>
                    <img
                      className="inventory__icon"
                      src={deleteIcon}
                      alt="Delete Logo"
                      onClick={() => {
                        openModal();
                        setDeletedItem(inventoryItem);
                      }}
                    />
                    <img
                      className="inventory__icon"
                      src={editIcon}
                      alt="Edit Logo"
                      onClick={() => editInventoryItemClick(inventoryItem.id)}
                    />
                  </div>
                </div>
              </div>
              <div className="inventory__list-bottom">
                <div div className="inventory__icons">
                  <img
                    onClick={() => {
                      openModal();
                      setDeletedItem(inventoryItem);
                    }}
                    src={deleteIcon}
                    alt="Delete Logo"
                  />
                  <img src={editIcon} alt="Edit Logo" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        handleDelete={handleDelete}
        deletedItem={deletedItem}
      />
    </div>
  );
}

export default Inventory;
