import { Posts, TypesPosts } from './types'

const estadoInicial: Posts = {
  arrayPosts: []
}

function reducerPosts(estado = estadoInicial, acao: any) {
    switch(acao.type) {
      case TypesPosts.GET_POSTS:
        return {
          arrayPosts: acao.payload,
        }
      default: 
        return estado
    }
}

export default reducerPosts