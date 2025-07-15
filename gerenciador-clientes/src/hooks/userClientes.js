import { useState, useEffect } from "react";

export default function useClientes() {
  const [clientes, setClientes] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

  const buscarClientes = () => {
    fetch(`${apiUrl}/clientes`)
      .then(res => res.json())
      .then(data => setClientes(data))
      .catch(err => console.error("Erro ao buscar clientes:", err));
  };

  useEffect(() => {
    buscarClientes();
  }, []);

  return { clientes, setClientes, buscarClientes };
}
