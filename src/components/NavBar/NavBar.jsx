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
                    <li><NavLink classname={({isActive}) => isActive ? "claseActive" : "claseInactive"} to="/">INICIO</NavLink></li>
                    <li><a href="#">RECETAS</a></li>
                    <li><a href="#">PEDIDOS</a></li>
                    <li><NavLink classname={({isActive}) => isActive ? "claseActive" : "claseInactive"} to="/productos/postres">POSTRES</NavLink></li>
                    <li><NavLink classname={({isActive}) => isActive ? "claseActive" : "claseInactive"} to="/contacto">CONTACTO</NavLink></li>
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