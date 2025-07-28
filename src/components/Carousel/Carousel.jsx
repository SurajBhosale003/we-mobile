// src/components/Carousel/Carousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const trackRef = useRef(null);
  const slideWidthRef = useRef(0);
  const intervalRef = useRef(null);

  const slides = [
    { id: 1, src: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1751955041/dexciss%20site/udemba/10_oa0gml.png", alt: "Slide 1" },
    { id: 2, src: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1751955037/dexciss%20site/udemba/8_plqtbb.png", alt: "Slide 2" },
    { id: 3, src: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1751955034/dexciss%20site/udemba/6_ixutjw.png", alt: "Slide 3" }
  ];

  const setSlideWidth = () => {
    if (trackRef.current?.firstChild) {
      slideWidthRef.current = trackRef.current.firstChild.offsetWidth + 30; // 30px gap
    }
  };

  const showSlide = (index) => {
    if (isTransitioning || !trackRef.current) return;
    setIsTransitioning(true);
    trackRef.current.style.transition = 'transform 0.6s ease';
    trackRef.current.style.transform = `translateX(-${slideWidthRef.current * index}px)`;
    setCurrentIndex(index);
  };

  const handleTransitionEnd = () => {
    if (!trackRef.current) return;
    
    if (currentIndex === slides.length + 1) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(-${slideWidthRef.current * 1}px)`;
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(-${slideWidthRef.current * slides.length}px)`;
      setCurrentIndex(slides.length);
    }
    setIsTransitioning(false);
  };

  useEffect(() => {
    setSlideWidth();
    showSlide(1);
    intervalRef.current = setInterval(() => showSlide(currentIndex + 1), 4000);

    const handleResize = () => {
      setSlideWidth();
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(-${slideWidthRef.current * currentIndex}px)`;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(intervalRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex]);

  useEffect(() => {
    const track = trackRef.current;
    track?.addEventListener('transitionend', handleTransitionEnd);
    return () => track?.removeEventListener('transitionend', handleTransitionEnd);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={trackRef}>
        {/* Clone of last slide */}
        <div className="carousel-slide clone" aria-hidden="true">
          <img src={slides[slides.length-1].src} alt={`${slides[slides.length-1].alt} Clone`} />
        </div>

        {/* Real slides */}
        {slides.map(slide => (
          <div key={slide.id} className="carousel-slide">
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}

        {/* Clones of first slide */}
        <div className="carousel-slide clone" aria-hidden="true">
          <img src={slides[0].src} alt={`${slides[0].alt} Clone`} />
        </div>
        <div className="carousel-slide clone" aria-hidden="true">
          <img src={slides[0].src} alt={`${slides[0].alt} Clone`} />
        </div>
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <span 
            key={i}
            className={`dot ${currentIndex % slides.length === i ? 'active' : ''}`}
            onClick={() => {
              clearInterval(intervalRef.current);
              showSlide(i + 1);
              intervalRef.current = setInterval(() => showSlide(currentIndex + 1), 4000);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;