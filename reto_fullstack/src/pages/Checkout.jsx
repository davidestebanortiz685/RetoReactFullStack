import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";

function Checkout() {
  const { items, getTotal, clearCart } = useCartStore();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p className="text-6xl mb-4">🛍</p>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">No hay productos en el carrito</h2>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Ver productos
        </Link>
      </div>
    );
  }

  const handleConfirm = () => {
    clearCart();
    navigate("/home");
    alert("¡Compra realizada con éxito! Gracias por tu pedido 🎉");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">✅ Resumen de compra</h1>
      <p className="text-gray-400 mb-6">Revisa tu pedido antes de confirmar</p>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
        <h2 className="font-semibold text-gray-700 mb-4 text-lg">Productos</h2>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-3 last:border-0 last:pb-0">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-contain rounded bg-gray-50" />
                <div>
                  <p className="font-medium text-gray-800 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-400">Cantidad: {item.quantity}</p>
                </div>
              </div>
              <p className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="font-semibold text-gray-700 mb-4 text-lg">Resumen</h2>
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${getTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Envío</span>
            <span className="text-green-500">Gratis</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-gray-800 border-t pt-3 mt-2">
            <span>Total</span>
            <span className="text-blue-600">${getTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          to="/cart"
          className="flex-1 text-center border border-gray-300 text-gray-600 py-3 rounded-lg hover:bg-gray-50 transition"
        >
          ← Volver al carrito
        </Link>
        <button
          onClick={handleConfirm}
          className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-semibold"
        >
          Confirmar compra 🎉
        </button>
      </div>
    </div>
  );
}

export default Checkout;