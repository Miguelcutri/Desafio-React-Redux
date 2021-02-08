import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import reducerStories from './ducks/stories'
import reducerUser from './ducks/user'
import reducerPosts from './ducks/post/'

const createRootReducer = () => combineReducers({
  usuario: reducerUser,
  stories: reducerStories,
  posts: reducerPosts
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }