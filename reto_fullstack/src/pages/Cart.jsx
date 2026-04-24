import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

function Cart() {
    const { items, removeItem, addItem, deleteItem, clearCart, getTotal } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p className="text-6xl mb-4">🛒</p>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">Tu carrito está vacío</h2>
        <p className="text-gray-400 mb-6">Agrega productos desde la tienda</p>
        <Link to="/home" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🛒 Mi Carrito</h1>

      <div className="flex flex-col gap-4 mb-8">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain rounded-lg bg-gray-50"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-blue-600 font-bold">${item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => removeItem(item.id)}
                className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition font-bold"
              >
                −
              </button>
              <span className="w-6 text-center font-semibold">{item.quantity}</span>
              <button
                onClick={() => addItem(item)}
                className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition font-bold"
              >
                +
              </button>
            </div>

            <p className="w-20 text-right font-bold text-gray-800">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-400 hover:text-red-600 transition text-xl ml-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
        <div className="flex justify-between text-lg">
          <span className="text-gray-600">Total de productos:</span>
          <span className="font-semibold">{items.reduce((acc, i) => acc + i.quantity, 0)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold border-t pt-4">
          <span>Total:</span>
          <span className="text-blue-600">${getTotal().toFixed(2)}</span>
        </div>

        <div className="flex gap-3 mt-2">
          <button
            onClick={clearCart}
            className="flex-1 border border-red-400 text-red-400 py-2 rounded-lg hover:bg-red-50 transition"
          >
            Vaciar carrito
          </button>
          <Link
            to="/checkout"
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-center"
          >
            Finalizar compra →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;