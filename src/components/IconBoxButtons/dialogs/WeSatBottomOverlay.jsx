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
      overflowY: 'auto'
    }
  }}
  BackdropProps={{
    style: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)' // proper gray overlay
    }
  }}
>
      <div style={{ position: 'relative' }}>
        <IconButton
          onClick={onClose}
          style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
        >
          <CloseIcon />
        </IconButton>

        <h1 style={{
          textAlign: 'center',
          marginBottom: '24px',
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#333'
        }}>
          WESAT DATA BUNDLE
        </h1>
        <div style={{
          marginLeft: '5%',
          marginRight: '5%',
        }}>
          {/* Broadband Bundles */}
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
                    {['PLAN NAME',  'SPEED','DATA', 'PRICE', 'NOTES', ''].map(header => (
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
    </Dialog>
  );
};

export default WeSatBottomOverlay;