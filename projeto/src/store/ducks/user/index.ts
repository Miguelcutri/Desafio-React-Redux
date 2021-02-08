import { TypesUser, UserItem } from "./types"

const estadoInicial: UserItem = {
    name: '',
    username: '',
    userPicture: ''

  }
  
  function reducerUser(estado = estadoInicial, acao: any) {
      switch(acao.type) {
        case TypesUser.GET_USER:
          return {
            name: acao.payload.name,
            username: acao.payload.username,
            userPicture: acao.payload.userPicture
          }
        default: 
          return estado
      }
  }
  
  export default reducerUser