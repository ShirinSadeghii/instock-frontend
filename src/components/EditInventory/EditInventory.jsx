import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import dropDownArrow from '../../assets/Icons/arrow_drop_down-24px.svg';


function EditInventory({ itemId }) {
    const location = useLocation();
    const navigate = useNavigate();
    const backNavigateUrl = location.state.backNavigateUrl;
    const handleGoBack = () => { 
        navigate(backNavigateUrl);
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
            ...itemData,
          [name]: value,
        });
      }

    const updateInventoryItem = async () => {
        try{
            const response = await axios.put(`'http://3.20.237.64:80/inventories/${itemId}`, itemData);
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
    }


    // MARK: Fetch Initial Form Data
    useEffect(() => {
        async function fetchItemData(itemId) {
            const response = await axios.get(`http://3.20.237.64:80/inventories/${itemId}`);
            setItemData(response.data[0]);

        }
        fetchItemData(itemId);
    }, [itemId]);


    // MARK: Return Function
    return (

        // MARK: Header
        <div className="warehouse">
            <div className="newInv-heading">
                <img className="newInv-heading__img" src={backArrow} alt="Back Arrow" onClick={() => handleGoBack()} />
                <span>Edit Inventory Item</span>
            </div>

            {/* MARK: Item Details */}
            <div className="newInv-container">
                <div className="newInv-itemDetails">
                    <p className="newInv__item-heading">Item Details</p>
                    <p className="newInv__item-name">Item Name</p>
                    <input className="newInv__item-input" type="text" placeholder="Item Name" name="item_name" onChange={handleInputChange}/>
                    <p className="newInv__item-name">Description</p>
                    <textarea className="newInv__item-descriptionInput" placeholder="Please enter a brief item description" id="" cols="30" rows="10" name="description" onChange={handleInputChange}></textarea>
                    <p className="newInv__item-name">Category</p>
                    <button className="newInv__btn newInv__item-input" name="" placeholder="Please Select" id="" cols="30" rows="1">
                        <p>Please select</p>
                        <img src={dropDownArrow} alt="" />
                    </button>

                </div>

                {/* MARK: Item Availability */}
                <div className="newInv-itemAvailability">
                    <p className="newInv__item-heading">Item Availability</p>
                    <p className="newInv__item-name">Status</p>
                    <div className="newInv__radio" >
                        <label>
                            <input type="radio" />
                            <span className="newInv__radio-label">In stock</span>
                        </label>
                        <label >
                            <input placeholder="Out Of Stock" type="radio" />
                            <span className="newInv__radio-label">Out of stock</span>
                        </label>
                    </div>
                    <p className="newInv__item-name">Warehouse</p>
                    <button className="newInv__btn newInv__item-input" placeholder="Please Select" id="" cols="30" rows="1">
                        <p>Please select</p>
                        <img src={dropDownArrow} alt="" />
                    </button>
                </div>
            </div>

            {/* MARK: Buttons */}
            <div className="newInv__btn-container">
                <button className="newInv__cancel-btn" onClick={() => handleGoBack()}>Cancel</button>
                <button className="newInv__btn-blue" onClick={() => updateInventoryItem()}>Submit</button>
            </div>
        </div>
    )
}
export default EditInventory