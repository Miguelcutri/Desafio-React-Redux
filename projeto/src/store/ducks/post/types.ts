export enum TypesPosts {
    GET_POSTS = 'GET_POSTS'
  }
  
  export interface PostsItem {
    id: number,
    user: string,
    userPicture: string,
    postPicture: string,
    description: string,
    likes: number
  }
  
  export interface Posts {
    arrayPosts: PostsItem[]
  }
  
  export interface PostsState {
    posts: Posts
  }