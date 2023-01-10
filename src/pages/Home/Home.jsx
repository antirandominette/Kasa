import HomeBanner from '../../components/HomeBanner/HomeBanner';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import Header from '../../components/Header/Header';
import './Home.css';

function Home() {
  return (
    <div className='homeContentContainer'>
      <Header />
      <HomeBanner />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;