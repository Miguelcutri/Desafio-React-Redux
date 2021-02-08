import { action } from 'typesafe-actions'
import { TypesPosts, Posts } from './types'

export const getPosts = (payload: Posts) => action (TypesPosts.GET_POSTS, payload)