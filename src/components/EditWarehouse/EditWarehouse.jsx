import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import "../Warehouse/Warehouse.scss";
import "../NewWarehouse/NewWarehouse.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function EditWarehouse() {
  const {itemId} = useParams();
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

  useEffect(() =>{
    async function fetchWarehouse(){
      const response = await axios.get(`http://3.20.237.64:80/warehouses/${itemId}`);
      setWarehouseData(response.data);
    }
    fetchWarehouse();
  }, []);

  const putWarehouse = async () => {
    try {
      delete warehouseData.created_at;
      delete warehouseData.updated_at;
      delete warehouseData.id;
      console.log(warehouseData);
      const response = await axios.put(`http://3.20.237.64:80/warehouses/${itemId}`, warehouseData);
      console.log(" put successful:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  function handleClick(event) {
    const cancelSubmit = () => {
      navigate("/");
    };
    cancelSubmit();
  }

  const handleInputChange = (event) =>{
    const { name, value } = event.target;
    setWarehouseData({
      ...warehouseData,
      [name]: value,
  });
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
          <h1 className="warehouse__title">Edit Warehouse</h1>
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
              placeholder={warehouseData.warehouse_name}
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">Street Address</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="address"
              placeholder={warehouseData.address}
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">City</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="city"
              placeholder={warehouseData.city}
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">Country</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="country"
              placeholder={warehouseData.country}
              onChange={handleInputChange}
              required
            ></input>
          </form>
        </div>
        <div className="warehouse-detail__divider"></div>
        <div className="warehouse-detail">
          <h2 className="warehouse-detail__title">Contact Details</h2>
          <form className="warehouse-detail__form">
            <label className="warehouse-detail__label">Contact Name</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="contact_name"
              placeholder={warehouseData.contact_name}
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">Position</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="contact_position"
              placeholder={warehouseData.contact_position}
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">Phone Number</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="contact_phone"
              placeholder={warehouseData.contact_phone}
              onChange={handleInputChange}
              required
            ></input>
            <label className="warehouse-detail__label">Email</label>
            <input
              className="warehouse-detail__input"
              type="text"
              name="contact_email"
              placeholder={warehouseData.contact_email}
              onChange={handleInputChange}
              required
            ></input>
            <div className="buttons--blue__container">
              <button className="buttons buttons--blue" type="button" onClick={() => putWarehouse()}>
                +Add Warehouse
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="warehouse-detail__btn">
        <div className="warehouse-detail__btn-container">
          <button onClick={handleClick} type="button" className="buttons">
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default EditWarehouse;
