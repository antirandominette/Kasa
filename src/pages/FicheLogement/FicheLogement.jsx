import Header from '../../components/Header/Header';
import Error404 from '../Error404/Error404';
import Collapse from '../../components/Collapse/Collapse';
import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import Tag from '../../components/Tag/Tag';
import Footer from '../../components/Footer/Footer';
import './FicheLogement.css';

function FicheLogement() {
    const { id } = useParams();
    const urlId = id;
    const foundLogement = logements.find(logement => logement.id === urlId);

    if (!foundLogement) {
        return <Error404 />;
    }
    else {
        function displayRatingStars(rating) {
            const maxRate = 5;
            const fullStars = rating;
            const emptyStars = maxRate - fullStars;

            const fullStarsArray = [];
            const emptyStarsArray = [];

            for (let i = 0; i < fullStars; i++) {
                fullStarsArray.push(
                    <svg key={ i } width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
                    </svg>
                );
            }
            
            for (let i = 0; i < emptyStars; i++) {
                emptyStarsArray.push(
                    <svg key={ i } width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
                    </svg>
                );
            }

            return (
                <>
                    { fullStarsArray }
                    { emptyStarsArray }
                </>
            );  
        }

        return (
            <div className='ficheLogementContainer'>
                <Header />
                {
                    foundLogement && (
                        <div className='ficheLogementContent'>
                            <img className='ficheLogementImg' src={ foundLogement.cover } alt={ foundLogement.tags } />
                            <div className='ficheLogementUpperContainer'>
                                <div>
                                    <h2 className='ficheLogementTitle'>{ foundLogement.title }</h2>
                                    <p className='ficheLogementLocation'>{ foundLogement.location }</p>
                                    <div className='ficheLogementTagsContainer'>
                                        { 
                                            foundLogement.tags.map(tag => 
                                                <Tag key={ tag } tag={ tag } />
                                            ) 
                                        }
                                    </div>
                                </div>
    
                                <div>
                                    <div className='hostInfo'>
                                        <p>{ foundLogement.host.name  }</p>
                                        <img src={ foundLogement.host.picture } alt={ foundLogement.host.name } />
                                    </div>
                                    <div className='ratingStarsContainer'>
                                        { displayRatingStars(foundLogement.rating) }
                                    </div>
                                </div>
                            </div>
                            
                            <div className='ficheLogementLowerContainer'>
                                <div className='collapseContainer'>
                                    <Collapse id={ foundLogement.id } title='Description' description={ foundLogement.description } IsOpen={ true } />
                                </div>
                                <div className='collapseContainer'>
                                    <Collapse id={ foundLogement.id } title='Équipements' equipements={ foundLogement.equipments } IsOpen={ true } />
                                </div>
                            </div>
                        </div>
                    )
                }
                <Footer />
            </div>
        );
    }
}

export default FicheLogement;