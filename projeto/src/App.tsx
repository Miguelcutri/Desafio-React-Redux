import React from "react";
import './App.css';
import { FiUser, FiHeart } from "react-icons/fi";
import Form  from './components/Forms/Form'
import User from './components/Usuario/index'
import Nome from './components/SeuNome'
import Store from './components/Stories'
import { store } from './store'
import { Provider } from 'react-redux'
import Posts from './components/Posts'

import Logo from "./images/logo-instagram.png";
import Stories from "./components/Stories";

function App() {
  return (

    <Provider store={store}>
      <div className="header">
        <header>
          <img src={Logo} alt="Logo Instagram" />
          <div className="top-info"> 
            <span>
              <FiUser />
              <Nome/>
            </span>
          </div>
        </header>
      </div>
      <div className="home">
        <div className="post-container">
          <Form/>
          <div className="post">
          <Posts/>
                  
          <header>
              <img src="https://randomuser.me/api/portraits/women/17.jpg" alt="user" />
              <div className="post-user">
                <strong>nasa</strong>
                <span>Mars</span>
              </div>
            </header>
            <div className="post-image">
              <img src="https://www.publicdomainpictures.net/pictures/90000/velka/mars.jpg" alt="post" />
            </div>
            <div className="post-likes">
              <FiHeart />
            </div>
            <p>Waving goodbye to a spacecraft.</p>
          </div>

        </div>
        <div>
        <div className="user-info">
          <img alt="Perfil" src="https://i.ibb.co/vm3Jdm4/334d425ebe7b8134d7c83170522b7816.jpg"/>
          <User/>
        </div>
          <div className="stories">
            <h2>Stories</h2>
           
            <Stories/>
            
          </div>
        </div>        
      </div>
      </Provider>
  );
}

export default App;