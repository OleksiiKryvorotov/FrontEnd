import React from 'react';


// Создание компонента Product:
export default function Product({ title, price })  {
  return (
    <div>
      <p>Title: {title}</p>
      <p>Price: {price}</p>
    </div>
  );
};