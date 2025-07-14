import { useState, useEffect } from "react";

export default function useClientes() {
  const [clientes, setClientes] = useState([]);

  const buscarClientes = () => {
    fetch("http://localhost:8080/clientes")
      .then(res => res.json())
      .then(data => setClientes(data))
      .catch(err => console.error("Erro ao buscar clientes:", err));
  };

  useEffect(() => {
    buscarClientes();
  }, []);

  return { clientes, setClientes, buscarClientes };
}

