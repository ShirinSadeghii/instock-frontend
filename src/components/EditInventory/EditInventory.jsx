import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import dropDownArrow from '../../assets/Icons/arrow_drop_down-24px.svg';


function EditInventory() {
    const categories = ['Electronics', 'Gear', 'Apparel', 'Accessories', 'Health', 'Electronics'];
    const [warehouseNames, setWarehouseNames] = useState([]);
    const [warehouses, setWarehouses] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { itemId } = useParams();
    const [stockStatus, setStockStatus] = useState('In Stock');
    const [selectedWarehouse, setSelectedWarehouse] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const backNavigateUrl = location.state.backNavigateUrl;
    const handleGoBack = () => {navigate(backNavigateUrl);}

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

    const updateInventoryItem = async () => {
        try {
            const warehouse = warehouses.find((warehouseItem) => warehouseItem.warehouse_name == itemData.warehouse_name);
            itemData.warehouse_id = warehouse.id;
            delete itemData.warehouse_name;
            delete itemData.updated_at;
            delete itemData.created_at;
            delete itemData.id;
            itemData.quantity = parseInt(itemData.quantity);
            console.log(itemData);
            const response = await axios.put(`http://3.20.237.64:80/inventories/${itemId}`, itemData);
            console.log(response.data);
            handleGoBack();
        } catch (error) {
            console.log(error);
        }
    }

    // MARK: Fetch Initial Form Data
    useEffect(() => {
        async function fetchItemData(itemId) {
            const itemResponse = await axios.get(`http://3.20.237.64:80/inventories/${itemId}`);
            setItemData(itemResponse.data[0]);
            const response = await axios.get('http://3.20.237.64:80/warehouses');
            setWarehouses(response.data);
            let updatedArray = [];
            for(let i = 0; i<response.data.length; i++) updatedArray = [...updatedArray, response.data[i].warehouse_name];
            setWarehouseNames(updatedArray);
        }
        fetchItemData(itemId);
    }, [itemId]);



    return (
        <div className="warehouse">
            <div className="newInv-heading">
                <img className="newInv-heading__img" src={backArrow} alt="Back Arrow" onClick={() => handleGoBack()} />
                <span>Edit Inventory Item</span>
            </div>
            <div className="newInv-container">
                <div className="newInv-itemDetails">
                    <p className="newInv__item-heading">Item Details</p>
                    <p className="newInv__item-name">Item Name</p>
                    <input className="newInv__item-input" type="text" placeholder={itemData.item_name} name='item_name' onChange={handleInputChange} />
                    <p className="newInv__item-name">Description</p>
                    <textarea className="newInv__item-descriptionInput" placeholder={itemData.description} name='description' cols="30" rows="10"></textarea>
                    <p className="newInv__item-name">Category</p>
                    <select
                        className="newInv__item-input"
                        value={selectedCategory}
                        onChange={handleInputChange}
                        name='category'
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
                        <label>
                            <input
                                type="radio"
                                name="status"
                                value="In Stock"
                                checked={stockStatus === 'In Stock'}
                                onChange={handleInputChange}
                            />
                            <span className="newInv__radio-label">In stock</span>
                        </label>
                        <label>
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
                    <p className="newInv__item-name">Warehouse</p>
                    <select
                        className="newInv__item-input"
                        value={selectedWarehouse}
                        onChange={handleInputChange}
                        name='warehouse_name'
                    >
                        <option value="">Please Select</option>
                        {warehouseNames.map((warehouse, index) => (
                            <option key={index} value={warehouse}>{warehouse}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="newInv__btn-container">
                <button className="newInv__cancel-btn" onClick={() => handleGoBack()}>Cancel</button>
                <button className="newInv__btn-blue" onClick={() => updateInventoryItem()}> Save</button>
            </div>
        </div>
    )
}
export default EditInventory;