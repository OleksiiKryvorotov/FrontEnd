import React from 'react'
import { addProductAction } from '../../store/reducers/productsReducer';
import { useDispatch } from 'react-redux';

export default function AddProductForm() {

  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const { title, price } = e.target;
    const new_product = {
      id: Date.now(),
      title: title.value,
      price: +price.value
    }
    dispatch(addProductAction(new_product));
    e.target.reset()
  }

  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='title' name='title' />
      <input type='text' placeholder='price' name='price' />
      <button>Add product</button>
    </form>
  )
}