import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-image-wrap">
        <img
          src={product.images?.[0] || 'https://via.placeholder.com/500x500?text=Glow+AML'}
          alt={product.title}
          className="product-image"
        />
      </Link>

      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-price">{Number(product.price).toFixed(2)} DH</p>

        <p className={`stock-badge ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
          {product.stock > 0 ? 'En stock' : 'Rupture de stock'}
        </p>

        <Link to={`/products/${product.id}`} className="primary-btn full-btn">
          Voir détails
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;