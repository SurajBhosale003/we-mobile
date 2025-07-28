import React from 'react'

function NeedGuide() {
  return (
    <div className="guidance-section" id="contact-us-we">
      <h2 className="heading-needgud">Need guidance?</h2>
      <p>We would love to help you.</p>
      <div className="guidance-buttons">
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M19 4H5a3 3 0 00-3 3v8a3 3 0 003 3h3v1a2 2 0 003.2 1.6l3.47-2.6H19a3 3 0 003-3V7a3 3 0 00-3-3zm-7 12.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1.32-4.62l-.33.24A1 1 0 0111 12a2.18 2.18 0 011.17-1.76c.56-.4.83-.61.83-1.24a1.17 1.17 0 00-1-1 1.17 1.17 0 00-1 1 1 1 0 01-2 0 3.16 3.16 0 013-3 3.16 3.16 0 013 3 3.31 3.31 0 01-1.68 2.88z" fill="currentColor"/>
          </svg> 
          Support
        </a>
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 4H9a7 7 0 00-1 13.92V20a1.5 1.5 0 002.4 1.2l4.27-3.2H15a7 7 0 000-14zm-7 8a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z" fill="currentColor"/>
          </svg> 
          Chat with us
        </a>
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M8.27 15.73c3.74 3.75 7.07 3.85 8.48 3.68a1.89 1.89 0 001.13-.57l1-1a2 2 0 000-2.83l-.71-.71a2 2 0 00-2.82 0l-.71.71a.997.997 0 01-1.095.219.998.998 0 01-.325-.219L9 10.79a.999.999 0 010-1.42l.71-.71a2 2 0 000-2.82L9 5.13a2 2 0 00-2.83 0l-1 1a1.89 1.89 0 00-.57 1.13c-.18 1.4-.08 4.74 3.67 8.47z" fill="currentColor"/>
          </svg> 
          Call us
        </a>
        <a href="#">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M19 4H5a3 3 0 00-3 3v8a3 3 0 003 3h3v1a2 2 0 003.2 1.6l3.47-2.6H19a3 3 0 003-3V7a3 3 0 00-3-3zm-7 12.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1.32-4.62l-.33.24A1 1 0 0111 12a2.18 2.18 0 011.17-1.76c.56-.4.83-.61.83-1.24a1.17 1.17 0 00-1-1 1.17 1.17 0 00-1 1 1 1 0 01-2 0 3.16 3.16 0 013-3 3.16 3.16 0 013 3 3.31 3.31 0 01-1.68 2.88z" fill="currentColor"/>
          </svg> 
          Find a store
        </a>
      </div>
      <style jsx>{`
        .heading-needgud {
          color: white !important;
        }
        .guidance-section {
          background-color: #ED1C24;
          color: white;
          text-align: center;
          padding: 60px 20px;
        }
        .guidance-section h2 {
          font-size: 66px;
          margin-bottom: 30px;
          font-weight: 700;
        }
        .guidance-section p {
          font-size: 16px;
          margin-bottom: 20px;
        }
        .guidance-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .guidance-buttons a {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          color: #EE1C25;
          background-color: #fff;
          border: 2px solid white;
          border-radius: 999px;
          text-decoration: none !important;
          transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
          box-shadow: 0 0 0 transparent;
        }
        .guidance-buttons a svg {
          height: 30px;
          width: 30px;
          fill: currentColor;
        }
        .guidance-buttons a:hover {
          transform: translateY(-3px);
          background-color: #fff5f5;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  )
}

export default NeedGuide