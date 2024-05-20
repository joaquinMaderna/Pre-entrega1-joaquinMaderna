import { Link } from "react-router-dom"


export const ItemCard = ({ producto }) => {
    return(

        <div className="bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-lg overflow-hidden">
            <Link to={`/producto/${producto.id}`} >
                <img className="w-full h-full object-cover" 
                src={producto.imagen} 
                alt={producto.nombre}/>
            </Link>
            <h2 className="text-l font-semibold py-1 mx-2 " >{producto.nombre}</h2>

            <div className="flex items-center gap-4 py-2 mx-2" >
                <span className="badge px-3 py-1 rounded-full text-s bg-gray-100 ">${producto.precio}</span>
                <button className="badge px-3 py-1 rounded-full text-s bg-green-100 " >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>  
                </button>
                <button className="badge px-3 py-1 rounded-full text-s bg-red-100 " >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>  
                </button>
            </div>

        </div>
    )
}
