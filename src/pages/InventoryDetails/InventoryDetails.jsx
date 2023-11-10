import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import './InventoryDetails.scss';
import axios from 'axios';

function InventoryDetails() {
    const { itemId } = useParams('');
    const [itemData, setItemData] = useState();


    // MARK: Use Effect - Fetch Data
    useEffect(() => {
        async function fetchItemData(itemId) {
            try {
                const response = await axios.get(`http://3.20.237.64:80/inventories/${itemId}`);
                setItemData(response.data[0]);

            } catch (error) {
                console.log(error);
            }
        }
        fetchItemData(itemId);
    }, [itemId]);


    // MARK: Return Function
    return (
        <div>

            {/* MARK: Generic Headuur */}
            <Header />

            {/* MARK: Item Header */}
            <div className='inventory-item-container'>
                <section className="inventory-item-section">
                    <div className='inventory-item-header'>
                        <div className='inventory-item-header__container'>
                            <img src={ArrowBack} alt="arrow back icon"></img>
                            <h1 className='inventory-item-header__title'>Name</h1>
                        </div>
                        <div className='inventory-item-header__container'>
                            <button className='inventory-item-header__edit-btn'>
                                <img className="inventory-item-header__edit-icon" src={Edit} alt='edit icon'></img>
                                <span className='inventory-item-header__edit-txt'>Edit</span>
                            </button>
                        </div>
                    </div>

                    <div className='inventory-details'>

                        {/* MARK: Top Layer Info */}
                        <div className='inventory-details__top-layer'>
                            <article className='inventory-details__info-item'>
                                <h3>Item Description:</h3>
                                <p>{itemData?.description}</p>
                            </article>
                            <article className='inventory-details__info-item'>
                                <h3>Category:</h3>
                                <p>{itemData?.category}</p>
                            </article>
                        </div>

                        {/* MARK: Bottom Layer Info */}
                        <div className='inventory-details__bottom-layer'>
                            <article className='inventory-details__info-item'>
                                <h3>Status:</h3>
                                <p>{itemData?.status}</p>
                            </article>
                            <article className='inventory-details__info-item'>
                                <h3>Quantity:</h3>
                                <p>{itemData?.quantity}</p>
                            </article>
                            <article className='inventory-details__info-item'>
                                <h3>Warehouse:</h3>
                                <p>{itemData?.warehouse_id}</p>
                            </article>
                        </div>

                    </div>

                </section>

                {/* MARK: Futuur */}
                <Footer />
            </div>
        </div>



    )
}

export default InventoryDetails
