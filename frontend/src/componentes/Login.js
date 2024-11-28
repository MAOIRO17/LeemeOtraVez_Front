import React, { useState, useEffect } from "react";
import "../styles/Login.css";

const slides = [
  { title: "DUACODE", description: "Programa rookie" },
  { title: "UX", description: "Profesionales en hacértelo más fácil ;)" },
  { title: "Equipo Rookie </>", description: "Martin Ois, Adrian Contreras, Mateo Picatoste" },
];

const Login = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTextHidden, setIsTextHidden] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [socialPopup, setSocialPopup] = useState({ visible: false, type: "" });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextHidden(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTextHidden(false);
      }, 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSocialLogin = (platform) => {
    if (platform === "Google") {
      window.location.href =
        "https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email profile";
    }
    setSocialPopup({ visible: true, type: platform });
  };

  const closeSocialPopup = () => setSocialPopup({ visible: false, type: "" });

  const renderForm = () => (
    <form className="form">
      {isLogin ? (
        <>
          <input type="text" placeholder="Correo o Usuario" className="form-input" />
          <input type="password" placeholder="Contraseña" className="form-input" />
          <div className="form-remember">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Recuérdame</label>
          </div>
          <button className="form-button">Iniciar sesión</button>
          <p className="form-forgot">
            <a href="#forgot">¿Olvidaste tu contraseña?</a>
          </p>
        </>
      ) : (
        <>
          <input type="email" placeholder="Correo" className="form-input" />
          <input type="text" placeholder="Nombre de usuario" className="form-input" />
          <input type="password" placeholder="Contraseña" className="form-input" />
          <button className="form-button">Registrarse</button>
          <p className="form-terms">
            Al registrarte, aceptas nuestros{" "}
            <a href="#terms">Términos de servicio</a>
          </p>
        </>
      )}
      <div className="social-login">
        <button
          type="button"
          className="social-button google-button"
          onClick={() => handleSocialLogin("Google")}
        >
          <img src="/iconoGoogle.png" alt="Google Icon" className="social-icon" />
          {isLogin ? "Iniciar sesión" : "Registrarse"} con Google
        </button>
        {!isLogin && (
          <button
            type="button"
            className="social-button github-button"
            onClick={() => handleSocialLogin("GitHub")}
          >
            <img src="/iconoGit.png" alt="GitHub Icon" className="social-icon" />
            Registrarse con GitHub
          </button>
        )}
      </div>
    </form>
  );

  return (
    <div className="login-container">
      <div className="slideshow">
        <h2 className={`slideshow-title ${isTextHidden ? "hidden" : ""}`}>
          {slides[currentSlide].title}
        </h2>
        <p className={`slideshow-description ${isTextHidden ? "hidden" : ""}`}>
          {slides[currentSlide].description}
        </p>
      </div>
      <div className="login-form-container">
        <div className="tabs">
          {["Iniciar sesión", "Registrarse"].map((text, index) => (
            <h3
              key={text}
              className={`tab ${isLogin === (index === 0) ? "active" : ""}`}
              onClick={() => setIsLogin(index === 0)}
            >
              {text}
            </h3>
          ))}
        </div>
        <div className="form-content">{renderForm()}</div>
      </div>
      {socialPopup.visible && (
        <div className="social-popup">
          <div className="popup-content">
            <h3>Iniciar sesión con {socialPopup.type}</h3>
            <p>Selecciona tu cuenta para continuar o añade una nueva.</p>
            <button onClick={closeSocialPopup}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
