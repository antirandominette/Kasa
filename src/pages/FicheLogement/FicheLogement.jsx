import Header from '../../components/Header/Header';
import Error404 from '../Error404/Error404';
import Collapse from '../../components/Collapse/Collapse';
import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import Tag from '../../components/Tag/Tag';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import { useState, useLayoutEffect } from 'react';
import './FicheLogement.css';


function FicheLogement() {
    const { id } = useParams();
    const urlId = id;
    const foundLogement = logements.find(logement => logement.id === urlId);
    const [screenWidth, setScreenWidth] = useState([0, 0]);

    useLayoutEffect(() => { 
        function updateScreenWidth() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', updateScreenWidth);
        updateScreenWidth();

        return () => window.removeEventListener('resize', updateScreenWidth);
    }, []);


    if (!foundLogement) {
        return <Error404 />;
    }
    else {
        function displayCarousel(logement) {
            const slides = [];

            logement.pictures.forEach(photo => {
                slides.push(photo);
            });

            return (
                <Carousel slides={ slides } />
            );
        }

        function displayRatingStars(rating) { // rating is a number between 0 and 5
            const maxRate = 5;
            const fullStars = rating;
            const emptyStars = maxRate - fullStars; 

            const fullStarsArray = [];
            const emptyStarsArray = [];

            for (let i = 0; i < fullStars; i++) {
                fullStarsArray.push(
                    <svg className='ratingStars' key={ i } viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
                    </svg>
                );
            }
            
            for (let i = 0; i < emptyStars; i++) {
                emptyStarsArray.push(
                    <svg className='ratingStars' key={ i } viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <section className='ficheLogementContainer flexCol'>
                <Header />
                {
                    foundLogement && (
                        <div className='ficheLogementContent flexCol'>
                            { displayCarousel(foundLogement) }
                            <div className='ficheLogementUpperContainer flex'>
                                <div>
                                    <h2 className='ficheLogementTitle'>{ foundLogement.title }</h2>
                                    <p className='ficheLogementLocation'>{ foundLogement.location }</p>
                                    <div className='tagDivContainer flex'>
                                        { 
                                            foundLogement.tags.map(tag => 
                                                <Tag key={ tag } tag={ tag } />
                                            ) 
                                        }
                                    </div>
                                </div>
    
                                <div className={ screenWidth > 768 ? 'flexCol' : 'flexRow' }>
                                    <div className='hostInfo flex'>
                                        <p>{ foundLogement.host.name  }</p>
                                        <figure>
                                            <img src={ foundLogement.host.picture } alt={ foundLogement.host.name } />
                                        </figure>
                                    </div>
                                    <div className={ screenWidth > 768 ? 'ratingStarsContainer flexRow' : 'ratingStarsContainer' }>
                                        { displayRatingStars(foundLogement.rating) }
                                    </div>
                                </div>
                            </div>
                            
                            <div className='ficheLogementLowerContainer flex'>
                                <div className='collapseContainer flexCol'>
                                    <Collapse id={ foundLogement.id } title='Description' description={ foundLogement.description } IsOpen={ true } />
                                </div>
                                <div className='collapseContainer flexCol'>
                                    <Collapse id={ foundLogement.id } title='Équipements' equipements={ foundLogement.equipments } IsOpen={ true } />
                                </div>
                            </div>
                        </div>
                    )
                }
                <Footer />
            </section>
        );
    }
}

export default FicheLogement;
