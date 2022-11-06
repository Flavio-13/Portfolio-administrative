import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngry, faHandPeace } from '@fortawesome/free-regular-svg-icons';

export const Navbar = () => {
    return(
        <div className="navbar">
            <h1 className="logo">
                <FontAwesomeIcon icon={faHandPeace} style={{ marginRight: '15px' }} />
                Mouvance
            </h1>
            <div className="links">
                <NavLink 
                    to="/" className={
                        (active) => active.isActive ? 'link' : ''
                    }
                >
                    <span>Accueil</span>
                </NavLink>
                <NavLink to="service" className="link">
                    <span>Service</span>
                </NavLink>
                {/* <NavLink to="a-propos" className="link">
                    <span>A propos</span>
                </NavLink> */}
                <NavLink to="contact" className="link">
                    <span className="contacter">Nous contacter</span>
                </NavLink>
            </div>
        </div>
    )
}