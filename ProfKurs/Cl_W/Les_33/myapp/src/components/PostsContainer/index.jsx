import React from 'react'
import { useSelector } from 'react-redux';
import PostItem from '../PostItem';

export default function PostsContainer() {

  const posts_state = useSelector(state => state.posts);

  return (
    <div>
      {
        posts_state.map(item => <PostItem key={item.id} {...item} />)
      }
    </div>
  )
}
