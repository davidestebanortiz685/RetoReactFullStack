import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-md p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">¡Bienvenido!</h1>
        <p className="text-gray-400 text-sm mb-8">
          Tu tienda online favorita
        </p>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => navigate("/register")}
            className="border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            Registrarse
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;