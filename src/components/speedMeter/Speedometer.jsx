import React, { useState, useEffect, useRef } from 'react';

const Speedometer = () => {
  const [needlePosition, setNeedlePosition] = useState(-90);
  const speedometerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate needle from -90deg to -45deg when component is in view
            setNeedlePosition(-45);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (speedometerRef.current) {
      observer.observe(speedometerRef.current);
    }

    return () => {
      if (speedometerRef.current) {
        observer.unobserve(speedometerRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="meterFST-speedometer-container"
      ref={speedometerRef}
    >
      <div className="meterFST-gauge-wrapper">
        <div className="meterFST-gauge-background"></div>
        <div className="meterFST-gauge-inner-circle"></div>
        <div className="meterFST-needle meterFST-needle-fixed"></div>
        <div 
          className="meterFST-needle" 
          id="meterFST-movingNeedle"
          style={{ transform: `translateX(-50%) rotate(${needlePosition}deg)` }}
        ></div>
        <div className="meterFST-needle-pivot"></div>
      </div>
      <div className="meterFST-speed-display">100 Mbps</div>
      <div className="meterFST-speed-title">Average Speed</div>
      <div className="meterFST-speed-description">
        The average download speed in Africa is about 100 Mbps and the upload speed is about 33 Mbps.
      </div>

      <style jsx>{`
        .meterFST-speedometer-container {
          background-color: #ffffff;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
          padding: 25px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
          max-width: 300px;
          box-sizing: border-box;
          transition: transform 0.3s ease-in-out;
          margin: 20px auto;
        }

        .meterFST-speedometer-container:hover {
          transform: translateY(-5px);
        }

        .meterFST-gauge-wrapper {
          position: relative;
          width: 200px;
          height: 100px;
          overflow: hidden;
          border-radius: 100px 100px 0 0;
          background-color: transparent;
          margin-bottom: 15px;
        }

        .meterFST-gauge-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 100px 100px 0 0;
          background: linear-gradient(to right, #ed1c24, #4285f4);
          z-index: 0;
        }

        .meterFST-gauge-inner-circle {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 184px;
          height: 92px;
          border-radius: 92px 92px 0 0;
          background-color: #ffffff;
          z-index: 2;
        }

        .meterFST-needle {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 3px;
          height: 70px;
          background-color: #333;
          transform-origin: bottom center;
          transform: translateX(-50%) rotate(-90deg);
          z-index: 3;
          transition: transform 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .meterFST-needle-fixed {
          z-index: 3;
        }

        .meterFST-needle-pivot {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 18px;
          height: 18px;
          background-color: #333;
          border-radius: 50%;
          transform: translateX(-50%) translateY(50%);
          z-index: 4;
        }

        .meterFST-speed-display {
          font-size: 1.4rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 8px;
        }

        .meterFST-speed-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ed1c24;
          margin-bottom: 8px;
        }

        .meterFST-speed-description {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.3;
        }
      `}</style>
    </div>
  );
};

export default Speedometer;