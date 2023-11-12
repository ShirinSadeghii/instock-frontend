import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import "../Warehouse/Warehouse.scss";
import "../NewWarehouse/NewWarehouse.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function NewWarehouse() {
  const postWarehouse = async (warehouseId) => {
    try {
      const response = await axios.post(
        `http://3.20.237.64:80/warehouses/${warehouseId}`
      );
      console.log(" post successful:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const baseUrl = "http://3.20.237.64:80";
  const navigate = useNavigate();
  const [newWarehouse, setNewWarehouse] = useState();

  useEffect(() => {
    async function fetchNewWarehouse() {
      try {
        const response = await axios.get(`http://3.20.237.64:80/warehouses`);
        setNewWarehouse(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNewWarehouse();
  }, []);

  // function handleSubmit (event) {
  //     const submitNewWarhouse = () => {
  //         navigate("/");
  //     }
  //     submitNewWarhouse();
  // }

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
              name="WarehouseName"
              placeholder="Warehouse Name"
              required
            ></input>
            <label className="warehouse-detail__label">Street Address</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="StreetAddress"
              placeholder="Street Address"
              required
            ></input>
            <label className="warehouse-detail__label">City</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="City"
              placeholder="City"
              required
            ></input>
            <label className="warehouse-detail__label">Country</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="Country"
              placeholder="Country"
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
              name="ContactName"
              placeholder="Contact Name"
              required
            ></input>
            <label className="warehouse-detail__label">Position</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="Position"
              placeholder="Position"
              required
            ></input>
            <label className="warehouse-detail__label">Phone Number</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="PhoneNumber"
              placeholder="Phone Number"
              required
            ></input>
            <label className="warehouse-detail__label">Email</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="Email"
              placeholder="Email"
              required
            ></input>
            <div className="buttons--blue__container">
              <button
                className="buttons buttons--blue"
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
          <button onClick={handleClick} className="buttons">
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewWarehouse;
