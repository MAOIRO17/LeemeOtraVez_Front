import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Libros.css"

const ListaLibros = () => {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await axios.get("");
        setLibros(response.data);
      } catch (error) {
        setError("Error al obtener los libros");
      } finally {
        setLoading(false);
      }
    };
    fetchLibros();
  }, []);
  if (loading) return <p>Cargando libros..</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>Lista de Libros</h1>
      <ul>
        {libros.map((libro) => (
          <li key={libro.id}>
            {libro.nombre}-{libro.precio}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListaLibros;
