// PlanDialog.jsx
import { Dialog, DialogTitle, DialogContent, IconButton, Button } from '@mui/material';
import { useState } from 'react';
import { plans } from '../data/plans'; // import your plan JSON
import CloseIcon from '@mui/icons-material/Close';
import WeMobileBottomOverlay from './WeMobileBottomOverlay';
import WeSatBottomOverlay from './WeSatBottomOverlay';


const PlanDialog = ({ open, onClose }) => {

  const [showWeMobileBottomOverlay, setShowWeMobileBottomOverlay] = useState(false);
  const [showWeSatBottomOverlay, setShowWeSatBottomOverlay] = useState(false);

  const openPlan = (planID) => {
    console.log("Opening plan:", planID);
    if (planID === 'weMobileBundle') {
      setShowWeMobileBottomOverlay(true);
    } else if (planID === 'weSatBundle') {
      setShowWeSatBottomOverlay(true);
    }
  };


  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          width: '80vw',
          minWidth: '60vw',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '16px',
          padding: '24px',
          overflow: 'visible'
        }
      }}
    >
      <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', color: '#111827' }}>
        Time to choose your perfect 5G plan
        <IconButton
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '8px',
            top: '8px',
            color: 'black'
          }}
        >
          <CloseIcon />
        </IconButton> 
      </DialogTitle>

      <DialogContent>
        {/* Plans Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(220px, 1fr))', // Fixed 4 columns (adjust as needed)
      gridAutoFlow: 'column', // Force column-wise flow
      gap: '30px',
      overflowX: 'auto', // Enable horizontal scrolling
      paddingBottom: '20px', // Space for scroll (if needed)
      padding: '28px',
     
      scrollbarWidth: 'none', // Hide scrollbar in Firefox
      msOverflowStyle: 'none', // Hide scrollbar in IE/Edge
      '&::-webkit-scrollbar': { // Hide scrollbar in Chrome/Safari
        display: 'none',
      
      }
    }}>
{plans.map(plan => (
  <div
    key={plan.id}
    style={{
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      padding: '24px',
      // margin: '0 auto',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      textAlign: 'center',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0px)'}
  >
    {/* Title / Highlight */}
    {plan.highlight && (
      <div style={{
        fontSize: '20px',
        fontWeight: '600',
        color: '#e50914',
        marginBottom: '8px'
      }}>
        {plan.highlight}
      </div>
    )}

    {/* Price */}
    <div style={{
      fontSize: '28px',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '12px'
    }}>
      {plan.price}
    </div>

    {/* Details */}
{/* Details */}
<div style={{ display: 'flex', alignItems: 'center', color: '#4b5563', fontSize: '16px', marginBottom: '4px' , marginLeft: '15%' }}>
  <span style={{
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    backgroundColor: '#e50914',
    marginRight: '8px',
    display: 'inline-block',
    boxShadow: '0 0 8px rgba(229,9,20,0.5)',
    animation: 'pulse 1.5s infinite'
  }}></span>
  {plan.speed}
</div>
<div style={{ display: 'flex', alignItems: 'center', color: '#4b5563', fontSize: '16px', marginBottom: '16px' , marginLeft: '15%'}}>
  <span style={{
    height: '10px',
    width: '10px',
    borderRadius: '50%',
    backgroundColor: '#e50914',
    marginRight: '8px',
    display: 'inline-block',
    boxShadow: '0 0 8px rgba(229,9,20,0.5)',
    animation: 'pulse 1.5s infinite'
  }}></span>
  {plan.data}
</div>

    {/* Note */}
    {plan.note && (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        fontWeight: '500',
        fontSize: '14px',
        color: '#6b7280',
        marginBottom: '16px'
      }}>
        <span style={{ color: '#e50914', marginRight: '4px' }}>Note:</span> {plan.note}
      </div>
    )}

    {/* CTA */}
    <button
      style={{
        backgroundColor: '#e50914',
        border: 'none',
        borderRadius: '999px',
        padding: '10px 24px',
        color: 'white',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 4px 12px rgba(229,9,20,0.3)',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#c40812'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#e50914'}
      onClick={() => openPlan(plan.planID)}
    >
      {plan.cta}
    </button>
  </div>
))}

        </div>
      </DialogContent>
      <WeMobileBottomOverlay open={showWeMobileBottomOverlay} onClose={() => setShowWeMobileBottomOverlay(false)} />
      <WeSatBottomOverlay open={showWeSatBottomOverlay} onClose={() => setShowWeSatBottomOverlay(false)} />
    </Dialog>
  );
};

export default PlanDialog;
