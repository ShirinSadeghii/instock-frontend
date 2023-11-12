import Logo from '../../assets/Logo/InStock-Logo.svg';
import '../Header/Header.scss';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
const navigate = useNavigate();
const location = useLocation();

function handleClick (event) {
    const homePage = () => {
        navigate("/");
    }
    homePage();
  }
    return (
       <div className='header'>
        <div className='header__container'>
            <div className='header__sub-container'>
                <img onClick={(handleClick) => navigate('/')} className="header__logo" src={Logo} alt='Logo' />
            </div>
            <div className='header__sub-container' >
                <button className={`header__button ${location.pathname.startsWith('/') && !location.pathname.startsWith('/inventory') 
                && !location.pathname.startsWith('/add-inventory') && !location.pathname.startsWith('/edit-inventory') ? 'header__button--active' : ''}`} 
                onClick={() => navigate('/')}>Warehouses</button>
                <button   className={`header__button ${location.pathname.startsWith('/inventory') || location.pathname.startsWith('/add-inventory')
                 || location.pathname.startsWith('/edit-inventory') ? 'header__button--active' : ''}`} 
                onClick={() => navigate('/inventory')}>Inventory </button>
            </div>
        </div>
       
       </div> 
    )
}

export default Header