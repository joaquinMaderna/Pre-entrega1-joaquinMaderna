
export const ItemDetail = ({ prodDet }) => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center antialiased " >
            <div className="rounded-xl shadow-xl bg-gray-800 px-12 py-10" >
                <div className="rounded-xl h-96 w-72 shadow-xl bg-gray-100" >
                    <img className="rounded-xl" src={prodDet.imagen} alt={prodDet.nombre} />

                    <div className="p-6" >
                        <h1 className="text-xl font-semibold" >{prodDet.nombre}</h1>
                        <p className="text-gray-600" >{prodDet.precio}</p>
                        <p className="text-gray-600" >{prodDet.descripcion}</p>
                    </div>
                </div>  
            </div>
        </div>
)}