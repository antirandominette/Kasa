import '../styles/Card.css'
import logements from '../data/logements.json';

function Card() {
    return(
        <div className="galleryCardContainer">
            {
                logements.map((logement) => 
                    <div key={ logement.id } className='galleryCard'> 
                        <div className="cardContent">
                            <img className='cardImg' src={ logement.cover }  alt={ logement.tags } />
                            <h3 className='cardTitle'>{ logement.title }</h3>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Card;