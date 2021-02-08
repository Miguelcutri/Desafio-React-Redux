import { action } from 'typesafe-actions'
import { TypesUser, UserItem } from './types'


export const getUser = (payload: UserItem) => action (TypesUser.GET_USER, payload)