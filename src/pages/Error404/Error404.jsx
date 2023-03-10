import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Error404.css';

function Error404() {
    return (
        <section className='errorContentContainer flexCol'>
            <Header />
            <div className="flexCol">
                <h1 id="errorTitle">404</h1>
                <p id='errorDescription'>Oups ! La page que vous demandez n'existe pas.</p>
            </div>
            <NavLink id='errorLinkToHome' to="/" >Retourner sur la page d'accueil</NavLink>
        </section>
    );
}

export default Error404;