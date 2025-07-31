// src/components/dialogs/TechnopreneurDialog.jsx
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';

const timelineData = [
  'The Technoprenur deposits with us N500,000 and above and gets our installation package worth or slightly above the deposited amount.',
  'For every customer, the Technoprenur takes the installation charge and an agreed % of the subscription benefits under his/her domain.',
  'These also include our Webroadband and WeSat SME/Residential and corporate packages.',
  'Upon exhausting the installation packages, a new stock is immediately supplied to the Technoprenur. He can also be an anchor to his neighbourhood, thus making extra money from the services.',
];

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '90vw',
    maxWidth: '1000px',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#f4f6f9',
    position: 'relative',
  },
}));

const RegisterButton = styled(Button)({
  backgroundColor: '#e4002b',
  color: '#fff',
  padding: '10px 30px',
  borderRadius: '20px',
  fontWeight: 'bold',
  fontSize: '14px',
  textTransform: 'none',
  marginTop: '32px',
  '&:hover': {
    backgroundColor: '#c80025',
  },
});

const CancelButton = styled(Button)({
  marginLeft: '16px',
  marginTop: '32px',
  padding: '10px 30px',
  borderRadius: '20px',
  fontWeight: 'bold',
  fontSize: '14px',
  textTransform: 'none',
  backgroundColor: '#fff',
  border: '2px solid #e4002b',
  color: '#e4002b',
  '&:hover': {
    backgroundColor: '#ffe5e8',
  },
});

const SlideForm = styled('div')(({ active }) => ({
  position: 'absolute',
  top: 0,
  left: active ? 0 : '100%',
  width: '100%',
  height: '100%',
  backgroundColor: '#f4f6f9',
  transition: 'left 0.5s ease-in-out',
  padding: '32px 48px',
  boxSizing: 'border-box',
  overflowY: 'auto',
  scrollbarWidth: 'thin',
  scrollbarColor: '#e4002b transparent',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#e4002b',
    borderRadius: '8px',
  },
}));

const TimelineDot = styled('span')({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: '#000',
  display: 'inline-block',
  margin: '0 8px',
});

const FormField = styled(TextField)({
  marginBottom: '20px',
});

const TechnopreneurDialog = ({ open, onClose }) => {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <StyledDialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 700,
          fontSize: '48px',
          color: '#e4002b',
          position: 'relative',
        }}
      >
        <div className='flex mt-11'>
        <img src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1753785497/dexciss%20site/udemba/technopreneur_lpmeox.svg" alt="logo" style={{ width: 62, marginRight: 8 }} />
        Technoprenur
        </div>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: 16, top: 16, color: '#000' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ position: 'relative', height: '520px', padding: '0 32px' }} className='overflow-hidden'>
        <div style={{ opacity: formVisible ? 0 : 1, transition: 'opacity 0.3s ease', padding: '24px 16px' }}>
          <p style={{ textAlign: 'center', margin: '12px auto', fontSize: '15px', color: '#333' }}>
            <strong>
              Technoprenurs are based on our business model, which is built on shared prosperity and deferred
              gratification.
            </strong>{' '}
            A Technoprenur is an individual who registers with our company to be our distributor in a particular state or city.
          </p>

          <h3 style={{ color: '#e4002b', marginTop: '44px',marginBottom: '5px', fontWeight: 600 }}>Process/Benefits:</h3>

 <div className="flex justify-between gap-4 pt-6">
      {timelineData.map((text, index) => (
        <motion.div
          key={index}
          className="flex-1 min-w-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.9, type: 'spring' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <FaCircle className="text-red-600 text-xs" />
            <div className="h-px bg-red-500 w-full" />
          </div>
          <p className="text-sm leading-relaxed text-gray-700">{text}</p>
        </motion.div>
      ))}
    </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <RegisterButton onClick={() => setFormVisible(true)}>Register</RegisterButton>
          </div>
        </div>

        <SlideForm active={formVisible}>
          <h2 style={{ color: '#e4002b', textDecoration: 'underline', marginBottom: 24 }}>Register</h2>
          <form>
            <FormField fullWidth label="Full Name" variant="outlined" size="small" />
            <FormField fullWidth label="Gender" variant="outlined" size="small" />
            <div style={{ display: 'flex', gap: '12px' }}>
              <FormField label="Date" variant="outlined" size="small" fullWidth />
              <FormField label="Month" variant="outlined" size="small" fullWidth />
              <FormField label="Year" variant="outlined" size="small" fullWidth />
            </div>
            <FormField fullWidth label="Highest Qualification Attained" variant="outlined" size="small" />
            <div style={{ display: 'flex', gap: '12px' }}>
              <FormField fullWidth label="Phone No" variant="outlined" size="small" />
              <FormField fullWidth label="State" variant="outlined" size="small" />
            </div>
            <div>
              <p style={{ margin: '8px 0', color: '#e4002b' }}>Have you been convicted before?</p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <FormField label="Yes" variant="outlined" size="small" />
                <FormField label="No" variant="outlined" size="small" />
              </div>
            </div>
            <FormField fullWidth label="Address" variant="outlined" multiline rows={3} size="small" />
            <FormField fullWidth label="Email" variant="outlined" size="small" />
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <RegisterButton type="submit">Submit</RegisterButton>
              <CancelButton onClick={() => setFormVisible(false)}>Cancel</CancelButton>
            </div>
          </form>
        </SlideForm>
      </DialogContent>
    </StyledDialog>
  );
};

export default TechnopreneurDialog;