import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


export default function ProductItem() {

    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(resp => resp.json())
        .then(data => setProduct(data))    
        }, [])      

   
  return (
    <div>        
        <p>{ product.title }</p>
        <p>{ product.price }$</p>        
    </div>
  )
}
