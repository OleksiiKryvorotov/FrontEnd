import React, { useContext } from 'react'
import { Context } from '../../context';

export default function AddPostForm() {

  const { add_post } = useContext(Context);

  const submit = e => {
    e.preventDefault();
    const { title, description } = e.target;
    const new_post = {
      id: Date.now(),
      title: title.value,
      description: description.value,
      like: false,
      comments: []
    }
    add_post(new_post);
    e.target.reset()
  }

  return (
    <form onSubmit={submit}>
      <input type='text' placeholder='Title' name='title' />
      <input type='text' placeholder='Description' name='description' />
      <button>Add post</button>
    </form>
  )
}
