import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* kiri */}
      <div className="nav-left">
        <img src={logo} alt="Logo Gereja" className="logo" />
        <span className="nav-title">Stasi St. Mikael Mojosari</span>
      </div>

      {/* menu */}
      <div className="nav-menu">
        <Link to="/">Beranda</Link>
        <Link to="/jadwal-misa">Jadwal Misa</Link>
        <Link to="/tentang">Tentang</Link>
      </div>

      {/* SOSMED (INTERAKTIF) */}
      <ul className="social-nav">
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
            href="https://www.instagram.com/lowkirknuinelyfr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-f icon"></i>
          </a>
        </li>

        <li className="youtube">
          <a
            href="https://www.instagram.com/lowkirknuinelyfr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
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
