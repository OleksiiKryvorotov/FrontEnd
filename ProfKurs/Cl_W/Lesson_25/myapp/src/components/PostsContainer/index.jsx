import React, { useContext } from 'react'
import PostItem from '../PostItem'
import { Context } from '../../context'

export default function PostsContainer() {

  const { posts } = useContext(Context);

  return (
    <div>
      {
        posts.map(el => <PostItem key={el.id} {...el} />)
      }
    </div>
  )
}