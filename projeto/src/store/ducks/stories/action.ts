import { action } from 'typesafe-actions'
import { TypesStories, Stories } from './types'


export const getStories = (payload: Stories) => action (TypesStories.GET_STORIES, payload)