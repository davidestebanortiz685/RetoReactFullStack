import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import useAuthStore from "../../store/authStore";

function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);
  const { currentUser, logout } = useAuthStore();

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">🛍 Mi Tienda</Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:underline">Productos</Link>
        <Link to="/cart" className="hover:underline">
          🛒 Carrito {totalItems > 0 && (
            <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-sm ml-1">
              {totalItems}
            </span>
          )}
        </Link>
        {currentUser ? (
          <div className="flex items-center gap-3">
            <span className="text-sm">Hola, {currentUser.name}</span>
            <button
              onClick={logout}
              className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-50 transition"
            >
              Salir
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-50 transition">
            Iniciar sesión
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;