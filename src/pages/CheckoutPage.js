import React, { useState } from 'react';
import { collection, doc, runTransaction, serverTimestamp } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { db } from '../firebase';
import { useCart } from '../context/CartContext';

function CheckoutPage() {
  const { cartItems, subtotal, shipping, total, clearCart } = useCart();

  const [form, setForm] = useState({
    customerName: '',
    phone: '',
    city: '',
    address: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cartItems.length) {
      await Swal.fire({
        icon: 'warning',
        title: 'Panier vide',
        text: 'Le panier est vide.',
        confirmButtonColor: '#b76e79'
      });
      return;
    }

    const confirmOrder = await Swal.fire({
      title: 'Confirmer la commande ?',
      text: 'Voulez-vous vraiment valider cette commande ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#b76e79',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Oui, confirmer',
      cancelButtonText: 'Annuler'
    });

    if (!confirmOrder.isConfirmed) {
      return;
    }

    setLoading(true);

    try {
      await runTransaction(db, async (transaction) => {
        const productDocs = [];

        for (const item of cartItems) {
          const productRef = doc(db, 'products', item.id);
          const productSnap = await transaction.get(productRef);

          if (!productSnap.exists()) {
            throw new Error(`Produit introuvable: ${item.title}`);
          }

          productDocs.push({
            ref: productRef,
            snap: productSnap,
            item
          });
        }

        for (const productDoc of productDocs) {
          const data = productDoc.snap.data();
          const currentStock = Number(data.stock) || 0;

          if (productDoc.item.quantity > currentStock) {
            throw new Error(
              `Stock insuffisant pour "${productDoc.item.title}". Stock disponible: ${currentStock}`
            );
          }
        }

        for (const productDoc of productDocs) {
          const data = productDoc.snap.data();
          const currentStock = Number(data.stock) || 0;
          const newStock = currentStock - productDoc.item.quantity;

          transaction.update(productDoc.ref, {
            stock: newStock
          });
        }

        const orderRef = doc(collection(db, 'orders'));
        transaction.set(orderRef, {
          customerName: form.customerName,
          phone: form.phone,
          city: form.city,
          address: form.address,
          items: cartItems.map((item) => ({
            id: item.id,
            title: item.title,
            quantity: item.quantity,
            price: item.price,
            selectedPack: item.selectedPack || ''
          })),
          subtotal,
          shipping,
          total,
          status: 'Nouvelle',
          createdAt: serverTimestamp()
        });
      });

      clearCart();

      await Swal.fire({
        icon: 'success',
        title: 'Commande confirmée',
        text: 'Votre commande a été enregistrée avec succès !',
        confirmButtonColor: '#b76e79'
      });

      window.location.href = '/';
    } catch (error) {
      console.error(error);

      await Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: error.message || 'Erreur lors de la commande',
        confirmButtonColor: '#b76e79'
      });
    }

    setLoading(false);
  };

  return (
    <section className="section">
      <div className="container small-container">
        <form className="auth-card" onSubmit={handleSubmit}>
          <p className="eyebrow">Commande</p>
          <h1>Finaliser votre commande</h1>

          <div className="form-group">
            <label>Nom complet</label>
            <input
              type="text"
              name="customerName"
              value={form.customerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Téléphone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Ville</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Adresse</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="summary-box" style={{ marginTop: '20px' }}>
            <div className="summary-line">
              <span>Sous-total</span>
              <strong>{subtotal.toFixed(2)} DH</strong>
            </div>
            <div className="summary-line">
              <span>Livraison</span>
              <strong>{shipping.toFixed(2)} DH</strong>
            </div>
            <div className="summary-line total-line">
              <span>Total</span>
              <strong>{total.toFixed(2)} DH</strong>
            </div>
          </div>

          <button className="primary-btn full-btn" disabled={loading}>
            {loading ? 'Confirmation...' : 'Confirmer la commande'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default CheckoutPage;