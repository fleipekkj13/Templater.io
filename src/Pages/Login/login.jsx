import React from 'react';
import ProtectedRoutes from '../../utils/ProtectedRoutes';
import './styles/style.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  doc,
  deleteDoc } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBE8TsAjq5JBD024bAA8LNNqSjc44-w1Vc",
  authDomain: "templaterio-e08c2.firebaseapp.com",
  projectId: "templaterio-e08c2",
});

function Login() {
    var [messagger, setMes] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [users, setUsers] = useState([]);
    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "admins");
    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(userCollectionRef);//armazenar os dados
          setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };
        getUsers()
      }, []);
    const navigate = useNavigate();

    const handleLogin = () => {

        for (let index = 0; index < users.length; index ++ ){
            if (email == users[index]['email'] && password == users[index]['password']) {
                localStorage.setItem('auth', true);
                setMes('Sucesso ao entrar, seja bem-vindo!');
                const error = document.getElementById('error');
                if (error.className != 'transformed') {
                    error.classList.add = 'transformed';
                    error.style.backgroundColor = 'rgb(0, 190, 41)';
                    error.style.transform = 'translateY(70px)';
                    setTimeout(()=>{
                        error.style.transform = 'translateY(-70px)';
                        error.classList.remove = 'transformed';
                    }, 1500)
                }
                setTimeout(()=>{
                    navigate('/')
                },2000)

                break
            } else {
                setMes('Usuário ou senha incorretos, tente novamente!');
                const error = document.getElementById('error');
                if (error.className != 'transformed') {
                    error.classList.add = 'transformed';
                    error.style.backgroundColor = 'red';
                    error.style.transform = 'translateY(70px)';
                    setTimeout(()=>{
                        error.style.transform = 'translateY(-70px)';
                        error.classList.remove = 'transformed';
                    }, 1500)
                } 
            }
        }
    }

    return(
        <div id='mainLogin'>
            <div className="left-side">
                <h1>Templater.io</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ex beatae dolore deserunt odio optio! Autem quas natus commodi aut similique voluptate temporibus enim maxime nobis dignissimos, porro qui explicabo?</p>
                <hr />
                <ul className="input-side">
                    <li>
                        <p>Seu Principal Email</p>
                        <input
                        type="text"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </li>
                    <li>
                        <p>Sua Senha</p>
                        <input
                        type="text"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                        />
                    </li>            
                    <ul className="buttons">
                        <button onClick={() =>navigate('/register')}>Registrar-se</button>
                        <button onClick={handleLogin}>Login</button>

                    </ul>
                    
                    
                </ul>
            </div>

        <div className="error-message" id='error'>
            <i onClick={(e) => {document.getElementById('error').style.display = 'none'}} className='fas fa-search search-iconfa fa-close'></i>
            <p>{messagger}</p>
        </div>
      </div>
    )

};
export default Login;
