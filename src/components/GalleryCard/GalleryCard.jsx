import './GalleryCard.css'
import logements from '../../data/logements.json';
import { NavLink } from "react-router-dom";


function Card() {
    return(
        <div className="galleryCardContainer">
            {
                logements.map((logement) => 
                    <NavLink key={ logement.id } className='galleryCard' to={`/logement/${logement.id}`}> 
                        <div className="cardContent">
                            <img className='cardImg' src={ logement.cover }  alt={ logement.tags } />
                            <h3 className='cardTitle'>{ logement.title }</h3>
                        </div>
                    </NavLink>
                )
            }
        </div>
    );
}

export default Card;