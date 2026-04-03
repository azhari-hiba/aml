import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import ProductCard from '../components/ProductCard';
import logo from '../assets/amal-gloow-logo.jpeg';

function Home() {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const q = query(collection(db, 'products'), where('featured', '==', true));
        const snap = await getDocs(q);
        const items = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setFeatured(items);
      } catch (error) {
        console.error('Erreur chargement produits mis en avant:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <section className="hero-section luxury-hero">
        <div className="container">
          <div className="hero-single-block">
            <img src={logo} alt="Amal Gloow" className="hero-bg-logo" />

            <div className="hero-content-overlay">
              <p className="hero-eyebrow">Natural & Hammam Rituals</p>

              <h1 className="hero-title-clean">Glow . Care . Confidence</h1>

              <p className="hero-description-clean">
                Découvrez des packs beauté, des soins naturels et une expérience
                féminine, douce et raffinée inspirée par les rituels de bien-être.
              </p>

              <div className="hero-buttons">
                <Link to="/products" className="primary-btn">
                  Découvrir les produits
                </Link>
                <Link to="/cart" className="secondary-btn">
                  Voir panier
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Sélection</p>
              <h2>Milleurs Produits✨</h2>
            </div>

            <Link to="/products" className="text-link">
              Tout voir
            </Link>
          </div>

          {loading ? (
            <p>Chargement...</p>
          ) : featured.length ? (
            <div className="products-grid">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p>Aucun produit en avant pour le moment.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;