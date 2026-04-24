import { useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import useAuthStore from "../../store/authStore";

function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);
  const { currentUser, logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">🛍 Mi Tienda</Link>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/home" className="hover:underline">Productos</Link>
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
                            <Link to="/" className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-50 transition">
Salir            </Link>
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-50 transition">
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 border-t border-blue-500 pt-4">
          <Link to="/home" onClick={() => setMenuOpen(false)} className="hover:underline">Productos</Link>
          <Link to="/cart" onClick={() => setMenuOpen(false)} className="hover:underline">
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
                onClick={() => { logout(); setMenuOpen(false); }}
                className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm"
              >
                                            <Link to="/" className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm hover:bg-blue-50 transition">
Salir            </Link>
              </button>
            </div>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)} className="bg-white text-blue-600 px-3 py-1 rounded-lg text-sm w-fit">
              Iniciar sesión
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;