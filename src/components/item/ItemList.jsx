import Item from "./Item.jsx"


const ItemList = ({productos}) => {
    return (
    <>
        <div className="product-list">
            {productos.map(producto => (
                <Item key={producto.id} {...producto} />
            ))}
        </div>
    </>
    )
}

export default ItemList
