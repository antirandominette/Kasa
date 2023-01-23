import AboutUsBanner from "../../components/AboutUsBanner/AboutUsBanner";
import Collapse from "../../components/Collapse/Collapse";
import Header from "../../components/Header/Header";
import dropDownContent from '../../data/dropdownContent.json';
import Footer from "../../components/Footer/Footer";
import "./AboutUs.css";

function AboutUs() {
    return(
        <section className="aboutUsContentContainer flexCol">
            <Header />
            <AboutUsBanner />

            { dropDownContent.map(item => {
                    return(
                        <div key={ item.id } className='collapseContainer flexCol'>
                            <Collapse newClassName="collapseContainer" key={ item.id } id={ item.id } title={ item.title } description={ item.description } IsOpen={ false }  />
                        </div>
                    );
            }) }
            
            <Footer />
        </section>
    );
}

export default AboutUs;