import React from 'react';
import './Home.css';
import Friendly from '../../images/friendly.gif';
import { Link } from 'react-router-dom';

export  const Home = () => {
    return(
        <div className="home">
            <div className="intro">
                <h3>Des développeurs créatifs</h3>
                <h1>Nous sommes la solution<br/> sur votre projet.</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Repellendus ducimus praesentium ad<br /> eos assumenda. Accusamus, alias ut ex libero molestias 
                    doloremque eligendi 
                    itaque laboriosam voluptates quaerat, quas, facere illo sit!
                </p>
                <button className="btn-home" type="button">
                    <Link to="member-team" className="link">
                        Voir les membres
                    </Link>
                </button>
            </div>
            <div className="image">
                <img src={Friendly} alt="Illustration d'amitiée" />
            </div>
        </div>
    );
}
