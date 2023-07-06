import { useState } from 'react';
import './App.css';
import PostsContainer from './components/PostsContainer';
import { posts_data } from './data/posts_data'
import { Context } from './context';
import AddPostForm from './components/AddPostForm';

function App() {

  const [ posts, setPosts ] = useState(posts_data);

  const change_like = id => {
    // 1. Найти объект в массиве
    const target_post = posts.find(el => el.id === id);

    // 2. У найденнного объекта обратиться к свойству like и поменять на противоположное
    target_post.like = !target_post.like;

    // 3. Вернуть обновленное состояние
     setPosts([...posts])
  }

  const delete_post = id => setPosts(posts.filter(el => el.id !== id));

  const add_post = new_post => setPosts([...posts, new_post]);

  const add_comment = (new_comment, post_id) => {
    // 1. Найти пост/объект в массиве
    const target_post = posts.find(el => el.id === post_id);

    // 2. У найденного поста обратиться к массиву comments и добавить в него new_comment (push)
    target_post.comments.push(new_comment);

    // 3. Вернуть обновленное состояние
    setPosts([...posts])
  }

  const delete_comment = (comment_id, post_id) => {
    // 1. Найти пост/объект в массиве (post_id)
    const target_post = posts.find(el => el.id === post_id);

    // 2. У найденного поста обратиться к массиву comments и удалить из него комментарий (filter => comment_id)
    target_post.comments = target_post.comments.filter(el => el.id !== comment_id);

    // 3. Вернуть обновленное состояние
    setPosts([...posts])
  }

  return (
    <div>
      <Context.Provider value={{ change_like, posts, delete_post, add_post, add_comment, delete_comment }}>
        <AddPostForm />
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;