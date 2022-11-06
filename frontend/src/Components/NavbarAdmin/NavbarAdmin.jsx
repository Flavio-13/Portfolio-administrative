import './NavbarAdmin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPeace } from '@fortawesome/free-regular-svg-icons';
import { NavLink } from 'react-router-dom';

export const NavbarAdmin = () => {
    return(
        <div className="navbar">
            <h1 className="logo">
                <FontAwesomeIcon icon={faHandPeace} style={{ marginRight: '15px' }} />
                Mouvance
            </h1>
        </div>
    )
}