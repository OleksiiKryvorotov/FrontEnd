import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'


export default function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(resp => resp.json())
    .then(data => setProducts(data.products))    
    }, [])  


  
  return (
    <div className={s.links}>
    {
      products.map(item =>
         <Link to={`/product/${item.id}`} key={item.id}> {item.title}
         </Link> 
      )
    }
    </div>
  )
}
