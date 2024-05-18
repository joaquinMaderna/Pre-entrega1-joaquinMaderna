
export const ItemDetail = ({ product }) => {

    return (
        <div>
            <h1>{product.nombre}</h1>
            <p>{product.descripcion}</p>
            <p>{product.precio}</p>
            <img src={product.imagen} alt={product.nombre} />
            <p>{product.stock}</p>
        </div>
)}