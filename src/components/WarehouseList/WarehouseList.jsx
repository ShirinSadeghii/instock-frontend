import "../WarehouseList/warehouseList.scss";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import trashBin from "../../assets/Icons/delete_outline-24px.svg";
import pen from "../../assets/Icons/edit-24px.svg";
import dataJson from "../../data/data.json";
import lookingGlass from "../../assets/Icons/search-24px.svg";
import sortArrow from "../../assets/Icons/sort-24px.svg";
import Modal from "./modal";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function WarehouseList() {
  const [deleteWarehouse, SetDeleteWarehouse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (itemId) => {
    navigate(`/details/${itemId}`);
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = async (warehouseId) => {
    try {
      const response = await axios.delete(
        `http://3.20.237.64:80/warehouses/${warehouseId}`
      );
      console.log("Deletion successful:", response.data);
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="warehouseListContainer">
        <div className="warehouseListContainer__titleBox">
          <h1 className="warehouseListContainer__title">Warehouses</h1>
          <div className="warehouseListContainer__searchBarBox">
            <input
              className="warehouseListContainer__searchBar"
              placeholder="Search..."
            ></input>
            <img
              className="warehouseListContainer__lookingGlass"
              src={lookingGlass}
              alt="a looking glass icon"
            />
            <button className="warehouseListContainer__searchButton">
              + Add New Warehouse
            </button>
          </div>
        </div>

        <ul className="warehouseListContainer__detailsBox">
          <div className="warehouseListContainer__tabletLeader">
            <div className="warehouseListContainer__tabletLeader--box1">
              <p className="warehouseListContainer__tabletLeaderItem">
                WAREHOUSE{" "}
                <img
                  className="warehouseListContainer__tabletLeaderArrow"
                  src={sortArrow}
                  alt="sort arrows"
                />
              </p>
              <p className="warehouseListContainer__tabletLeaderItem">
                ADDRESS
                <img
                  className="warehouseListContainer__tabletLeaderArrow"
                  src={sortArrow}
                  alt="sort arrows"
                />
              </p>
              <p className="warehouseListContainer__tabletLeaderItem">
                CONTACT NAME
                <img
                  className="warehouseListContainer__tabletLeaderArrow"
                  src={sortArrow}
                  alt="sort arrows"
                />
              </p>
            </div>
            <div className="warehouseListContainer__tabletLeader--box2">
              <p className="warehouseListContainer__tabletLeaderItem">
                CONTACT INFORMATION
                <img
                  className="warehouseListContainer__tabletLeaderArrow"
                  src={sortArrow}
                  alt="sort arrows"
                />
              </p>
              <p className="warehouseListContainer__tabletLeaderItem">
                ACTIONS
              </p>
            </div>
          </div>

          {dataJson.map((info, index) => {
            return (
              <li
                key={index}
                className="warehouseListContainer__detailsBox--list"
              >
                <div className="warehouseListContainer__detailsBox--left">
                  <p className="warehouseListContainer__detailsTitle">
                    WAREHOUSE
                  </p>
                  <p className="warehouseListContainer__detailsInfo--alt" onClick={() => handleItemClick(info.id)}>
                    {info.warehouse_name}
                    <img
                      className="warehouseListContainer__arrowLogo"
                      src={arrowRight}
                      alt="arrowRight"
                    />
                  </p>
                  <p className="warehouseListContainer__detailsTitle">
                    ADDRESS
                  </p>

                  <span className="warehouseListContainer__detailsInfo">
                    {info.address} {info.city}, {info.country}
                  </span>
                  <p className="warehouseListContainer__detailsInfo--altName">
                    {info.contact_name}
                  </p>
                  <span>
                    <img
                      className="warehouseListContainer__binIcon"
                      src={trashBin}
                      alt="trashbin"
                      onClick={() => {
                        openModal();
                        SetDeleteWarehouse(info);
                      }}
                    />
                  </span>
                </div>
                <div className="warehouseListContainer__detailsBox--right">
                  <p className="warehouseListContainer__detailsTitle">
                    CONTACT NAME
                  </p>
                  <p className="warehouseListContainer__detailsInfo--Name">
                    {info.contact_name}
                  </p>
                  <p className="warehouseListContainer__detailsTitle">
                    CONTACT INFORMATION
                  </p>
                  <p className="warehouseListContainer__detailsInfo warehouseListContainer__detailsInfo2">
                    {info.contact_phone} {info.contact_email}
                  </p>

                  <span className="warehouseListContainer__penIcon--box">
                    <img
                      className="warehouseListContainer__binIconTablet"
                      src={trashBin}
                      alt="trashbin"
                      onClick={() => {
                        openModal();
                        SetDeleteWarehouse(info);
                      }}
                    />
                    <img
                      className="warehouseListContainer__penIcon"
                      src={pen}
                      alt="editPen"
                    />
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Modal
        showModal={showModal}
        closeModal={closeModal}
        handleDelete={handleDelete}
        deleteWarehouse={deleteWarehouse}
      />
    </>
  );
}
export default WarehouseList;
