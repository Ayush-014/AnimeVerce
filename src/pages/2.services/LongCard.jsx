// HorizontalCard.jsx
import React from 'react';

const HorizontalCard = ({ title, imageUrl, rating, year }) => {
  return (
    <div className="flex w-max h-max items-center border border-gray-300 rounded-lg p-4 shadow-md">
      <img src={imageUrl} alt={title} className="w-48 h-52 object-cover rounded-lg" />
      <div className=""></div>
    </div>
  );
};

export default HorizontalCard;
