import bArrow from "../../assets/Icons/arrow_back-24px.svg";
import "../Warehouse/Warehouse.scss";
import "../NewWarehouse/NewWarehouse.scss";

function EditWarehouse() {
  return (
    <section className="warehouse">
      <div className="warehouse__header">
        <div className="warehouse__container">
          <img src={bArrow} alt="arrow back icon"></img>
          <h1 className="warehouse__title">Edit Warehouse</h1>
        </div>
      </div>
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
      <div className="warehouse-detail">
        <h2 className="warehouse-detail__title">Contact Details</h2>
        <form className="warehouse-detail__form">
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
        </form>
      </div>
      <div className="warehouse-detail__btn">
        <div className="warehouse-detail__btn-container">
          <button className="buttons">Cancel</button>
          <button className="buttons buttons--blue">+Add Warehouse</button>
        </div>
      </div>
    </section>
  );
}

export default EditWarehouse;
