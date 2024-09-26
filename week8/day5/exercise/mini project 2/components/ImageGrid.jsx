import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-card">
          <img src={image.src.medium} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
