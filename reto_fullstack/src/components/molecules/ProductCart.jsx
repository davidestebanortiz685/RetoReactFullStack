import useCartStore from "../../store/cartStore";

function ProductCard({ product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain p-4"
      />
      <div className="p-4 flex flex-col flex-1">
        <h2 className="font-semibold text-gray-800 text-sm flex-1">{product.title}</h2>
        <p className="text-xs text-gray-400 mb-2 capitalize">{product.category}</p>
        <p className="text-blue-600 font-bold text-lg">${product.price}</p>
        <button
          onClick={() => addItem(product)}
          className="mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;