export const ItemCart = ({ prod }) => {
  return (
    <>
    <thead >
        <tr key={prod.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {prod.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
            {prod.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            ${prod.price}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <button className="text-indigo-600 hover:text-indigo-900">
                Edit
            </button>
            <button className="ml-4 text-red-600 hover:text-red-900">
                Delete
            </button>
            </td>
        </tr>
        </thead>
    </>
  );
};