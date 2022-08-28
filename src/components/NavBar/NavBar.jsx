import logo from '../../fotos/Logo.png';
import './style.css';

const NavBar = () => {
    return (
        <div className = 'navbar-container'>
            <div>
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
            </div>
            <div>
                <button> Login </button>
            </div>
        </div>
    );
};

export default NavBar;