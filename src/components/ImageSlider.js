import React, { useState } from 'react';

function ImageSlider({ images = [] }) {
  const [index, setIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="slider-main no-image">
        <span>Aucune image</span>
      </div>
    );
  }

  const goPrev = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="slider-box">
      <div className="slider-main">
        <button onClick={goPrev} className="slider-arrow left-arrow">‹</button>
        <img src={images[index]} alt={`Produit ${index + 1}`} className="slider-image" />
        <button onClick={goNext} className="slider-arrow right-arrow">›</button>
      </div>

      <div className="thumb-row">
        {images.map((img, i) => (
          <button
            key={i}
            className={`thumb-btn ${i === index ? 'active-thumb' : ''}`}
            onClick={() => setIndex(i)}
          >
            <img src={img} alt={`Miniature ${i + 1}`} className="thumb-image" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
