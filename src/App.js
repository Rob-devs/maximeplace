import './App.css';
import NavbarComp from './components/NavbarComp';
import { Banner } from './components/Banner';
import { Doublage } from './components/Doublage';
import { SousTitrage } from './components/SousTitrage';
import { VoiceOver } from './components/VoiceOver';
import { JeuxVideo } from './components/JeuxVideo';
import { SME } from './components/SME';
import bg1 from './assets/images/bg1.png';
import bg2 from './assets/images/bg2.png';
import bg3 from './assets/images/bg3.png';
import bg4 from './assets/images/bg4.png';
import bg5 from './assets/images/bg5.png';
import bg6 from './assets/images/bg6.png';


function App() {
  return (
    <div className="App">
      <div className="bg1" style={{
        backgroundImage: `url(${bg1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <NavbarComp />
        <Banner />
      </div>
      <section className="fullpage-nav">
        <div id="doublage" className="bg2" style={{
          backgroundImage: `url(${bg2})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}><Doublage /></div>
        <div className='separation-sections' />
        <div id="sous-titrage" className="bg3" style={{
          backgroundImage: `url(${bg3})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}><SousTitrage /></div>
        <div className='separation-sections' />
        <div id="voice-over" className="bg4" style={{
          backgroundImage: `url(${bg4})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}><VoiceOver /></div>
        <div className='separation-sections' />
        <div id="jeux-video" className="bg5" style={{
          backgroundImage: `url(${bg5})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}><JeuxVideo /></div>
        <div className='separation-sections' />
        <div id="sme" className="bg6" style={{
          backgroundImage: `url(${bg6})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}><SME /></div>
      </section>
    </div >
  );
}

export default App;
