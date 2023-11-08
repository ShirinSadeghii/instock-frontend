import { useState } from 'react';
import dataJson from '../../data/data.json';
import dataDetailsJson from '../../data/datadetails.json';
import '../Warehouse/Warehouse.scss';
import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import Edit from '../../assets/Icons/edit-24px.svg';
import Chevron from '../../assets/Icons/chevron_right-24px.svg';
import Delete from '../../assets/Icons/delete_outline-24px.svg';

function Warehouse() {
    const [warehouses, setWarehouses] = useState(dataJson)
    const [selectedWarehouse, setSelectedWarehouse] = useState(dataDetailsJson[0]);
    
    return (
        <section className='warehouse'>
            <div className='warehouse__header'>
                <div className='warehouse__container'>
                    <img src={ArrowBack} alt="arrow back icon"></img>
                    <h1 className='warehouse__title'>{dataJson[0].warehouse_name}</h1>
                </div>
                <div className='warehouse__container'>
                    <button className='warehouse__edit-btn'>
                        <img className="warehouse__edit-icon" src={Edit} alt='edit icon'></img>
                    </button>
                </div>
            </div>
            
            <ul className='warehouse__list'> 
                    <li className='warehouse__list-item'>
                        <span className='warehouse__label'>WAREHOUSE ADDRESS:</span>
                        <span className='warehouse__label-item' >{dataJson[0].address}, {dataJson[0].city}, {dataJson[0].country}</span>
                    </li>
                    <li className='warehouse__list-item warehouse__list-item--row'>
                        <div>
                            <span className='warehouse__label'>CONTACT NAME:</span>
                            <span className='warehouse__label-item'><br></br>{dataJson[0].contact_name}</span>
                            <span className='warehouse__label-item'><br></br>{dataJson[0].contact_position}</span>
                        </div>
                        <div>
                            <span className='warehouse__label'>CONTACT INFORMATION:</span>
                            <span className='warehouse__label-item'><br></br>{dataJson[0].contact_phone}</span>
                            <span className='warehouse__label-item'><br></br>{dataJson[0].contact_email}</span>
                        </div>
                      
                    </li>
            </ul>
            <ul className='warehouse__list'> {dataDetailsJson.map((detail, index) => {
                return (
                    <li key={index} className='warehouse__inventory'>
                        <div className='inventory'>
                            <div className='inventory__container'>
                                <span className='warehouse__label'>INVENTORY ITEM</span>
                                <span className='warehouse__label-item warehouse__label-item--blue'>{detail.item_name}
                                    <img src={Chevron} alt="chevron icon"></img>
                                </span>
                                <span className='warehouse__label'>CATEGORY</span>
                                <span className='warehouse__label-item'>{detail.category}</span>
                            </div>
                            <div className='inventory__container'>
                                <span className='warehouse__label'>STATUS</span>
                                <button className='warehouse__label-item warehouse__label-btn'>{detail.status}</button>
                                <span className='warehouse__label'>QTY</span>
                                <span className='warehouse__label-item'>{detail.quantity}</span>
                            </div>
                        </div>
                        <div className='logo__container'>
                            <img src={Delete} alt="delete icon"></img>
                            <img src={Edit} alt="edit icon"></img>
                        </div>
                    </li>
                )
            })}
            </ul>

        </section>
    )
}

export default Warehouse