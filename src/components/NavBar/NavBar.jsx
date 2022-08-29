import logo from '../../fotos/Logo.png';
import './style.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className = 'navbar-container'>
            <div class="logo">
                <img width = {'70px'} src = {logo} alt = "logo"/>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">INICIO</a>
                    </li>
                    <li>
                        <a href="#">RECETAS</a>
                    </li>
                    <li>
                        <a href="#">PEDIDOS</a>
                    </li>
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