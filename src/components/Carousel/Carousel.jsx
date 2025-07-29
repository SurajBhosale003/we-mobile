// src/components/Carousel/Carousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const trackRef = useRef(null);
  const slideWidthRef = useRef(0);
  const intervalRef = useRef(null);

  const slides = [
    { id: 1, src: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1751955041/dexciss%20site/udemba/10_oa0gml.png", alt: "Slide 1" },
    { id: 2, src: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1751955037/dexciss%20site/udemba/8_plqtbb.png", alt: "Slide 2" },
    { id: 3, src: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1751955034/dexciss%20site/udemba/6_ixutjw.png", alt: "Slide 3" }
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 due to leading clone
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedSlides = [
    slides[slides.length - 1], // Clone of last at the start
    ...slides,
    slides[0], // Clone of first at the end
  ];

  const updateSlideWidth = () => {
    if (trackRef.current?.children[0]) {
      const slide = trackRef.current.children[0];
      slideWidthRef.current = slide.offsetWidth + 30;
    }
  };

  const moveToSlide = (index) => {
    if (!trackRef.current) return;
    setIsTransitioning(true);
    trackRef.current.style.transition = 'transform 0.6s ease';
    trackRef.current.style.transform = `translateX(-${slideWidthRef.current * index}px)`;
    setCurrentIndex(index);
  };

  const handleTransitionEnd = () => {
    if (!trackRef.current) return;

    if (currentIndex === 0) {
      // Jump to real last slide
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(-${slideWidthRef.current * slides.length}px)`;
      setCurrentIndex(slides.length);
    } else if (currentIndex === slides.length + 1) {
      // Jump to real first slide
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(-${slideWidthRef.current}px)`;
      setCurrentIndex(1);
    }
    setIsTransitioning(false);
  };

  useEffect(() => {
    updateSlideWidth();
    window.addEventListener('resize', updateSlideWidth);
    return () => window.removeEventListener('resize', updateSlideWidth);
  }, []);

  useEffect(() => {
    updateSlideWidth();
    moveToSlide(1); // Start at the first real slide
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    track?.addEventListener('transitionend', handleTransitionEnd);

    intervalRef.current = setInterval(() => {
      if (!isTransitioning) moveToSlide(currentIndex + 1);
    }, 4000);

    return () => {
      track?.removeEventListener('transitionend', handleTransitionEnd);
      clearInterval(intervalRef.current);
    };
  }, [currentIndex, isTransitioning]);

  return (
    <div className="carousel-container">
      <div className="carousel-track" ref={trackRef}>
        {extendedSlides.map((slide, index) => (
          <div key={index} className="carousel-slide" aria-hidden={(index === 0 || index === extendedSlides.length - 1) ? "true" : "false"}>
            <img src={slide.src} alt={slide.alt + ` ${index}`} />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${currentIndex === i + 1 ? 'active' : ''}`}
            onClick={() => {
              clearInterval(intervalRef.current);
              moveToSlide(i + 1);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
