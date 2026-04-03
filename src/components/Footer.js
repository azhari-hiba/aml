import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="lux-footer">
      <div className="footer-overlay"></div>

      <div className="container footer-content">
        {/* TOP */}
        <div className="footer-top">
          
          {/* BRAND */}
          <div className="footer-brand-block">
            <p className="footer-eyebrow">Natural beauty & glow care</p>
            <h2 className="footer-title">Gloow by Amal</h2>
            <p className="footer-text">
              Découvrez un univers de soins doux, féminins et raffinés, inspiré
              par la beauté naturelle, les rituels de bien-être et l’élégance.
            </p>
          </div>

          {/* CONTACT */}
          <div className="footer-contact-card">
            <div className="footer-contact-title">
              <span>Contact & Informations</span>
            </div>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/amal_a_gloow?igsh=eGE2Nmt5bWs0bWEx"
              target="_blank"
              rel="noreferrer"
              className="footer-contact-item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.321 4 20 5.679 20 7.75v8.5c0 2.071-1.679 3.75-3.75 3.75h-8.5C5.679 20 4 18.321 4 16.25v-8.5C4 5.679 5.679 4 7.75 4zm4.25 2.5A5.5 5.5 0 1 0 17.5 12 5.507 5.507 0 0 0 12 6.5zm0 2A3.5 3.5 0 1 1 8.5 12 3.504 3.504 0 0 1 12 8.5zm5.25-.75a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
              </svg>

              <span>@amal_a_gloow</span>
            </a>

            {/* Email */}
            <a
              href="mailto:amal.ayoub081217aa@gmail.com"
              className="footer-contact-item"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/>
              </svg>

              <span>amal.ayoub081217aa@gmail.com</span>
            </a>

            <p className="footer-mini-note">
              Livraison partout au Maroc • Commande simple • Packs beauté & glow
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            © 2026 Gloow by{' '}
            <Link to="/admin-login" className="hidden-admin-link">
              Amal
            </Link>
            . All rights reserved.
          </p>

          {/* DEV */}
          <p className="dev-credit">
            Developed by{' '}
            <a
              href="https://www.instagram.com/hipatyadev_agency?igsh=MmE0Y3h5M3I0b2xi"
              target="_blank"
              rel="noreferrer"
              className="dev-link"
            >
              HIPATYADEV

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ marginLeft: '6px' }}
              >
                <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5C18.321 4 20 5.679 20 7.75v8.5c0 2.071-1.679 3.75-3.75 3.75h-8.5C5.679 20 4 18.321 4 16.25v-8.5C4 5.679 5.679 4 7.75 4zm4.25 2.5A5.5 5.5 0 1 0 17.5 12 5.507 5.507 0 0 0 12 6.5zm0 2A3.5 3.5 0 1 1 8.5 12 3.504 3.504 0 0 1 12 8.5zm5.25-.75a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;