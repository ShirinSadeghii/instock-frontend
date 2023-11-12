import { useNavigate } from "react-router-dom";
import axios from "axios";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import "./AddInventory.scss";
import dropDownArrow from "../../assets/Icons/arrow_drop_down-24px.svg";
import "../Warehouse/Warehouse.scss";
import { useState } from "react";

function AddInventory() {
  const [itemWarehouseId, setItemWarehouseId] = useState();
  const navigate = useNavigate();
  const handleBackClick = () =>{
    navigate('/inventory');
  }
  const [itemData, setItemData] = useState({
    warehouse_id: 1,
    item_name: '',
    description: '',
    category: '',
    status: '',
    quantity: 0,
  });

  const handleInputChange = (event) =>{
    const{name, value} = event.target;
    setItemData({
      [name]: value,
    });
  }

  const postInventoryItem = async () => {
    try{
      const response = await axios.post('http://3.20.237.64:80/inventories', itemData);
      console.log(response.data);
    }catch(error){
      console.log(error);
    }
  }
  
  return (
    <div className="warehouse">
      <div className="newInv-heading">
        <img className="newInv-heading__img" src={backArrow} alt="Back Arrow" onClick={() => handleBackClick()}/>
        <span>Add New Inventory Item</span>
      </div>
      <div className="newInv-container">
        <div className="newInv-itemDetails">
          <p className="newInv__item-heading">Item Details</p>
          <p className="newInv__item-name">Item Name</p>
          <input
            className="newInv__item-input"
            type="text"
            placeholder="Item Name"
            name="item_name"
            value={itemData?.item_name}
            onChange={handleInputChange}
          />
          <p className="newInv__item-name">Description</p>
          <textarea
            className="newInv__item-descriptionInput"
            placeholder="Please enter a brief item description"
            id=""
            cols="30"
            rows="10"
            name="description"
            value={itemData?.description}
            onChange={handleInputChange}
          ></textarea>
          <p className="newInv__item-name">Category</p>
          <button
            className="newInv__btn newInv__item-input"
            name=""
            placeholder="Please Select"
            id=""
            cols="30"
            rows="1"
          >
            <p>Please select</p>
            <img src={dropDownArrow} alt="" />
          </button>
        </div>
        <div className="newInv-itemAvailability">
          <p className="newInv__item-heading">Item Availability</p>
          <p className="newInv__item-name">Status</p>
          <div className="newInv__radio">
            <label>
              <input type="radio" />
              <span className="newInv__radio-label">In stock</span>
            </label>
            <label>
              <input placeholder="Out Of Stock" type="radio" />
              <span className="newInv__radio-label">Out of stock</span>
            </label>
          </div>
          <p className="newInv__item-name">Quantity</p>
          <input className="newInv__item-input" type="text" placeholder="0" name="quantity" value={itemData?.item_name} onChange={handleInputChange}/>
          <p className="newInv__item-name">Warehouse</p>
          <button
            className="newInv__btn newInv__item-input"
            placeholder="Please Select"
            id=""
            cols="30"
            rows="1"
          >
            <p>Please select</p>
            <img src={dropDownArrow} alt="" />
          </button>
        </div>
      </div>
      <div className="newInv__btn-container">
        <button className="newInv__cancel-btn" onClick={() => handleBackClick()}>Cancel</button>
        <button className="newInv__btn-blue" onClick={()=> postInventoryItem()}> + Add Item</button>
      </div>
    </div>
  );
}
export default AddInventory;
