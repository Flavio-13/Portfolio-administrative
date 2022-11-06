import './LoginAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import axios from 'axios';
 
export const LoginAdmin = () => {

    const baseUrlBack = 'http://localhost:5000';

    const [userLogin, setUserLogin] = useState({
        lastname: '',
        password: ''
    });

    const handleUserLogin = () => {
        if (userLogin)
        axios.post(`${baseUrlBack}/team/login`, userLogin).then(
            (value) => console.log(value),
            (r) => console.log(r)
        );
    }

    return(
        <div className="login-admin">
            <h1>Se connecter</h1>
            <form className="form-admin" >
                <div className="input">
                    <FontAwesomeIcon icon={faUser} className="icon-input" />
                    <input 
                        type="text" 
                        placeholder="Votre nom" 
                        name="nom"
                        onChange={
                            (e) => {
                                setUserLogin({
                                    ...userLogin,
                                    lastname: e.target.value
                                })
                            }
                        } 
                    />
                </div>
                <div className="input">
                    <FontAwesomeIcon icon={faKey} className="icon-input"/>
                    <input 
                        type="password" 
                        placeholder="Votre mot de passe" 
                        name="password"
                        onChange={
                            (e) => {
                                setUserLogin({
                                    ...userLogin,
                                    password: e.target.value
                                })
                            }   
                        } 
                    />
                </div>
                <button 
                    type="button" 
                    className="btn-login-admin"
                    onClick={(e) => handleUserLogin(e)}
                >
                    Se connecter
                </button>
                
            </form>
        </div>
    )
}