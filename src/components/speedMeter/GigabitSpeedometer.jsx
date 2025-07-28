import React, { useState, useEffect, useRef } from 'react';

const GigabitSpeedometer = () => {
  const [needleActive, setNeedleActive] = useState(false);
  const speedometerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setNeedleActive(true);
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
      className="speedometer-box"
      ref={speedometerRef}
    >
      <div className="gauge">
        <div className="gauge-outer-grey"></div>
        <div className="gauge-inner-white"></div>
        <div className="needle needle-fixed"></div>
        <div 
          className={`needle needle-move-2 ${needleActive ? 'active-move' : ''}`}
        ></div>
        <div className="needle-center"></div>
      </div>
      <div className="speed-value">Gigabit</div>
      <div className="heading">We-Mobile Speed</div>
      <div className="description">
        With We-Mobile, you'll get symmetrical Gigabit speeds. That's over 10x faster than the average US speed.
      </div>

      <style jsx>{`
        .speedometer-box {
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

        .speedometer-box:hover {
          transform: translateY(-5px);
        }

        .gauge {
          position: relative;
          width: 200px;
          height: 100px;
          overflow: hidden;
          border-radius: 100px 100px 0 0;
          background-color: transparent;
          margin-bottom: 15px;
        }

        .gauge-outer-grey {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 100px 100px 0 0;
          background: linear-gradient(to right, #ed1c24, #4285f4);
          z-index: 0;
        }

        .gauge-inner-white {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 184px;
          height: 92px;
          border-radius: 92px 92px 0 0;
          background-color: #ffffff;
          z-index: 2;
        }

        .needle {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 3px;
          height: 70px;
          background-color: #333;
          transform-origin: bottom center;
          z-index: 3;
          transition: transform 1s ease-in-out;
        }

        .needle-fixed {
          transform: translateX(-50%) rotate(-90deg);
        }

        .needle-move-2 {
          transform: translateX(-50%) rotate(-90deg);
        }

        .needle-move-2.active-move {
          transform: translateX(-50%) rotate(55deg);
        }

        .needle-center {
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

        .speed-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 8px;
        }

        .heading {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ed1c24;
          margin-bottom: 8px;
        }

        .description {
          font-size: 0.9rem;
          color: #555;
          line-height: 1.3;
        }
      `}</style>
    </div>
  );
};

export default GigabitSpeedometer;