import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function OurServices() {
  const [expandedService, setExpandedService] = useState(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, amount: 0.3 });
  const rightInView = useInView(rightRef, { once: true, amount: 0.3 });

  const toggleService = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const services = [
    {
      id: 1,
      title: 'Mobile Services',
      subtitle: 'Stay online, stay connected.',
      description:
        'Make calls, stream content, and browse without breaks — with strong network coverage and ARRA-powered WiFi.',
      bullets: [
        'Unlimited voice calling',
        'Mobile data via ARRA WiFi',
        'TrendPlay OTT access on mobile'
      ]
    },
    {
      id: 2,
      title: 'Household Services',
      subtitle: 'Stay online, stay connected.',
      description:
        'Make calls, stream content, and browse without breaks — with strong network coverage and ARRA-powered WiFi.',
      bullets: [
        'Unlimited voice calling',
        'Mobile data via ARRA WiFi',
        'TrendPlay OTT access on mobile'
      ]
    },
    {
      id: 3,
      title: 'Enterprise Services',
      subtitle: 'Stay online, stay connected.',
      description:
        'Make calls, stream content, and browse without breaks — with strong network coverage and ARRA-powered WiFi.',
      bullets: [
        'Unlimited voice calling',
        'Mobile data via ARRA WiFi',
        'TrendPlay OTT access on mobile'
      ]
    }
  ];

  return (
    <div className="w-[90%] max-w-[1000px] mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Connecting People, Homes, and Progress
        </h1>
        <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
          From mobile services to home entertainment and enterprise connectivity, WE-Mobile brings reliable, affordable, and locally-rooted digital access to every corner of the community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={leftRef}
          initial={{ x: -100, opacity: 0 }}
          animate={leftInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className="flex justify-center"
        >
          <img
            src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1753448143/dexciss%20site/udemba/Untitled_design_16_p4y00r.png"
            alt="WE-Mobile Representative"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div
          ref={rightRef}
          initial={{ x: 100, opacity: 0 }}
          animate={rightInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 2 }}
          className='w-[95%] mx-auto'
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Services</h2>
          <div className="space-y-4 ">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 border border-gray-200"
              >
                <button
                  onClick={() => toggleService(index)}
                  className={`w-full flex justify-between items-center px-5 py-4 text-white text-left font-semibold text-[20px] bg-red-500 hover:bg-red-600 transition-all duration-300`}
                >
                  <span>{`${service.id}. ${service.title}`}</span>
                  <motion.span
                    animate={{ rotate: expandedService === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.span>
                </button>
{expandedService === index && (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="overflow-hidden bg-gray-50 px-5 py-4 text-sm text-gray-700"
  >
    <h3 className="font-semibold mb-1">{service.subtitle}</h3>
    <p className="mb-2">{service.description}</p>
    <ul className="list-disc pl-6 space-y-1">
      {service.bullets.map((bullet, i) => (
        <li key={i}>{bullet}</li>
      ))}
    </ul>
  </motion.div>
)}

              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default OurServices;