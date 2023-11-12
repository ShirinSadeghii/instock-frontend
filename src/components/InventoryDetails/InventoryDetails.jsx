import { useState, useEffect } from 'react'
import { useParams, useNavigate, useLocation, json } from "react-router-dom";
import './InventoryDetails.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import axios from 'axios';

function InventoryDetails() {
    const { itemId } = useParams('');
    const [itemData, setItemData] = useState();
    const [warehouseName, setWareHouseName] = useState('Warehouse Name');
    const navigate = useNavigate();
    const location = useLocation();
    const inStock = "In Stock";
    const backNavigateUrl = location.state.backNavigateUrl;
    const handleGoBack = () => { 
        navigate(backNavigateUrl);
    }
    const handleEditClick = () =>{
        navigate(`/edit-inventory/${itemId}`, { state: {backNavigateUrl: backNavigateUrl} });
    }


    // MARK: Use Effect - Fetch Data
    useEffect(() => {
        async function fetchItemData(itemId) {
            try {
                const itemResponse = await axios.get(`http://3.20.237.64:80/inventories/${itemId}`);
                setItemData(itemResponse.data[0]);
                const warehouseId = itemResponse.data[0].warehouse_id; // use response - setItemData not guaranteed to have finished
                const warehouseResponse = await axios.get(`http://3.20.237.64:80/warehouses/${warehouseId}`);
                setWareHouseName(warehouseResponse.data.warehouse_name);

            } catch (error) {
                console.log(error);
            }
        }
        fetchItemData(itemId);
    }, [itemId]);


    // MARK: Return Function
    return (
        <section className="inventory-item-section">
            <div className='inventory-item-header'>
                <div className='inventory-item-header__container'>
                    <img src={ArrowBack} onClick={handleGoBack} alt="arrow back icon"></img>
                    <h1 className='inventory-item-header__title'>{itemData?.item_name}</h1>
                    <button className='edit-btn-container inventory-item-header__edit-btn' onClick={() => handleEditClick(itemData?.id)}>
                        <img className="edit-icon" src={Edit} alt='edit icon'></img>
                        <span className='edit-label'>Edit</span>
                    </button>
                </div>
            </div>

            <div className='inventory-details'>

                {/* MARK: Top Layer Info */}
                <div className='inventory-details__top-layer'>
                    <article className='inventory-details__info-item'>
                        <p className='item-label'>Item Description:</p>
                        <p>{itemData?.description}</p>
                    </article>
                    <article className='inventory-details__info-item'>
                        <p className='item-label'>Category:</p>
                        <p>{itemData?.category}</p>
                    </article>
                </div>

                {/* MARK: Bottom Layer Info */}
                <div className='inventory-details__bottom-layer'>
                    <article className='inventory-details__info-item'>
                        <p className='item-label'>Status:</p>
                        <p className={` ${itemData?.status === inStock ? 'inventory-instock' : 'inventory-outstock'}`}>{itemData?.status}</p>
                    </article>
                    <article className='inventory-details__info-item'>
                        <p className='item-label'>Quantity:</p>
                        <p>{itemData?.quantity}</p>
                    </article>
                    <article className='inventory-details__info-item'>
                        <p className='item-label'>Warehouse:</p>
                        <p>{warehouseName}</p>
                    </article>
                </div>

            </div>

        </section>
    )
}

export default InventoryDetails