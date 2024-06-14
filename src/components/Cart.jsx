import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { ItemCart } from "./ItemCart";
export const Cart = () => {
  const [cartProducts, setCartProducts, removeFromCart] = useContext(CartContext);

  useEffect(() => {
    if (cartProducts.length > 0) {
      return 
    }
  }, [cartProducts]);

  return (
    <div>
      <div className="flex justify-center items-center py-8 mx-8  ">
        <h1 className="text-3xl justify-center font-semibold">Carrito</h1>
      </div>
      <section>
        <div className=" bg-gray-900 rounded-xl  w-[92%] mx-auto my-0 p-5 ">
          <h2 className="text-xl font-semibold leading-loose text-white">
            Productos
          </h2>
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 ">
                <tbody className="bg-white divide-y divide-gray-200">
                  <thead >
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                </tbody>
                <tbody className="bg-white divide-y divide-gray-200">
                    {cartProducts.map((prod) => (
                    <ItemCart key={prod.id} prod={prod} />
                    ))}
                </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
