import './GalleryCard.css'
import logements from '../../data/logements.json';
import { NavLink } from "react-router-dom";


function Card() {
    return(
        <div className="galleryCardContainer flex">
            {
                logements.map(logement => 
                    <NavLink key={ logement.id } className='galleryCard' to={`/logement/${logement.id}`}> 
                        <article>
                            <figure>
                                <img className='cardImg' src={ logement.cover }  alt={ logement.tags } />
                            </figure>

                            <h2 className='cardTitle'>{ logement.title }</h2>
                        </article>
                    </NavLink>
                )
            }
        </div>
    );
}

export default Card;