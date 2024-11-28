import React, { useEffect } from "react";
import "react-calendar/dist/Calendar.css"; // Estilos por defecto del calendario
import "../styles/Principal.css";
import Libros from "./Libros";

const Principal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    const roomElements = document.querySelectorAll(".room-card");
    roomElements.forEach((el) => observer.observe(el));

    return () => {
      roomElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-logo">LéemeOtraVez</div>
        <nav className="header-nav">
          <a href="/Libros">Libros</a>
          <a href="#"></a>
          <a href="/"></a>
          <a href="/CarritoCompra"></a>
        </nav>
      </header>

      <main className="home-main">
        {/* Imagen de fondo */}
        <div className="img-background">
          <img src="./fondo.jpg" alt="fondo" />
        </div>
      </main>

      <Libros />
    </div>
  );
};

export default Principal;
