import {
  Dialog,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from 'react';
import { weSat } from '../data/plans';

const BuyButton = ({ text }) => (
  <button style={{
    background: '#ed1c24',
    color: '#fff',
    padding: '2px 12px',
    borderRadius: '999px',
    fontSize: '13px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer'
  }}>{text}</button>
);

const PlanCard = ({ title, plans }) => (
  <div style={{
    flex: 1,
    minWidth: '180px',
    background: 'white',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  }}>
    <h3 style={{
      fontSize: '15px',
      fontWeight: 'bold',
      color: '#ed1c24',
      marginBottom: '10px'
    }}>{title}</h3>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {plans.map((plan, index) => (
        <div key={index} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '14px'
        }}>
          <span>{plan.data}</span>
          <span style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {plan.price} <BuyButton text="Buy" />
          </span>
        </div>
      ))}
    </div>
  </div>
);

const WeSatBottomOverlay = ({ open, onClose }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (open) setAnimate(true);
    else setTimeout(() => setAnimate(false), 300);
  }, [open]);

  return (
<Dialog
  open={open}
  onClose={onClose}
  maxWidth="md"
  fullWidth
  PaperProps={{
    style: {
      borderRadius: '20px',
      background: '#f5f5f5',
      padding: '20px',
      boxSizing: 'border-box',
      maxHeight: '90vh',
      minWidth: '70vw',
      display: 'flex',
      flexDirection: 'column',
    }
  }}
  BackdropProps={{
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }}
>
      <IconButton
      onClick={onClose}
      style={{ position: 'absolute', top: 15, right: 15, zIndex: 1 }}
    >
      <CloseIcon />
    </IconButton>

    {/* Title */}
    <h1 style={{
      textAlign: 'center',
      marginBottom: '20px',
      marginTop: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333'
    }}>
      WESAT DATA BUNDLE
    </h1>
    <div
    style={{
      maxHeight: '90vh',
      overflowY: 'auto',
      padding: '20px',
      borderRadius: '20px',
      boxSizing: 'border-box'
    }}
    className="custom-scrollbar"
  >
  <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
    {/* Close Button */}


    {/* ✅ SCROLLABLE CONTENT ONLY */}
    <div
      style={{
        overflowY: 'auto',
        flex: 1,
        padding: '0 5%',
        minHeight: 0, // Required for flexbox to allow scroll
      }}
      className="custom-scrollbar"
    >
      <div style={{
        background: 'white',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}>
        <TableContainer component={Paper} elevation={0} style={{ border: '1px solid #ddd' }}>
          <Table>
            <TableHead>
              <TableRow style={{ background: '#f7f7f7' }}>
                {['PLAN NAME', 'SPEED', 'DATA', 'PRICE', 'NOTES', ''].map(header => (
                  <TableCell key={header} style={{ fontWeight: 'bold', fontSize: '13px' }}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {weSat.plans.map((plan, index) => (
                <TableRow key={index}>
                  <TableCell>{plan.name}</TableCell>
                  <TableCell>{plan.speed}</TableCell>
                  <TableCell>{plan.data}</TableCell>
                  <TableCell>{plan.price}</TableCell>
                  <TableCell>{plan.notes}</TableCell>
                  <TableCell>
                    <BuyButton text={plan.cta} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  </div>
  </div>
</Dialog>


  );
};

export default WeSatBottomOverlay;