import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <div>
      {
        items.map(producto => (
          <Item
            key={producto.id}
            item={producto}
          />
        ))
      }
    </div>
  )
}

export default ItemList;
