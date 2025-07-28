import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    const handleFooterNavClick = (item) => {
      // Remove active class from all
      document.querySelectorAll('#footer-nav li').forEach(li => li.classList.remove('active'));
      item.classList.add('active');

      // Scroll to section
      const target = item.getAttribute('data-target');
      const section = document.querySelector(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const footerNavItems = document.querySelectorAll('#footer-nav li');
    footerNavItems.forEach(item => {
      item.addEventListener('click', () => handleFooterNavClick(item));
    });

    // Cleanup function to remove event listeners
    return () => {
      footerNavItems.forEach(item => {
        item.removeEventListener('click', () => handleFooterNavClick(item));
      });
    };
  }, []);

  return (
    <div className="custom-footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul id="footer-nav">
            <li className="active" data-target="#home">Home</li>
            <li data-target="#services">Our Services</li>
            <li data-target="#recharge">Recharge</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3></h3>
          <ul></ul>
        </div>
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <div className="social-icons">
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.27 15.73c3.74 3.75 7.07 3.85 8.48 3.68a1.89 1.89 0 001.13-.57l1-1a2 2 0 000-2.83l-.71-.71a2 2 0 00-2.82 0l-.71.71a.997.997 0 01-1.095.219.998.998 0 01-.325-.219L9 10.79a.999.999 0 010-1.42l.71-.71a2 2 0 000-2.82L9 5.13a2 2 0 00-2.83 0l-1 1a1.89 1.89 0 00-.57 1.13c-.18 1.4-.08 4.74 3.67 8.47z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 4H9a7 7 0 00-1 13.92V20a1.5 1.5 0 002.4 1.2l4.27-3.2H15a7 7 0 000-14zm-7 8a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2zm4 0a1 1 0 110-2 1 1 0 010 2z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="icon">
              <svg viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.25995 21.1098C4.67495 20.7198 0.589946 15.7948 0.764946 10.9198C0.969946 5.19977 5.38495 0.884766 11.0349 0.884766C16.4749 0.884766 21.0249 5.18976 21.2349 10.5698C21.4799 16.7648 16.7199 20.6298 12.7449 21.1198C12.7449 18.7548 12.7449 16.3998 12.7449 13.9648C13.4749 13.9648 14.2349 13.9648 15.0599 13.9648C15.2199 13.0048 15.3749 12.1048 15.5349 11.1298C14.5899 11.1298 13.6949 11.1298 12.7199 11.1298C12.6749 10.2198 12.5699 9.36977 12.8249 8.53977C13.0049 7.94477 13.5099 7.72477 14.0899 7.69477C14.5349 7.66976 14.9849 7.68976 15.4749 7.68976C15.4749 6.79476 15.4749 5.96477 15.4749 5.09977C14.1749 4.85477 12.8849 4.67477 11.6049 5.14977C10.2099 5.66477 9.34995 6.96477 9.31495 8.59977C9.29495 9.40977 9.30995 10.2198 9.30995 11.0948C8.43995 11.0948 7.63495 11.0948 6.78995 11.0948C6.78995 12.0498 6.78995 12.9448 6.78995 13.9048C7.60495 13.9048 8.40995 13.9048 9.25995 13.9048C9.25995 16.3298 9.25995 18.6948 9.25995 21.1098Z" fill="currentColor"></path>
              </svg>
            </span>
            <span className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13.1 1.99998H2.9C2.78356 1.99822 2.66791 2.01941 2.55966 2.06234C2.45141 2.10528 2.35267 2.16912 2.2691 2.25022C2.18552 2.33132 2.11874 2.42809 2.07257 2.535C2.0264 2.64191 2.00174 2.75687 2 2.87331V13.1266C2.00174 13.2431 2.0264 13.358 2.07257 13.465C2.11874 13.5719 2.18552 13.6686 2.2691 13.7497C2.35267 13.8308 2.45141 13.8947 2.55966 13.9376C2.66791 13.9806 2.78356 14.0017 2.9 14H13.1C13.2164 14.0017 13.3321 13.9806 13.4403 13.9376C13.5486 13.8947 13.6473 13.8308 13.7309 13.7497C13.8145 13.6686 13.8813 13.5719 13.9274 13.465C13.9736 13.358 13.9983 13.2431 14 13.1266V2.87331C13.9983 2.75687 13.9736 2.64191 13.9274 2.535C13.8813 2.42809 13.8145 2.33132 13.7309 2.25022C13.6473 2.16912 13.5486 2.10528 13.4403 2.06234C13.3321 2.01941 13.2164 1.99822 13.1 1.99998ZM5.55333 12.2266H3.8V6.52665H5.55333V12.2266ZM4.7 5.72665C4.42003 5.72489 4.15212 5.61243 3.95477 5.41383C3.75742 5.21523 3.64666 4.94662 3.64667 4.66665C3.64482 4.52843 3.67091 4.39127 3.72336 4.26338C3.77582 4.13549 3.85356 4.01951 3.95192 3.92239C4.05028 3.82528 4.16724 3.74902 4.29579 3.6982C4.42433 3.64738 4.56182 3.62304 4.7 3.62665C4.96403 3.6477 5.21043 3.76745 5.39012 3.96204C5.56982 4.15663 5.6696 4.41178 5.6696 4.67665C5.6696 4.94151 5.56982 5.19666 5.39012 5.39125C5.21043 5.58584 4.96403 5.70559 4.7 5.72665ZM12.3 12.1733H10.5V9.37331C10.5 8.70665 10.5 7.82665 9.55333 7.82665C8.60667 7.82665 8.5 8.57331 8.5 9.27331V12.1266H6.74667V6.52665H8.4V7.27331H8.44667C8.62601 6.98385 8.87628 6.74497 9.17378 6.5793C9.47128 6.41364 9.80615 6.32667 10.1467 6.32665C11.9467 6.32665 12.3 7.52665 12.3 9.07331V12.1733Z" fill="white"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <img src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1752483427/dexciss%20site/udemba/Untitled_design__1_-removebg-preview_lh63g8.png" alt="Logo" className="footer-logo" />
        <p>© 2025 We-Mobile. All Rights Reserved.</p>
      </div>

      <style jsx>{`
        .custom-footer {
          font-family: sans-serif;
          color: #000;
          background-color: #ccc;
        }

        .footer-top {
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          gap: 80px;
        }

        .footer-column h3 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-column ul li {
          margin: 8px 0;
          color: #333;
          cursor: pointer;
          transition: color 0.3s;
        }

        .footer-column ul li:hover,
        .footer-column ul li.active {
          color: #ED1C25;
        }

        .social-icons {
          margin-top: 10px;
          display: flex;
          gap: 12px;
        }

        .social-icons .icon {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          background-color: #ED1C25;
          color: white;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          font-size: 16px;
          font-family: "Font Awesome 5 Free", sans-serif;
        }

        .footer-bottom {
          background-color: #f1f1f1;
          border-top: 1px solid #ccc;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          font-size: 14px;
        }

        .footer-logo {
          position: absolute;
          left: 20px;
          height: 40px;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: center;
            gap: 40px;
          }

          .footer-bottom {
            flex-direction: column;
            padding-bottom: 50px;
          }

          .footer-logo {
            position: static;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
}

export default Footer;