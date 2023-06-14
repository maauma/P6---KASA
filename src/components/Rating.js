import React from 'react';
import '../css/style.css';  

const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span className="star-filled" key={i}>★</span>); // star filled
    } else {
      stars.push(<span className="star-filled-grey" key={i}>★</span>); // star not filled
    }
  }

  return <div>{stars}</div>;
};

export default Rating;
