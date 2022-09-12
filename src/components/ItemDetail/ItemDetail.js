import './ItemDetail.css';

export const ItemDetail = ({title, image, description, price}) => {
    return (
        <div className='itemDetail'>
            <h1>{title}</h1>
            <img src={image} alt={description} height="250px"/>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    )
}

