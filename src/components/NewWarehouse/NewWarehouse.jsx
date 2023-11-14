import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import "../Warehouse/Warehouse.scss";
import "../NewWarehouse/NewWarehouse.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import helpers from '../../helpers';

function NewWarehouse() {
  const navigate = useNavigate();
  const [warehouseData, setWarehouseData] = useState({
    warehouse_name: "",
    address: "",
    city: "",
    country: "",
    contact_name: "",
    contact_position: "",
    contact_phone: "",
    contact_email: ""
  });

  const postWarehouse = async (warehouseId) => {
    try {
      const { error, value: cleanedData } = helpers.warehouseSchema.validate(warehouseData);
      if (error) console.error("Failed to validate warehouse data: ", error);
      else {
        const response = await axios.post(`http://3.20.237.64:80/warehouses`, cleanedData);
        console.log(" post successful:", response.data);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) =>{
    const{name, value} = event.target;
    setWarehouseData({
      ...warehouseData,
      [name]: value,
    });
  }

  function handleClick(event) {
    const cancelSubmit = () => {
      navigate("/");
    };
    cancelSubmit();
  }
  return (
    <section className="warehouse">
      <div className="warehouse__header">
        <div className="warehouse__container">
          <img
          className="cursor-pointer"
            onClick={(handleClick) => navigate("/")}
            src={ArrowBack}
            alt="arrow back icon"
          ></img>
          <h1 className="warehouse__title">Add New Warehouse</h1>
        </div>
      </div>
      <div className="warehouse-parent">
        <div className="warehouse-detail">
          <h2 className="warehouse-detail__title">Warehouse Details</h2>
          <form className="warehouse-detail__form">
            <label className="warehouse-detail__label">Warehouse Name</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="warehouse_name"
              placeholder="Warehouse Name"
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">Street Address</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="address"
              placeholder="Street Address"
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">City</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="city"
              placeholder="City"
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">Country</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="country"
              placeholder="Country"
              onChange={handleInputChange}
              required
            ></input>
          </form>
        </div>
        <div className="warehouse-detail__divider"></div>
        <div className="warehouse-detail">
          <h2 className="warehouse-detail__title">Contact Details</h2>
          <form onSubmit={handleClick} className="warehouse-detail__form">
            <label className="warehouse-detail__label">Contact Name</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="contact_name"
              placeholder="Contact Name"
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">Position</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="contact_position"
              placeholder="Position"
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">Phone Number</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="contact_phone"
              placeholder="Phone Number"
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">Email</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="contact_email"
              placeholder="Email"
              onChange={handleInputChange}
              required
            ></input>
            <div className="buttons--blue__container">
              <button
                className="buttons buttons--blue cursor-pointer"
                onClick={() => {
                  postWarehouse();
                }}
              >
                +Add Warehouse
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="warehouse-detail__btn">
        <div className="warehouse-detail__btn-container">
          <button onClick={handleClick} className="buttons cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewWarehouse;
