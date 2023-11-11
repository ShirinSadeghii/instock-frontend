import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import chevronIcon from '../../assets/Icons/chevron_right-24px.svg';
import './Inventory.scss';
import sortIcon from '../../assets/Icons/sort-24px.svg';
import { useNavigate } from 'react-router-dom';


function Inventory({inventoryItem}) {

  const inStock = "In Stock";

  const navigate = useNavigate();

  const handleAddItemClick = () => {
    // Navigate to the Add Item Page
    navigate('/add-inventory');
  };




  const dummyInventoryData = [{
      id: 1,
      warehouse_id: 1,
      item_name: 'Television',
      description:
        'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 500,
    },
    {
      id: 2,
      warehouse_id: 1,
      item_name: 'Gym Bag',
      description:
        'Made out of military-grade synthetic materials, this gym bag is highly durable, water resistant, and easy to clean.',
      category: 'Gear',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 3,
      warehouse_id: 1,
      item_name: 'Hoodie',
      description:
        'A simple 100% cotton hoodie, this is an essential piece for any wardrobe.',
      category: 'Apparel',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 4,
      warehouse_id: 1,
      item_name: 'Keychain',
      description:
        'Made from 100% genuine leather, this keychain will keep your keys organized while keeping a classic, professional look.',
      category: 'Accessories',
      status: 'In Stock',
      quantity: 2000,
    },
    {
      id: 5,
      warehouse_id: 1,
      item_name: 'Shampoo',
      description: 'Natural shampoo made from 99% biodegradable ingredients.',
      category: 'Health',
      status: 'In Stock',
      quantity: 4350,
    },
    {
      id: 6,
      warehouse_id: 1,
      item_name: 'Phone Charger',
      description:
        'This USB-C phone charger features fast charging for the latest devices.',
      category: 'Electronics',
      status: 'In Stock',
      quantity: 10000,
    },
    {
      id: 7,
      warehouse_id: 1,
      item_name: 'Tent',
      description:
        'Perfect for spring or summer camping, this 1-person tent is easy to pack and has the option to become modular when used with other products.',
      category: 'Gear',
      status: 'In Stock',
      quantity: 800,
    },
    {
      id: 8,
      warehouse_id: 1,
      item_name: 'Winter Jacket',
      description:
        'Made with a durable 100% waterproof shell, and breathable layers without a ton of vents and perforations. breathable layers without a ton of vents and perforations.',
      category: 'Apparel',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 9,
      warehouse_id: 1,
      item_name: 'Watch',
      description:
        'Crafted from premium materials including a full-grain leather strap and a stainless steel case, this watch features swiss movement and is waterproof up to 5 ATM.',
      category: 'Accessories',
      status: 'Out of Stock',
      quantity: 0,
    },
    {
      id: 10,
      warehouse_id: 1,
      item_name: 'Soap',
      description:
        'Organic and hypoallergenic, this soap is safe to use for all skin types.',
      category: 'Health',
      status: 'In Stock',
      quantity: 12500,
    },]



   
  return (
   
   <div className="warehouseListContainer">
    <div className="inventoryListContainer__titleBox">
          <h1 className="inventoryListContainer__title">Inventory</h1>
          <div className="inventoryListContainer__items">
            <input className="inventoryListContainer__searchBar" placeholder="Search...">
            </input>
            <button className="inventoryListContainer__searchButton" onClick={handleAddItemClick}>+Add New Item</button>
          </div>
    </div>
    <div className="inventory-titlebar">
      <div className="inventory-titlebar__item">INVENTORY ITEM
      <img src={sortIcon} alt="Sort Icon" />
      </div>
      <div className="inventory-titlebar__item">CATEGORY
      <img src={sortIcon} alt="Sort Icon" />
      </div>
      <div className="inventory-titlebar__item">STATUS
      <img src={sortIcon} alt="Sort Icon" />
      </div>
      <div className="inventory-titlebar__item">QUANTITY
      <img src={sortIcon} alt="Sort Icon" />
      </div>
      <div className="inventory-titlebar__item">WAREHOUSE
      <img src={sortIcon} alt="Sort Icon" />
      </div>
      <div className="inventory-titlebar__item">ACTIONS
      <img src={sortIcon} alt="Sort Icon" />
      </div>
    </div>
    <ul className="inventory">
      {dummyInventoryData.map((inventoryItem, index) => {
        return (
          <li key={index} className="inventory__list">
            <div className="inventory__list-top">
              <div className="inventory__list-left">
                <div className="inventory__list-left-details">
                    <p className = "inventory__list-title">Inventory Item</p>
                    <div className="inventory__list-container">
                      <p className="inventory__list-blueItm">{inventoryItem.item_name}</p>
                      <img src={chevronIcon} alt="" />
                    </div>
                  </div> 
                <div className="inventory__list-left-details">
                    <p className = "inventory__list-title">Category</p>
                    <p>{inventoryItem.category}</p>
                </div>
              </div>
              <div className="inventory__list-right">
                <div className="inventory__list-right-details">
                    <p className = "inventory__list-title">Status</p>
                    <p className={` ${inventoryItem.status === inStock ? 'inventory__list-instock' : 'inventory__list-outstock'}`}>
                      {inventoryItem.status}</p>
                </div>
                <div className="inventory__list-right-details">
                    <p className = "inventory__list-title">Quantity</p>
                    <p>{inventoryItem.quantity}</p>
                </div>
                <div className="inventory__list-right-details">
                    <p className = "inventory__list-title">Warehouse</p>
                    <p>{inventoryItem.id}</p>
                </div>
                <div div className="inventory__icons-tablet">
                  <p className = "inventory__list-title">Actions</p>
                  <img className="inventory__icon" src={deleteIcon} alt="Delete Logo" />
                  <img className="inventory__icon" src={editIcon} alt="Edit Logo" />  
                </div> 
              </div>
            </div>
            <div className="inventory__list-bottom">
                  <div div className="inventory__icons">
                    <img src={deleteIcon} alt="Delete Logo" />
                    <img src={editIcon} alt="Edit Logo" />  
                  </div>  
            </div>
          </li>
          )
      })}
    </ul>
  </div>
  );
}
export default Inventory;
