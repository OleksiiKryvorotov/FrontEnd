import React, { useEffect, useState } from 'react'
import { getSingleProduct } from '../../requests/products_req';
import { useParams } from 'react-router-dom';

export default function SingleProductPage() {

  const { item_id } = useParams();

  const [ singleProduct, setSingleProduct ] = useState({});

  useEffect(() => getSingleProduct(item_id, setSingleProduct), []);

  const { title, description, price, images, category } = singleProduct;

  return (
    <div>
      {images && <img src={images[0]} alt={title} />}
      <p>Title: {title}</p>
      <p>Description: {description}</p>
      <p>Price: {price}$</p>
      <p>Category: {category}</p>
    </div>
  )
}
