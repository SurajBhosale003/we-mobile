import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Speedometer from './components/speedMeter/Speedometer';
import GigabitSpeedometer from './components/speedMeter/GigabitSpeedometer';
import AISpeedometer from './components/speedMeter/AISpeedometer';
import ActionButtons from './components/IconBoxButtons/ActionButtons';
import DigitalTwobanner from './components/TwoBanner/DigitalTwobanner';
import OurServices from './components/OurServices/OurServices';
import ThreeCards from './components/ThreeCardsComponent/ThreeCards';
import WeMobileImpact from './components/WeImpact/WeMobileImpact';
import ValueAddedServices from './components/ValueAddedService/ValueAddedServices';
import NeedGuide from './components/NeedGuide/NeedGuide';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App bg-white custom-scrollbar">
      <Header />

      {/* Home Section */}
      <section id="home">
        <Carousel />
      </section>

      {/* Recharge Section */}
      <section id="recharge">
        <ActionButtons />
      </section>

      {/* Optional: other components between recharge and services */}
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

      {/* Services Section */}
      <section id="services">
        <OurServices />
      </section>

      <ThreeCards />
      <WeMobileImpact />

      {/* Value Added Services Section */}
      <section id="value-added-services">
        <ValueAddedServices />
      </section>

      {/* Contact Us Section */}
      <section id="contactus">
        <NeedGuide />
        <Footer />
      </section>
    </div>
  );
}

export default App;
