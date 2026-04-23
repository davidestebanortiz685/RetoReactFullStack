import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Por favor completa todos los campos");
      return;
    }
    const success = login(email, password);
    if (success) {
      navigate("/");
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Iniciar sesión</h1>
        <p className="text-gray-400 text-sm mb-6">Bienvenido de nuevo</p>

        {error && (
          <div className="bg-red-50 text-red-500 text-sm px-4 py-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 mb-1 block">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold mt-2"
          >
            Ingresar
          </button>
        </div>

        <p className="text-sm text-gray-400 text-center mt-6">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Regístrate aquí
          </Link>
        </p>

        <div className="mt-4 bg-gray-50 rounded-lg p-3 text-xs text-gray-400">
          <p>Usuario de prueba:</p>
          <p>Email: <span className="font-mono">david@email.com</span></p>
          <p>Contraseña: <span className="font-mono">123456</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;