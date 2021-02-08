import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { getStories } from '../../store/ducks/stories/action'
import { PostsState, PostsItem } from '../../store/ducks/post/types'


const Posts = () => {

  const dispatch = useDispatch()

  const posts = useSelector((estado: PostsState) => estado.posts.arrayPosts)

  useEffect(() => {
    axios.get("http://localhost:4000/posts")
      .then(resposta => dispatch(getStories(resposta.data)))
  }, [])


  return (

    <div>
      { posts && posts.map((item: PostsItem) => (
        
        <header key={item.id}>
        <img src={item.userPicture} alt="user" />
        <div className="post-user">
          <strong>{item.user}</strong>
          <span>{item.user}</span>
        </div>
      </header>

        
      ))

      }
      </div>
    

  );
}

export default Posts;