import { useState } from 'react';
import './Collapse.css';

function Collapse({ id, title, description, equipements, IsOpen }) {
    const [open, setOpen] = useState(IsOpen);

    function handleClick() {
        setOpen(!open);
    }

    return(
        <>
            <div key={ id } onClick={ handleClick } className="collapseBody noSelect" >
                <h2 className='collapseTitle'>{ title }</h2>
                <svg className={ open ? "collapseArrow open" : "collapseArrow" } width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z" fill="white"/>
                </svg>
            </div>
            { open && !equipements && (
                <div className='collapseDescriptionContainer'>
                    <p className='collapseDescription'>{ description }</p>
                </div>
            )}
            {  open && equipements && (
                    <div className='collapseEquipementsContainer'>
                        <ul className='collapseEquipements'>
                            { equipements.map(equipement =>
                                <li key={ equipement }>{ equipement }</li>
                            )}
                        </ul>
                    </div>
                )
            }
        </>
    );
}

export default Collapse;