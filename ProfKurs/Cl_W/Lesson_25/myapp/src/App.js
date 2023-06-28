import { useState } from 'react';
import './App.css';
import PostsContainer from './components/PostsContainer';
import { posts_data } from './data/posts_data'
import { Context } from './context'
import AddPostForm from './components/AddPostForm';


function App() {

  const [ posts, setPosts ] = useState(posts_data);

  // 4. При клике на лайк менять значение свойства like на противоположное ------
   // ПсевдоКОД! (props drilling) : 

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

  return (
    <div>
      <Context.Provider value={{ change_like, posts, delete_post, add_post }}>
        <AddPostForm />
        <PostsContainer />
      </Context.Provider>
    </div>
  );
}

export default App;
