import './GalleryCard.css'
import logements from '../../data/logements.json';
import { Link } from "react-router-dom";


function Card() {
    return(
        <div className="galleryCardContainer">
            {
                logements.map((logement) => 
                    <Link key={ logement.id } className='galleryCard'> 
                        <div className="cardContent">
                            <img className='cardImg' src={ logement.cover }  alt={ logement.tags } />
                            <h3 className='cardTitle'>{ logement.title }</h3>
                        </div>
                    </Link>
                )
            }
        </div>
    );
}

export default Card;