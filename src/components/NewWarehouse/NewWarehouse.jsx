import ArrowBack from '../../assets/Icons/arrow_back-24px.svg';
import "../Warehouse/Warehouse.scss";
import '../NewWarehouse/NewWarehouse.scss';

function NewWarehouse() {
return (
    <section className="warehouse">
        <div className='warehouse__header'>
            <div className='warehouse__container'>
                <img src={ArrowBack} alt="arrow back icon"></img>
                <h1 className='warehouse__title'>Add New Warehouse</h1>
            </div>
        </div>
        <div className='warehouse-details'>
            <h2 className='warehouse-details__title'>Warehouse Details</h2>
            <form className='warehouse-details__form'> 
                <label className='warehouse-details__label'>Warehouse Name</label>
                <input className='warehouse-details__input' type="text" name="WarehouseName" placeholder='Warehouse Name' required></input>
                <label className='warehouse-details__label'>Street Address</label>
                <input className='warehouse-details__input' type="text" name="StreetAddress" placeholder='Street Address' required></input>
                <label className='warehouse-details__label'>City</label>
                <input className='warehouse-details__input' type="text" name="City" placeholder='City' required></input>
                <label className='warehouse-details__label'>Country</label>
                <input className='warehouse-details__input' type="text" name="Country" placeholder='Country' required></input>
            </form>
        </div>
        <div className='warehouse-details'>
            <h2 className='warehouse-details__title'>Contact Details</h2>
            <form className='warehouse-details__form'> 
                <label className='warehouse-details__label'>Contact Name</label>
                <input className='warehouse-details__input' type="text" name="ContactName" placeholder='Contact Name' required></input>
                <label className='warehouse-details__label'>Position</label>
                <input className='warehouse-details__input' type="text" name="Position" placeholder='Position' required></input>
                <label className='warehouse-details__label'>Phone Number</label>
                <input className='warehouse-details__input' type="text" name="PhoneNumber" placeholder='Phone Number' required></input>
                <label className='warehouse-details__label'>Email</label>
                <input className='warehouse-details__input' type="text" name="Email" placeholder='Email' required></input>
            </form>
        </div>
        <div className='warehouse-details__btn'>
            <div className='warehouse-details__btn-container'>
                <button className='buttons'>Cancel</button>
                <button className='buttons buttons--blue'>+Add Warehouse</button>
            </div>
        </div>
    </section>
)
}

export default NewWarehouse