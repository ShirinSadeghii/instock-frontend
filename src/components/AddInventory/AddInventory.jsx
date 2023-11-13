import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import './AddInventory.scss';
import dropDownArrow from '../../assets/Icons/arrow_drop_down-24px.svg';
import '../Warehouse/Warehouse.scss';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function AddInventory() {
  const categories = ['Electronics', 'Gear', 'Apparel', 'Accessories', 'Health', 'Electronics'];
  const [warehouseNames, setWarehouseNames] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [stockStatus, setStockStatus] = useState('In Stock');
  const [selectedWarehouse, setSelectedWarehouse] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();
  const handleBackClick = () => {navigate('/inventory');}

  const [itemData, setItemData] = useState({
    warehouse_id: 1,
    item_name: '',
    description: '',
    category: '',
    status: 'In Stock',
    quantity: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name == 'warehouse_name') setSelectedWarehouse(value);
    else if (name == 'category') setSelectedCategory(value);
    else if (name == 'status') setStockStatus(value); 
    setItemData({
      ...itemData,
      [name]: value,
    });
  }

  const postInventoryItem = async () => { 
    try {
      const warehouse = warehouses.find((warehouseItem) => warehouseItem.warehouse_name == itemData.warehouse_name);
      itemData.warehouse_id = warehouse.id;
      delete itemData.warehouse_name;
      itemData.quantity = parseInt(itemData.quantity);
      console.log(itemData);
      const response = await axios.post('http://3.20.237.64:80/inventories', itemData);
      console.log(response.data);
      handleBackClick();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    async function fetchWarehouseNames(){
      const response = await axios.get('http://3.20.237.64:80/warehouses');
      setWarehouses(response.data);
      let updatedArray = [];
      for(let i = 0; i<response.data.length; i++) updatedArray = [...updatedArray, response.data[i].warehouse_name];
      setWarehouseNames(updatedArray);
    }

    fetchWarehouseNames();
  }, []);


  // RETURN FUNCTION
  return (
    <div className="warehouse">
      <div className="newInv-heading">
        <img className="newInv-heading__img" src={backArrow} alt="Back Arrow" onClick={handleBackClick} />

        <span>Add New Inventory Item</span>
      </div>
      <div className="newInv-container">
        <div className="newInv-itemDetails">
          <p className="newInv__item-heading">Item Details</p>
          <p className="newInv__item-name">Item Name</p>
          <input className="newInv__item-input" type="text" name='item_name' onChange={handleInputChange} placeholder="Item Name" />
          <p className="newInv__item-name">Description</p>
          <textarea className="newInv__item-descriptionInput" placeholder="Please enter a brief item description" name='description' onChange={handleInputChange} cols="30" rows="10"></textarea>
          <p className="newInv__item-name">Category</p>
          <select
            className="newInv__item-input"
            value={selectedCategory}
            name='category'
            onChange={handleInputChange}
          >
            <option value="">Please Select</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="newInv-itemAvailability">
          <p className="newInv__item-heading">Item Availability</p>
          <p className="newInv__item-name">Status</p>
          <div className="newInv__radio">
            <label className="newInv__radio-container">
              <input
                type="radio"
                name="status"
                value="In Stock"
                checked={stockStatus === 'In Stock'}
                onChange={handleInputChange}
              />
              <span className="newInv__radio-label">In stock</span>
            </label>
            <label className="newInv__radio-container">
              <input
                type="radio"
                name="status"
                value="Out Of Stock"
                checked={stockStatus === 'Out Of Stock'}
                onChange={handleInputChange}
              />
              <span className="newInv__radio-label">Out of stock</span>
            </label>
          </div>

          <p className="newInv__item-name">Quantity</p>
          <input className="newInv__item-input" type="text" placeholder="0" name="quantity" onChange={handleInputChange} />
          <p className="newInv__item-name">Warehouse</p>
          <select
            className="newInv__item-input"
            name='warehouse_name'
            value={selectedWarehouse}
            onChange={handleInputChange}
          >
            <option value="">Please Select</option>
            {warehouseNames?.map((warehouse, index) => (
              <option key={index} value={warehouse}>{warehouse}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="newInv__btn-container">
        <button className="newInv__cancel-btn" onClick={() => handleBackClick()}>Cancel</button>
        <button className="newInv__btn-blue" onClick={() => postInventoryItem()}> + Add Item</button>
      </div>
    </div>
  );
}
export default AddInventory;
