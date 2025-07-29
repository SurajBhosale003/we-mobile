// src/components/ValueAddedServices.tsx
import React, { useState, useEffect } from 'react';
import './ValueAddedServices.css';
import QuadplayDialog from './dialogs/QuadplayDialog';
import TechnopreneurDialog from './dialogs/TechnopreneurDialog';
import ELearningDialog from './dialogs/ELearningDialog';
import WeSatDialog from './dialogs/WeSatDialog';

const services = [
  {
    id: 1,
    title: 'Quadplay',
    description: 'Welcome to our quad play-your all-in-one digital powerhouse, seamlessly integrating the future of media, connectivity, and communication.',
    img: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1753785481/dexciss%20site/udemba/quadplay_spigqm.svg',
    dialogComponent: 'quadplay'
  },
  {
    id: 2,
    title: 'Technopreneur',
    description: 'Register to be part of our business empowering strategy and become financial free',
    img: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1753785497/dexciss%20site/udemba/technopreneur_lpmeox.svg',
    dialogComponent: 'technopreneur'
  },
  {
    id: 3,
    title: 'E-learning',
    description: 'Register to be part of our business empowering strategy and become financial free',
    img: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1753785486/dexciss%20site/udemba/elearning_yogn08.svg',
    dialogComponent: 'e-learning'
  },
  {
    id: 4,
    title: 'WeSat',
    description: 'Sustain physical, mental, and emotional well-being with digital health tools and expert support.',
    img: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1753785493/dexciss%20site/udemba/wesat_cpwf4n.svg',
    dialogComponent: 'we-sat'
  },
];

const ValueAddedServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transition, setTransition] = useState(true);
  const [activeDialog, setActiveDialog] = useState(null);
  const cardsToShow = 3;

  // Clone items for infinite loop
  const extendedServices = [...services, ...services, ...services];
  const handleCardClick = (dialogComponent) => {
    setActiveDialog(dialogComponent);
  };

  const closeDialog = () => {
    setActiveDialog(null);
  };

  const next = () => {
    setTransition(true);
    setCurrentIndex(prev => {
      const newIndex = prev + 1;
      if (newIndex >= services.length) {
        setTimeout(() => {
          setTransition(false);
          setCurrentIndex(0);
        }, 1500);
      }
      return newIndex;
    });
  };

  const prev = () => {
    setTransition(true);
    setCurrentIndex(prev => {
      if (prev <= 0) {
        setTimeout(() => {
          setTransition(false);
          setCurrentIndex(services.length - 1);
        }, 1500);
        return -1;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, []);


  const getVisibleCards = () => {
    let startIndex = currentIndex;
    let endIndex = currentIndex + cardsToShow;
    
    // Handle loop for next button
    if (endIndex > services.length) {
      const remaining = endIndex - services.length;
      return [...services.slice(startIndex), ...services.slice(0, remaining)];
    }
    
    // Handle loop for prev button
    if (startIndex < 0) {
      const remaining = Math.abs(startIndex);
      return [...services.slice(services.length - remaining), ...services.slice(0, endIndex)];
    }
    
    return services.slice(startIndex, endIndex);
  };

  return (
    <div className="vas-wrapper" id="value-added-services">
      <h2 className="vas-heading">
        Value Added Digital Lifestyle Services
        <div className="underline" />
      </h2>

      <div className="vas-slider">
        <button className="vas-nav prev" onClick={prev}>
          ‹
        </button>

        <div className="vas-track-container">
          <div 
            className={`vas-track ${transition ? 'slide-transition' : ''}`}
            style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
          >
            {extendedServices.map((card, index) => (
              <div className="vas-card" key={`${card.id}-${index}`}>
                <img src={card.img} alt={card.title} />
                <h3>{card.title}</h3>
                <div className="vas-redline" />
                <p>{card.description}</p>
                <button 
                  className="get-started" 
                  onClick={() => handleCardClick(card.dialogComponent)}
                >
                  Get Started
                </button>
              </div>
            ))}

              {activeDialog === 'quadplay' && <QuadplayDialog open={true} onClose={closeDialog} />}
              {activeDialog === 'technopreneur' && <TechnopreneurDialog open={true} onClose={closeDialog} />}
              {activeDialog === 'e-learning' && <ELearningDialog open={true} onClose={closeDialog} />}
              {activeDialog === 'we-sat' && <WeSatDialog open={true} onClose={closeDialog} />}
          </div>
        </div>

        <button className="vas-nav next" onClick={next}>
          ›
        </button>
      </div>
    </div>
  );
};

export default ValueAddedServices;