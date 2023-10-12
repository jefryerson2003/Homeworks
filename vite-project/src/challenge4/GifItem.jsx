import React from 'react';

const GifItem = ({ gif }) => {
  return (
    <div className="gif-item">
      <img src={gif.images.fixed_width.url} alt={gif.title} />
    </div>
  );
};

export default GifItem;
