import { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* kiri */}
      <div className="nav-left">
        <img src={logo} alt="Logo Gereja" className="logo" />
        <span className="nav-title">Stasi St. Mikael Mojosari</span>
      </div>

      {/* hamburger */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* menu */}
      <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Beranda</Link>
        <Link to="/jadwal-misa" onClick={() => setMenuOpen(false)}>Jadwal Misa</Link>
        <Link to="/tentang" onClick={() => setMenuOpen(false)}>Tentang</Link>

        {/* Sosmed muncul di dalam menu mobile */}
        <ul className="social-nav mobile-social">
          <li className="instagram">
            <a
              href="https://www.instagram.com/st.mikael.mojosari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram icon"></i>
            </a>
          </li>

          <li className="facebook">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f icon"></i>
            </a>
          </li>

          <li className="youtube">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube icon"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* Sosmed desktop */}
      <ul className="social-nav desktop-social">
        <li className="instagram">
          <a
            href="https://www.instagram.com/st.mikael.mojosari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram icon"></i>
          </a>
        </li>

        <li className="facebook">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-f icon"></i>
          </a>
        </li>

        <li className="youtube">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-youtube icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}
