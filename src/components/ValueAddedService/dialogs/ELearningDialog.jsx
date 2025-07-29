// src/components/dialogs/ELearningDialog.jsx
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ELearningDialog = ({ open, onClose }) => {
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
        E Learn Service
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
        {/* Add Quadplay specific content here */}
      </DialogContent>
    </Dialog>
  );
};

export default ELearningDialog;