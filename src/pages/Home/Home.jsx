import Navbar from '../../components/Navbar/Navbar';
import hero_img from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import Play from '../../assets/play_icon.png';
import Info from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';
import './Home.css';
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <section className="hero">
        <img src={hero_img} alt="hero image" className='banner_img' />
        <div className="hero-caption">
          <img src={hero_title} alt="hero image title" className='caption_img' />
          <p>Discovering his ties to a secret ancient order,a young man living in modern istanbul emberks on a quest to save the city from an immortal enemy.</p>
          <div className='hero-btns'>
            <button className='btn'><img src={Play} alt="Play icon" />Play</button>
            <button className='btn dark-btn'><img src={Info} alt="Info icon" />More Info</button>
          </div>
          <TitleCards />
        </div>
      </section>
       <div className='more-cards'>
          <TitleCards title={'Blockbuster Movies'} category={'top_rated'}/>
          <TitleCards title={'Only on Netflix'} category={'popular'}/>
          <TitleCards title={'Upcoming'} category={'upcoming'}/>
          <TitleCards title={'top Pics for you'} category={'now_playing'}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home