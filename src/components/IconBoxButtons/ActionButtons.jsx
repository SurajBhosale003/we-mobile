
import React, { useState } from 'react';
import styles from './ActionButton.module.css';
import PlanDialog from './dialogs/PlanDialog';
import LocationDialog from './dialogs/LocationDialog';
import CallDialog from './dialogs/CallDialog';

const ActionButtons = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openCall, setOpenCall] = useState(false);

  return (
    <>
      <div id='#recharge' className={styles['actionButtons-iconBoxWrapper']}>
        <div className={styles['actionButtons-iconBox']} onClick={() => setOpenModal1(true)}>
          <img 
            src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1752582300/dexciss%20site/udemba/Purple_Abstract_Geometric_Mobile_Application_Logo-removebg-preview_xspdun.png" 
            className={styles['actionButtons-img1']} 
            alt="Modal 1"
            height="40px"
            width="40px"
          />
          <span className='text-red-600'> Subscribe</span>
        </div>

        <div className={styles['actionButtons-iconBox']} onClick={() => setOpenLocation(true)}>
          <img 
            src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1751966939/dexciss%20site/udemba/2_1_bzf6l9.png" 
            className={styles['actionButtons-img2']} 
            alt="Location"
            height="40px"
            width="40px"
          />
          <span className='text-red-600'> Coverage Area</span>
        </div>

        <div className={styles['actionButtons-iconBox']} onClick={() => setOpenCall(true)}>
          <img 
            src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1751965031/dexciss%20site/udemba/3_ltgr3c.png" 
            className={styles['actionButtons-img3']} 
            height="40px" 
            width="40px" 
            alt="Call"
          />
          <span className='text-red-600'>Contact us</span>
        </div>
      </div>

      {/* Separated Dialogs */}
      <PlanDialog open={openModal1} onClose={() => setOpenModal1(false)} />
      <LocationDialog open={openLocation} onClose={() => setOpenLocation(false)} style={{ overflowY: 'hidden' }}/>
      <CallDialog open={openCall} onClose={() => setOpenCall(false)} />
    </>
  );
};

export default ActionButtons;
