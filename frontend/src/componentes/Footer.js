import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sections = [
    {
      title: "Legal",
      links: [
        { label: "Política de Privacidad", href: "#privacy" },
        { label: "Términos y Condiciones", href: "#terms" },
        { label: "Declaración de Accesibilidad", href: "#accessibility" },
      ],
    },
    {
      title: "Contáctanos",
      content: [
        "info@duacode.com",
        "+34 123-456-789",
        "Calle Innovación 12",
        "Madrid, España",
      ],
    },
    {
      title: "Redes Sociales",
      links: [
        { label: "Instagram", href: "#instagram" },
        { label: "Facebook", href: "#facebook" },
        { label: "TikTok", href: "#tiktok" },
        { label: "LinkedIn", href: "#linkedin" },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>LéemeOtraVez</h3>
        </div>
        {sections.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            {section.links ? (
              <ul className="footer-links">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="footer-contact">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>&copy; LéemeOtraVez. Todos los derechos reservados.</p>
        <button onClick={scrollToTop} className="back-to-top">
          Volver Arriba
        </button>
      </div>
    </footer>
  );
};

export default Footer;
