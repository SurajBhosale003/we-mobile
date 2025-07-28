import React, { useState, useEffect, useRef } from 'react';

const AISpeedometer = () => {
  const [needlePosition, setNeedlePosition] = useState(-90);
  const speedometerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate needle from -90deg to 90deg when component is in view
            setNeedlePosition(90);
            observer.unobserve(entry.target);
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
      className="meter3ST-speedometer-container"
      ref={speedometerRef}
    >
      <div className="meter3ST-gauge-wrapper">
        <div className="meter3ST-gauge-arc"></div>
        <div className="meter3ST-gauge-inner"></div>
        <div className="meter3ST-needle meter3ST-needle-fixed"></div>
        <div 
          className="meter3ST-needle" 
          id="meter3ST-movingNeedle"
          style={{ 
            transform: `translateX(-50%) rotate(${needlePosition}deg)`,
            transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        ></div>
        <div className="meter3ST-needle-center"></div>
      </div>
      <div className="meter3ST-speed-value">NexGen</div>
      <div className="meter3ST-speed-title">AI-Integrated</div>
      <div className="meter3ST-speed-description">
        The smart, efficient choice that keeps you connected and saves you money.
      </div>

      <style jsx>{`
        .meter3ST-speedometer-container {
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

        .meter3ST-speedometer-container:hover {
          transform: translateY(-5px);
        }

        .meter3ST-gauge-wrapper {
          position: relative;
          width: 200px;
          height: 100px;
          overflow: hidden;
          border-radius: 100px 100px 0 0;
          margin-bottom: 15px;
        }

        .meter3ST-gauge-arc {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 100px 100px 0 0;
          background: conic-gradient(
            from -90deg at 50% 100%,
            #ed1c24 0deg,
            #4285f4 180deg,
            transparent 180deg
          );
          z-index: 0;
        }

        .meter3ST-gauge-inner {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 184px;
          height: 92px;
          border-radius: 92px 92px 0 0;
          background-color: #ffffff;
          z-index: 1;
        }

        .meter3ST-needle {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 3px;
          height: 70px;
          background-color: #333;
          transform-origin: bottom center;
          z-index: 2;
        }

        .meter3ST-needle-fixed {
          transform: translateX(-50%) rotate(-90deg);
        }

        .meter3ST-needle-center {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 18px;
          height: 18px;
          background-color: #333;
          border-radius: 50%;
          transform: translateX(-50%) translateY(50%);
          z-index: 3;
        }

        .meter3ST-speed-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 8px;
        }

        .meter3ST-speed-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ed1c24;
          margin-bottom: 8px;
        }

        .meter3ST-speed-description {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.3;
        }
      `}</style>
    </div>
  );
};

export default AISpeedometer;