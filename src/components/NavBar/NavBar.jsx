import logo from '../../fotos/Logo.png';
import './style.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className = 'navbar-container'>
            <div class="logo">
                <Link to="/">
                <img width = {'70px'} src = {logo} alt = "logo"/>
                </Link>
            </div>
            <div className='navegacion'>
                <ul>
                    <li><NavLink to="/">INICIO</NavLink></li>
                    <li><NavLink to="/contacto">CONTACTO</NavLink></li>
                </ul>
                <CartWidget/>
            </div>
            <div>
                <button> Login </button>
            </div>
        </div>
    );
};

export default NavBar;