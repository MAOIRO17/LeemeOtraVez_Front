import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/CarritoCompra.css"

const CarritoCompra = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get("");
        const productosFormateados = response.data.map((producto) => ({
          id: producto.id,
          nombre: producto.title,
          precio: producto.price,
        }));
        setProductos(productosFormateados);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    obtenerProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  const calcularTotal = () =>
    carrito.reduce((total, item) => total + item.precio, 0);

  return (
    <div>
      <h1>Carrito de Compras</h1>

      <h2>Productos</h2>
      {productos.length > 0 ? (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <strong>{producto.nombre}</strong> - ${producto.precio.toFixed(2)}
              <button
                onClick={() => agregarAlCarrito(producto)}
                style={{ marginLeft: "10px", cursor: "pointer" }}
              >
                Agregar al Carrito
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando productos...</p>
      )}

      <h2>Carrito</h2>
      {carrito.length > 0 ? (
        <div>
          <ul>
            {carrito.map((item, index) => (
              <li key={index}>
                <strong>{item.nombre}</strong> - ${item.precio.toFixed(2)}
                <button
                  onClick={() => eliminarDelCarrito(item.id)}
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${calcularTotal().toFixed(2)}</h3>
        </div>
      ) : (
        <p>Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default CarritoCompra;
