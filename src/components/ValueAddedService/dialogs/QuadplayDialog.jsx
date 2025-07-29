import { Dialog, DialogTitle, DialogContent, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';


const cards = [
  {
    title: '1. WeMedia (TV)',
    text: 'Your voice, your stories, your stage. From creators to consumers, WeMedia empowers you with a dynamic platform for content discovery, streaming, and expression like never before.',
  },
  {
    title: '2. Home Telephone',
    text: 'Crystal Clear Calls, Right at Home because Home Is Where the Voice Is. Clarity You Can Count On, Calls You Can Trust.',
  },
  {
    title: '3. Webroadband or WeData',
    text: 'The engine of your digital lifestyle. Experience lightning-fast internet designed for homes, businesses, and smart communities—always stable, always on.',
  },
  {
    title: '4. WeVoice',
    text: 'Clear calls, smarter communication. Stay connected with crystal-clear voice services and intelligent call solutions that redefine conversations.',
  },
];

const QuadplayDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        style: {
          borderRadius: '16px',
          backgroundColor: '#f4f6f9',
          padding: '32px 24px',
          overflow: 'hidden',
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: 'center',
          fontWeight: 600,
          fontSize: '28px',
          color: '#e4002b',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          pb: 0,
        }}
      >
        <img src="https://res.cloudinary.com/de6u5kbiw/image/upload/v1753785481/dexciss%20site/udemba/quadplay_spigqm.svg" alt="Logo" style={{ width: 24, marginRight: 8 }} />
        Quadplay
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#000',
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 2 }}>
        <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '4px', color: '#333' }}>
          Welcome to our quad play—your all-in-one digital powerhouse, seamlessly integrating the
          future of media, connectivity, and communication.
        </p>

 <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 text-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <strong style={{ color: '#e4002b' }}>{card.title}</strong>
          <p style={{ marginTop: 8, lineHeight: 1.5 }}>{card.text}</p>
        </motion.div>
      ))}
    </motion.div>

        {/* Subscribe Button */}
        <div style={{ textAlign: 'center', marginTop: '28px' }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#e4002b',
              borderRadius: '24px',
              textTransform: 'none',
              padding: '10px 24px',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            Subscribe
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuadplayDialog;
