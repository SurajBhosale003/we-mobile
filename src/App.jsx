// src/App.jsx
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Speedometer from './components/speedMeter/Speedometer';
import GigabitSpeedometer from './components/speedMeter/GigabitSpeedometer';
import AISpeedometer from './components/speedMeter/AISpeedometer';
import ActionButtons from './components/IconBoxButtons/ActionButtons';
import DigitalTwobanner from './components/TwoBanner/DigitalTwobanner';
import OurServices from './components/OurServices/OurServices';
import ThreeCards from './components/ThreeCardsComponent/ThreeCards';
import NeedGuide from './components/NeedGuide/NeedGuide';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <ActionButtons />
      <div className="speedometers-container">
        <div className="speedometer-card">
          <Speedometer />
        </div>
        <div className="speedometer-card">
          <GigabitSpeedometer />
        </div>
        <div className="speedometer-card">
          <AISpeedometer />
        </div>
      </div>
      <DigitalTwobanner />
      <OurServices />
      <ThreeCards />
      <NeedGuide />
      <Footer />
    </div>
  );
}

export default App;