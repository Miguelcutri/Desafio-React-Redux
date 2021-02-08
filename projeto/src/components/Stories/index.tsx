import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { getStories } from '../../store/ducks/stories/action'
import { StoriesState, StoriesItem } from '../../store/ducks/stories/types'


const Stories = () => {

  const dispatch = useDispatch()

  const stories = useSelector((estado: StoriesState) => estado.stories.arrayStories)

  useEffect(() => {
    axios.get("http://localhost:4000/stories")
      .then(resposta => dispatch(getStories(resposta.data)))
  }, [])


  return (

    <div>
      { stories && stories.map((item: StoriesItem) => (
        
        <div className="storie">
          <div className="storie-image">
            <img src={item.userPicture} alt="user" />
          </div>
          <div className="storie-user" key={item.id}>
            <strong>{item.user}</strong>
            <span>{item.time}</span>
            </div>
          </div>
        
      ))

      }
      </div>
    

  );
}

export default Stories;