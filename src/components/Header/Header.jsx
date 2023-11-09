import Logo from '../../assets/Logo/InStock-Logo.svg';
import '../Header/Header.scss';

function Header() {
    return (
       <div className='header'>
        <div className='header__container'>
            <div className='header__sub-container'>
                <img className="header__logo" src={Logo} alt='Logo' />
            </div>
            <div className='header__sub-container' >
                <button className='header__button header__button--active'>Warehouses</button>
                <button className='header__button'>Inventory </button>
            </div>
        </div>
       
       </div> 
    )
}

export default Header