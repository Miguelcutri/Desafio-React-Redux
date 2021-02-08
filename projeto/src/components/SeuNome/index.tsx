import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../../store/ducks/user/action'
import { UserState } from '../../store/ducks/user/types'


const Nome  = () => {

  const dispatch = useDispatch()

  const user = useSelector((estado: UserState) => estado.usuario)

  useEffect(() => {
    axios.get("http://localhost:4000/user")
      .then(resposta => dispatch(getUser(resposta.data)))
  }, [])
  

  return (
     <strong>{user.name}</strong>

  );
}

export default Nome;