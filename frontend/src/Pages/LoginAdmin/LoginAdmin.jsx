import './LoginAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
 
export const LoginAdmin = () => {
    return(
        <div className="login-admin">
            <h1>Se connecter</h1>
            <form className="form-admin">
                <div className="input">
                    <FontAwesomeIcon icon={faUser} className="icon-input" />
                    <input type="text" placeholder="Votre nom" />
                </div>
                <div className="input">
                    <FontAwesomeIcon icon={faKey} className="icon-input"/>
                    <input type="password" placeholder="Votre mot de passe" />
                </div>
                <button type="button" className="btn-login-admin">
                    Se connecter
                </button>
                
            </form>
        </div>
    )
}