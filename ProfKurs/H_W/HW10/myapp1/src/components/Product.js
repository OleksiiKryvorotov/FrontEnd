import React from 'react';

export default function Product({ title, price }) {
    return (
      <div>
        <p>Title: {title}</p>
        <p>Price: {price}</p>        
      </div>
    )
  }