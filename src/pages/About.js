import React from 'react';
import logo from '../assets/amal-gloow-logo.jpeg';

function About() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-hero">
          <div className="about-text">
            <p className="about-eyebrow">À propos de la marque</p>
            <h1 className="about-title">Gloow by Amal</h1>
            <p className="about-lead">
              Gloow by Amal est une marque dédiée à la beauté naturelle,
              au bien-être féminin et aux rituels de soin inspirés de la douceur,
              de l’élégance et de l’authenticité.
            </p>
          </div>

          <div className="about-image-wrap">
            <img src={logo} alt="Gloow by Amal" className="about-image" />
          </div>
        </div>

        <div className="about-grid">
          <div className="about-card fade-up">
            <h2>Notre univers</h2>
            <p>
              Chez Gloow by Amal, nous croyons que la beauté commence par le soin,
              la douceur et l’amour de soi. Nos packs sont pensés pour sublimer
              la féminité à travers des produits inspirés des rituels naturels et
              du hammam.
            </p>
          </div>

          <div className="about-card fade-up delay-1">
            <h2>Naturel & raffiné</h2>
            <p>
              La marque met en avant des soins qui évoquent la pureté, la délicatesse
              et l’élégance. Chaque produit est choisi pour offrir une expérience
              agréable, apaisante et adaptée à une femme qui aime prendre soin d’elle
              avec finesse.
            </p>
          </div>

          <div className="about-card fade-up delay-2">
            <h2>Beauté & féminité</h2>
            <p>
              Gloow by Amal célèbre une beauté douce, naturelle et authentique.
              L’univers de la marque s’adresse à celles qui recherchent des rituels
              féminins, des moments de bien-être et une sensation de confiance au quotidien.
            </p>
          </div>

          <div className="about-card fade-up delay-3">
            <h2>Une expérience glow</h2>
            <p>
              Plus qu’une simple marque, Gloow by Amal propose un univers complet
              autour du glow, du care et de la confiance. Chaque pack est pensé
              pour offrir un moment de détente, d’élégance et de mise en valeur.
            </p>
          </div>
        </div>

        <div className="about-values fade-up delay-2">
          <h2>Nos valeurs</h2>
          <div className="values-list">
            <div className="value-pill">Naturel</div>
            <div className="value-pill">Féminité</div>
            <div className="value-pill">Élégance</div>
            <div className="value-pill">Douceur</div>
            <div className="value-pill">Confiance</div>
            <div className="value-pill">Bien-être</div>
          </div>
        </div>

        <div className="about-quote fade-up delay-3">
          <p>
            “Glow . Care . Confidence”
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;