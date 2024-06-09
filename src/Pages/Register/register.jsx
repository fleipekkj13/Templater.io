import './registerStyle/style.css'
import React from 'react';
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

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [name, setName] = useState('');
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

      async function createUser() {
        try{
            const user = await addDoc(userCollectionRef, {
                email,
                name,
                password,
            });
            const success = document.getElementById('success');
            if (success.className != 'transformed') {
                success.classList.add = 'transformed';
                success.style.transform = 'translateY(70px)';
                setTimeout(()=>{
                    success.style.transform = 'translateY(-70px)';
                    success.classList.remove = 'transformed';
                }, 1500)
            }
            setTimeout(()=>{
                navigate('/login')
            }, 1000)

        } catch{
            const error = document.getElementById('error');
            if (error.className != 'transformed') {
                error.classList.add = 'transformed';
                error.style.transform = 'translateY(70px)';
                setTimeout(()=>{
                    error.style.transform = 'translateY(-70px)';
                    error.classList.remove = 'transformed';
                }, 1500)
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
                        <p>Seu Nome</p>
                        <input
                        type="text"
                        placeholder="Insira o seu nome..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </li>
                    <li>
                        <p>Seu Principal Email</p>
                        <input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </li>
                    <li>
                        <p>Sua Senha</p>
                        <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPass(e.target.value)}
                        />
                    </li>            
                    <button onClick={()=>{createUser()}}>Desejo Me Registrar!</button>
                </ul>
            </div>

        <div className="error-message" id='error'>
            <i onClick={(e) => {document.getElementById('error').style.display = 'none'}} className='fas fa-search search-iconfa fa-close'></i>
            <p><a>Email ou senha incorretos!</a> Tente novamente ou <i >crie uma conta.</i></p>
        </div>
      </div>
    )
};

export default Register;