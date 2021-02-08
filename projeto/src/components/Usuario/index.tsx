import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../../store/ducks/user/action'
import { UserState } from '../../store/ducks/user/types'


const User  = () => {

  const dispatch = useDispatch()

  const user = useSelector((estado: UserState) => estado.usuario)

  useEffect(() => {
    axios.get("http://localhost:4000/user")
      .then(resposta => dispatch(getUser(resposta.data)))
  }, [])
  

  return (
    <div className="user-bio">
            <strong>{user.name}</strong>
            <span>{user.username}</span>
    </div>
  );
}

export default User;