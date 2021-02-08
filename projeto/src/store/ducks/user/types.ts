export enum TypesUser{
  GET_USER = 'GET_USER'
}

export interface UserItem{
name: string,
username: string,
userPicture: string
}

export interface UserState{
  usuario: UserItem
}