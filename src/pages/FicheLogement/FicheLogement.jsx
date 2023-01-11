import Header from '../../components/Header/Header';
import Error404 from '../Error404/Error404';
import Collapse from '../../components/Collapse/Collapse';
import logements from '../../data/logements.json';
import { useParams } from 'react-router-dom';
import Tag from '../../components/Tag/Tag';
import './FicheLogement.css';

function FicheLogement() {
    const { id } = useParams();
    const urlId = id;
    const foundLogement = logements.find(logement => logement.id === urlId);

    if (!foundLogement) {
        return <Error404 />;
    }
    else {
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
                                        <p>{ foundLogement.host.name }</p>
                                        <img src={ foundLogement.host.picture } alt={ foundLogement.host.name } />
                                    </div>
                                    <p>{ foundLogement.rating }</p>
    
                                </div>
                            </div>
                            
                            <div className='ficheLogementLowerContainer'>
                                <Collapse id={ foundLogement.id } title='description' description={ foundLogement.description } />
                                <Collapse id={ foundLogement.id } title='equipements' description={ foundLogement.equipments } />
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default FicheLogement;