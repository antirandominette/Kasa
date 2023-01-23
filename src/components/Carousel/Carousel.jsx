import { useState } from 'react';
import './Carousel.css';

function Carousel({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePreviousSlide() {
        const firstSlide = currentIndex === 0;
        const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    function handleNextSlide() {
        const lastSlide = currentIndex === slides.length - 1;
        const newIndex = lastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex); 
    }

    return(
        <section className='carouselContainer'>
            {
                slides.length > 1 && (
                    <>
                        <div className='carouselLeftArrow' onClick={ handlePreviousSlide }>
                            <svg className='arrow' viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312V7.78312Z" fill="white"/>
                            </svg>
                        </div>

                        <div className='carouselRightArrow' onClick={ handleNextSlide }>
                            <svg className='arrow' viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
                            </svg>
                        </div>

                        <div className='carouselSlideCounter noSelect'>
                            <p>{ currentIndex + 1 } / { slides.length }</p>
                        </div>
                    </>
                )
            }

            <figure>
                <img className='carouselSlide noSelect' src={ slides[currentIndex] } alt={ `Slider ${currentIndex}` } /> 
            </figure>
        </section>
    );
}

export default Carousel;