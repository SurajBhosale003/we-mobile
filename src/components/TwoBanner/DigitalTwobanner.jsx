// src/components/DigitalTwobanner.jsx
import React from 'react';

const DigitalTwobanner = () => {
  return (
    <div className="w-[80%] max-w-[1000px] mx-auto py-12 flex flex-col md:flex-row gap-6 justify-center items-stretch">

      {/* Left Red Card */}
      <div className="bg-[#E30613] text-white rounded-[24px] flex flex-col justify-between p-0 md:w-1/2 w-full shadow-lg">
        
        <img
          src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1753448146/dexciss%20site/udemba/5_pgyypa.png"
          alt="OTT Display"
          className=" w-full rounded-[24px] object-contain"
        />
      </div>
      {/* <div
        className="rounded-[24px] bg-cover bg-center text-white flex flex-col justify-between p-6 md:w-1/2 w-full shadow-lg"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/de6u5kbiw/image/upload/v1753448146/dexciss%20site/udemba/5_pgyypa.png")`,
        }}
      >
    
      </div> */}
      {/* Right Image Card */}
      <div
        className="rounded-[24px] bg-cover bg-center text-white flex flex-col justify-between p-6 md:w-1/2 w-full shadow-lg"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/de6u5kbiw/image/upload/v1753448140/dexciss%20site/udemba/4_xbc5zs.png")`,
        }}
      >
    
      </div>

    </div>
  );
};

export default DigitalTwobanner;
