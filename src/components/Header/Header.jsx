import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const scrollToTarget = (targetY, duration = 800) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      const startTime = performance.now();

      const easeInOut = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      function step(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOut(progress);
        window.scrollTo(0, startY + distance * ease);
        if (elapsed < duration) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    };

    const handleLinkClick = (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const headerOffset = 52;
      const targetY = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;
      scrollToTarget(targetY);
    };

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    // Auto active class on scroll (IntersectionObserver)
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // section must be at least 50% in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

        if (entry.isIntersecting) {
          document.querySelectorAll('.nav-link').forEach(link =>
            link.classList.remove('active')
          );
          if (navLink) navLink.classList.add('active');
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <header>
      <div className="nav-inner">
        <a href="#home" className="logo">
          <img 
            src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1752483427/dexciss%20site/udemba/Untitled_design-removebg-preview_x7tqfj.png" 
            alt="DexCiss Logo" 
          />
        </a>

        <nav>
          <div className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#recharge" className="nav-link">Recharge</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contactus" className="nav-link">Contact Us</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
