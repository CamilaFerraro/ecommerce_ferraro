import {Link} from 'react-router-dom';
import './Item.css';

const Item = ({image, name, description, price}) => {
  return (
    <div>
      <img src ={image} alt={name} height = '500px'/>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <Link to={'/productos/:productId'}>
        <button className='boton-ver'>Seleccionar Cantidad</button>
      </Link>
    </div>
  );
};

export default Item;