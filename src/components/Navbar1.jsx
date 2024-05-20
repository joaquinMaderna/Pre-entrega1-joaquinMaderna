import { Link } from "react-router-dom"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const Navbar1 = () => {
    

    const [categoria, setCategoria] = useState({})

    const {categoriaId} = useParams();

    return (
        <nav className="bg-dark-400 flex justify-between items-center w-[92%] mx-auto my-0 p-5"  >
            <div>
                <p className="text-3xl" >LOGO</p>
            </div>
            <div>
                <ul className="flex items-center gap-[4vw] " >
                    <li className="hover:text-gray-600" ><Link to="/">Home</Link></li>
                    <li className="hover:text-gray-600" ><Link to="/categoria/telefono">Telefonos</Link></li>
                    <li className="hover:text-gray-600" ><Link to="/categoria/notebook">Notebooks</Link></li>
                </ul>
            </div>
            <div>
                <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded-xl flex" >Sing in</button>
            </div>
        </nav>
    )
}