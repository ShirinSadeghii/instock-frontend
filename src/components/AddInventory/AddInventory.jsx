import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import './AddInventory.scss';
import dropDownArrow from '../../assets/Icons/arrow_drop_down-24px.svg';
import '../Warehouse/Warehouse.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddInventory() {

    const [stockStatus, setStockStatus] = useState('InStock');
    const [selectedWarehouse, setSelectedWarehouse] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const navigate = useNavigate();

    const handleBackClick = () => {
      // Navigate back to the Inventory Page
      navigate('/inventory');
    };


    // Event handler for when the radio button selection changes
    const handleStockStatusChange = (event) => {
      setStockStatus(event.target.value);
    };

    // Event handler for when the warehouse selection changes
    const handleWarehouseChange = (event) => {
        setSelectedWarehouse(event.target.value);
    };

      // Event handler for when the category selection changes
      const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };


    // Dummy warehouse names
    const warehouses = ["Warehouse 1", "Warehouse 2", "Warehouse 3", "Warehouse 4", "Warehouse 5", "Warehouse 6", "Warehouse 7", "Warehouse 8"];
    const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];


  return (
    <div className="warehouse">
        <div className="newInv-heading">
            <img className="newInv-heading__img" src={backArrow} alt="Back Arrow" onClick={handleBackClick}  />
            
            <span>Add New Inventory Item</span>
        </div>
        <div className="newInv-container">
            <div className="newInv-itemDetails">
                <p className="newInv__item-heading">Item Details</p>
                <p className="newInv__item-name">Item Name</p>
                <input className="newInv__item-input" type="text" placeholder="Item Name" />
                <p className="newInv__item-name">Description</p>
                <textarea className="newInv__item-descriptionInput" placeholder="Please enter a brief item description..." id="" cols="30" rows="10"></textarea>
                <p className="newInv__item-name">Category</p>
                <select 
                    className="newInv__item-input" 
                    value={selectedCategory} 
                    onChange={handleCategoryChange}
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
                        name="stockStatus" 
                        value="InStock" 
                        checked={stockStatus === 'InStock'} 
                        onChange={handleStockStatusChange} 
                        />
                        <span className="newInv__radio-label">In stock</span>
                    </label>
                    <label className="newInv__radio-container">
                        <input 
                        type="radio" 
                        name="stockStatus" 
                        value="OutOfStock" 
                        checked={stockStatus === 'OutOfStock'} 
                        onChange={handleStockStatusChange} 
                        />
                        <span className="newInv__radio-label">Out of stock</span>
                    </label>
                </div>

                <p className="newInv__item-name">Quantity</p>
                <input className="newInv__item-input" type="text" placeholder="0" />
                <p className="newInv__item-name">Warehouse</p>
                <select 
                    className="newInv__item-input" 
                    value={selectedWarehouse} 
                    onChange={handleWarehouseChange}
                >
                    <option value="">Please Select</option>
                    {warehouses.map((warehouse, index) => (
                        <option key={index} value={warehouse}>{warehouse}</option>
                    ))}
                </select>
            </div>
        </div>
        <div className="newInv__btn-container">
            <button className="newInv__cancel-btn">Cancel</button>
            <button className="newInv__btn-blue"> + Add Item</button>
        </div>
        </div>
  )
}
export default AddInventory;