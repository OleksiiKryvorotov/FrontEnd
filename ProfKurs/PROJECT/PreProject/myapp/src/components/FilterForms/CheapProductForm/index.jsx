import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCheapProductsAction } from '../../../store/reducers/allProductsReducer';

export default function CheapProductForm() {

    const dispatch = useDispatch()

    const [ checkboxChecked, setCheckboxChecked ] = useState(false)

    const handleChange = () => setCheckboxChecked(!checkboxChecked)
    
    const get_products = e => dispatch(getCheapProductsAction(e.target.checked))
  
  return (
    <div>
      <label>          
        <p>Items cheaper than 100$</p>
        <input type='checkbox' checked={checkboxChecked} onChange={handleChange} onClick={get_products}/>
      </label>
    </div>
  )
}
