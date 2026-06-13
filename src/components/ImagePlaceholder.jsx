import React from 'react';

const ImagePlaceholder = ({ width = '100%', height = '300px', text = 'Image Placeholder', className = '' }) => {
  return (
    <div 
      className={`image-placeholder ${className}`} 
      style={{ width, height }}
    >
      {text}
    </div>
  );
};

export default ImagePlaceholder;
