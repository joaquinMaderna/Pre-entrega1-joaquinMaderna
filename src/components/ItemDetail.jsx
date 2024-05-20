
export const ItemDetail = ({ product }) => {

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center antialiased " >
            <div className="rounded-xl shadow-xl bg-gray-800 px-12 py-10" >
                <div className="rounded-xl h-96 w-72 shadow-xl bg-gray-100" >
                    <img className="rounded-xl" src={product.imagen} alt={product.nombre} />

                    <div className="p-6" >
                        <h1 className="text-xl font-semibold" >{product.nombre}</h1>
                        <p className="text-gray-600" >{product.precio}</p>
                        <p className="text-gray-600" >{product.descripcion}</p>
                    </div>
                </div>  
            </div>
        </div>
)}