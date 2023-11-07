import Logo from '../../assets/Logo/InStock-Logo_1x.png';
import '../Header/Header.scss';

function Header() {
    return (
       <div className='header'>
        <div className='header__container'>
            <img className="header__logo" src={Logo} alt='Logo'></img>
        </div>
        <div className='header__container' >
            <button className='header__button'>Warehouses</button>
            <button className='header__button'>Inventory </button>
        </div>
       
        
       </div> 
    )
}

export default Header