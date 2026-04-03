import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/amal-gloow-logo.jpeg';

function Header({ cartCount = 0 }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand-logo-wrap">
          <img src={logo} alt="Gloow by Amal" className="brand-logo-img" />
          <span className="brand-logo-name">Gloow by Amal</span>
        </Link>

        <nav className="main-nav">
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
          <Link to="/products">Produits</Link>
          <Link to="/cart">Panier ({cartCount})</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;