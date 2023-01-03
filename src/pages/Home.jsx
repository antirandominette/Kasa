import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import '../styles/Home.css';

function Home() {
  return (
    <div className='homeContentContainer'>
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;