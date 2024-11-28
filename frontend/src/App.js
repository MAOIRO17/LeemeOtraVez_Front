import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Principal from "./componentes/Principal";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Libros from "./componentes/Libros";
import CarritoCompra from "./componentes/CarritoCompra";
import Login from "./componentes/Login";

const App = () => {
  const location = useLocation();
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/carrito" element={<CarritoCompra />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      {location.pathname !== "/login" && <Footer />}
    </div>
  );
};

const AppWrapper = () => {
  return(
  <Router>
    <App />
  </Router>
  );
};

export default AppWrapper;
