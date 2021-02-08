import { Stories, TypesStories } from './types'

const estadoInicial: Stories = {
  arrayStories: []
}

function reducerStories(estado = estadoInicial, acao: any) {
    switch(acao.type) {
      case TypesStories.GET_STORIES:
        return {
          arrayTodos: acao.payload,
        }
      default: 
        return estado
    }
}

export default reducerStories