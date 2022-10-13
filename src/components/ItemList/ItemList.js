import Item from "../Item/Item";

const ItemList = ({itemsList}) => {
  return (
    <div>
      {
        itemsList.map(producto => (
          <Item 
            key = {producto.id}
            id = {producto.id}
            name={producto.name} 
            description = {producto.description}
            price = {producto.price}
            image = {producto.image}
          />
        ))  
      }  
    </div>
  )
}
export default ItemList;
