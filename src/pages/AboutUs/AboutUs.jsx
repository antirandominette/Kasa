import AboutUsBanner from "../../components/AboutUsBanner/AboutUsBanner";
import Collapse from "../../components/Collapse/Collapse";
import Header from "../../components/Header/Header";
import dropDownContent from '../../data/dropdownContent.json';
import Footer from "../../components/Footer/Footer";
import "./AboutUs.css";

function AboutUs() {
    return(
        <div className="aboutUsContentContainer">
            <Header />
            <AboutUsBanner />
            { dropDownContent.map((item, index) => {
                    return(
                        <div key={ index } className='collapseContainer'>
                            <Collapse newClassName="collapseContainer" key={ item.id } id={ item.id } title={ item.title } description={ item.description }  />
                        </div>
                    );
            }) }
            <Footer />
        </div>
    );
}

export default AboutUs;