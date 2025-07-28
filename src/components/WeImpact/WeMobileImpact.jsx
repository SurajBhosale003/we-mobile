import React, { useEffect } from 'react';

function WeMobileImpact() {
  useEffect(() => {
    const cards = document.querySelectorAll(".impact-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="impact-section">
      <div className="impact-header">
        <p className="subheading">
        <h2>Explore WE-Mobile's Impact</h2>
          From remote villages to urban homes, WE-Mobile is not just about connectivity — 
          it's about creating opportunity, empowerment, and access for all.
        </p>
      </div>

      <div className="impact-cards">
        {/* Card 1 - light by default, turns red on hover */}
        <div className="impact-card alt" data-animation="from-left">
          <h3>90%</h3>
          <p className="title">Coverage Where It Counts</p>
          <p className="desc">Reliable voice and data in rural, remote, and underserved regions.</p>
        </div>

        {/* Card 2 - always red */}
        <div className="impact-card" data-animation="from-top">
          <h3>4‑in‑1</h3>
          <p className="title">Complete Quadplay Access</p>
          <p className="desc">Data, Voice, IPTV, and Home Phone — all in one smart, affordable plan.</p>
        </div>

        {/* Card 3 - light by default, turns red on hover */}
        <div className="impact-card alt" data-animation="from-right">
          <h3>10,000+</h3>
          <p className="title">Local Hours Streamed</p>
          <p className="desc">Empowering African creators and bringing local stories to life.</p>
        </div>
      </div>

      <style jsx>{`
        .impact-section {
          background-color: #D9D9D9;
          padding: 60px 0px;
          max-width: 100%;
          margin: 0 auto;
          text-align: left;
          margin-bottom: 3rem;
        }

        .impact-header h2 {
        
          font-size: 42px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #333;
        }

        .impact-header .subheading {
          font-size: 18px;
          line-height: 1.6;
          color: #666;
          max-width: 1000px;
          margin: 0 auto 50px;
        }

        .impact-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          justify-content: center;
          padding-top: 10px;
          width: 100%;
          perspective: 1000px;
        }

        .impact-cards div {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          border-radius: 30px;
          transform: translateZ(0);
        }

        .impact-cards div:hover {
          box-shadow: 
            rgba(0, 0, 0, 0.25) 0px 54px 55px,
            rgba(0, 0, 0, 0.12) 0px -12px 30px,
            rgba(0, 0, 0, 0.12) 0px 4px 6px,
            rgba(0, 0, 0, 0.17) 0px 12px 13px,
            rgba(0, 0, 0, 0.09) 0px -3px 5px;
          transform: scale(1.02) translateY(-5px);
          z-index: 10;
        }

        .impact-card {
          width: 340px;
          background-color: #ed1c25;
          color: #fff;
          border-radius: 20px;
          padding: 32px 24px;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
          transition: background-color 0.25s ease, box-shadow 0.25s ease, transform 1s ease-out;
          text-align: left;
          opacity: 0;
          transform-style: preserve-3d;
        }

        .impact-card h3 {
          font-size: 39px;
          font-weight: 700;
          margin-bottom: 12px;
          color: white;
        }

        .impact-card .title {
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .impact-card .desc {
          font-size: 14px;
          line-height: 1.5;
          color: #fdfdfd;
        }

        .impact-card.alt {
          background-color: #f5565c;
        }

        .impact-card.alt:hover {
          background-color: #ed1c25;
        }

        /* Animation classes */
        .impact-card[data-animation="from-left"] {
          transform: translateX(-300px) rotateY(30deg);
        }

        .impact-card[data-animation="from-top"] {
          transform: translateY(-200px) rotateX(30deg);
        }

        .impact-card[data-animation="from-right"] {
          transform: translateX(300px) rotateY(-30deg);
        }

        /* Visible state */
        .impact-card.in-view {
          opacity: 1;
          transform: translate(0, 0) rotate(0);
          transition: opacity 1.5s cubic-bezier(0.19, 1, 0.22, 1), 
                      transform 2.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        /* Staggered animations */
        .impact-card:nth-child(1).in-view {
          transition-delay: 0.5s;
        }
        .impact-card:nth-child(2).in-view {
          transition-delay: 0.5s;
        }
        .impact-card:nth-child(3).in-view {
          transition-delay: 0.5s;
        }

        @media (max-width: 768px) {
          .impact-header h2 {
            font-size: 32px;
          }
          
          .impact-header .subheading {
            font-size: 16px;
          }
          
          .impact-cards {
            flex-direction: column;
            align-items: center;
          }
          
          .impact-card {
            width: 100%;
            max-width: 340px;
          }
        }
      `}</style>
    </div>
  );
}

export default WeMobileImpact;