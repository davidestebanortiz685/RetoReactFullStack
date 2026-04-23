function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="🔍 Buscar productos..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}

export default SearchBar;