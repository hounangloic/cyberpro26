// LoadingAnimation.js
import React from 'react';
import './LoadingAnimation.css'; // Assurez-vous que le chemin est correct

const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
      <div className="spinner"></div> {/* Assurez-vous que cette div a la classe spinner */}
    </div>
  );
};

export default LoadingAnimation;
