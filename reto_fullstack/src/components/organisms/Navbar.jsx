import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";

function Navbar() {
  const items = useCartStore((state) => state.items);
  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">🛍 Mi Tienda</Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:underline">Productos</Link>
        <Link to="/cart" className="hover:underline">
          🛒 Carrito {totalItems > 0 && (
            <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-sm ml-1">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;