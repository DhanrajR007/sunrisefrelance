import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          Sunrise
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#vision">Our Vision</a>
          <a href="#academics">Academics</a>
          <a href="#campus">Campus Life</a>
          <a href="#admissions">Admissions</a>

          <button className="mobile-btn">
            Apply Now
          </button>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      <a href="#admissions" className="apply-btn">
        Apply Now
      </a>
      </div>
    </header>
  );
}