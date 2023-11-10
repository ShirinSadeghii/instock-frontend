import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import './AddInventory.scss';
import dropDownArrow from '../../assets/Icons/arrow_drop_down-24px.svg';
import '../Warehouse/Warehouse.scss';


function AddInventory() {
  return (
    <div className="warehouse">
        <div className="newInv-heading">
            <img className="newInv-heading__img" src={backArrow} alt="Back Arrow" />
            <span>Add New Inventory Item</span>
        </div>
        <div className="newInv-container">
            <div className="newInv-itemDetails">
                <p className="newInv__item-heading">Item Details</p>
                <p className="newInv__item-name">Item Name</p>
                <input className="newInv__item-input" type="text" placeholder="Item Name" />
                <p className="newInv__item-name">Description</p>
                <textarea className="newInv__item-descriptionInput" placeholder="Please enter a brief item description" id="" cols="30" rows="10"></textarea>
                <p className="newInv__item-name">Category</p>
                <button className="newInv__btn newInv__item-input" name="" placeholder="Please Select" id="" cols="30" rows="1">
                <p>Please select</p>
                <img src={dropDownArrow} alt="" />
                </button>
                
            </div>
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
                <p className="newInv__item-name">Quantity</p>
                <input className="newInv__item-input" type="text" placeholder="0" />
                <p className="newInv__item-name">Warehouse</p>
                <button className="newInv__btn newInv__item-input" placeholder="Please Select" id="" cols="30" rows="1">
                <p>Please select</p>
                <img src={dropDownArrow} alt="" />
                </button>
            </div>
        </div>
        <div className="newInv__btn-container">
            <button className="newInv__cancel-btn">Cancel</button>
            <button className="newInv__btn-blue"> + Add Item</button>
        </div>
        </div>
  )
}
export default AddInventory