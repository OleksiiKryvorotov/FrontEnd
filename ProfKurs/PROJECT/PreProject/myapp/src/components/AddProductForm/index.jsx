import React from 'react'
import { addNewProduct } from '../../requests/products_req';
import { useForm } from 'react-hook-form'

export default function AddProductForm() {

    const { register, handleSubmit, reset } = useForm()

    // const submit = e => {
    //     e.preventDefault()
    //     const { title, price, description, image, category } = e.target;
    //     const new_product = {
    //         title: title.value,
    //         price: price.value,
    //         description: description.value,
    //         image: image.value,
    //         category: category.value
    //     }
    //     addNewProduct(new_product)
    //       e.target.reset()
    // }

    const submit = new_product_obj => {
        addNewProduct(new_product_obj)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
          <input type='text' placeholder='Title' name='title' {...register('title')}/>
          <input type='text' placeholder='Price' name='price' {...register('price')}/>
          <input type='text' placeholder='Description' name='description' {...register('description')}/>
          <input type='text' placeholder='Image URL' name='image' {...register('image')}/>
          <input type='text' placeholder='Category' name='category' {...register('category')}/>
          <button>Add new product</button>
        </form>
      )
    }
