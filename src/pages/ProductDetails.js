import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { db } from '../firebase';
import ImageSlider from '../components/ImageSlider';
import { useCart } from '../context/CartContext';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const ref = doc(db, 'products', id);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = { id: snap.id, ...snap.data() };
          setProduct(data);
        }
      } catch (error) {
        console.error('Erreur chargement produit:', error);

        await Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Impossible de charger ce produit.',
          confirmButtonColor: '#b76e79'
        });
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <div className="page-center">Chargement...</div>;
  if (!product) return <div className="page-center">Produit introuvable.</div>;

  const safeStock = Number(product.stock) || 0;

  const handleQuantityChange = (e) => {
    const value = Number(e.target.value);

    if (!value || value < 1) {
      setQuantity(1);
      return;
    }

    if (value > safeStock) {
      setQuantity(safeStock);

      Swal.fire({
        icon: 'warning',
        title: 'Stock limité',
        text: `La quantité maximum disponible est ${safeStock}.`,
        confirmButtonColor: '#b76e79'
      });

      return;
    }

    setQuantity(value);
  };

  const handleAdd = async () => {
    if (safeStock < 1) {
      await Swal.fire({
        icon: 'warning',
        title: 'Rupture de stock',
        text: 'Ce produit n’est plus disponible.',
        confirmButtonColor: '#b76e79'
      });
      return;
    }

    const safeQty = Math.min(Math.max(1, quantity), safeStock);

    // 🔥 بلا packs
    addToCart(product, safeQty);

    await Swal.fire({
      icon: 'success',
      title: 'Produit ajouté',
      text: 'Le produit a été ajouté au panier.',
      confirmButtonColor: '#b76e79',
      timer: 1400,
      showConfirmButton: false
    });
  };

  return (
    <section className="section">
      <div className="container details-grid">
        <ImageSlider images={product.images || []} />

        <div className="details-box">
          <p className="eyebrow">Produit</p>
          <h1>{product.title}</h1>

          <p className="details-price">
            {Number(product.price).toFixed(2)} DH
          </p>

          <p className={`stock-badge ${safeStock > 0 ? 'in-stock' : 'out-stock'}`}>
            {safeStock > 0 ? `En stock (${safeStock})` : 'Rupture de stock'}
          </p>

          <p className="details-description">{product.description}</p>

          <div className="form-group">
            <label>Quantité</label>
            <input
              type="number"
              min="1"
              max={safeStock || 1}
              value={quantity}
              onChange={handleQuantityChange}
              disabled={safeStock < 1}
            />
            {safeStock > 0 && (
              <small className="stock-note">
                Quantité maximum disponible : {safeStock}
              </small>
            )}
          </div>

          <button
            className="primary-btn"
            onClick={handleAdd}
            disabled={safeStock < 1}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;