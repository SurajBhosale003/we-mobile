import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  width: 300,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.25)',
  },
}));

const CardText = styled(CardContent)(({ theme }) => ({
  backgroundColor: '#ED1C24',
  color: 'white',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));


const cardData = [
  {
    id: 1,
    imgSrc: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1752647328/dexciss%20site/udemba/jiocx-category-card-384x216-1_imcj7r.webp',
    alt: 'WiFi',
    title: 'Smarter, Faster WiFi',
    description: 'We-Mobile offers a superior home internet experience.',
    animation: {
      hidden: { x: -100, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    transition: { duration: 0.8 }
  },
  {
    id: 2,
    imgSrc: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1752647326/dexciss%20site/udemba/connectivity-oct-2024_lvylq0.webp',
    alt: 'Fibre',
    title: 'Fibre In The Air',
    description: 'High-speed fiber internet for homes, businesses, and SmartCities.',
    animation: {
      hidden: { y: 100, opacity: 0 },
      visible: { y: 0, opacity: 1 },
    },
    transition: { duration: 0.8, delay: 0.2 }
  },
  {
    id: 3,
    imgSrc: 'https://res.cloudinary.com/de6u5kbiw/image/upload/v1752661384/dexciss%20site/udemba/Untitled_design_14_zf7nsj.png',
    alt: 'AI',
    title: 'AI Integrations',
    description: 'Seamless cloud hosting, storage, and AI-driven services for enterprises.',
    animation: {
      hidden: { x: 100, opacity: 0 },
      visible: { x: 0, opacity: 1 },
    },
    transition: { duration: 0.8, delay: 0.4 }
  }
];

function ThreeCards() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '40px',
        flexWrap: 'wrap',
      }}
    >
      {cardData.map((card) => (
        <motion.div
          key={card.id}
          initial="hidden"
          animate="visible"
          variants={card.animation}
          transition={card.transition}
        >
          <StyledCard>
            <CardMedia
              component="img"
              image={card.imgSrc}
              alt={card.alt}
            />
            <CardText>
              <Typography variant="h6" component="h3" sx={{ color: 'white', mb: 1 }}>
                {card.title}
              </Typography>
              <Typography variant="body2" component="p">
                {card.description}
              </Typography>
                <button className='bg-white py-1 px-2 mt-3 self-start rounded-md text-[12px] text-[#EE1C25]'>
                  More ...
                </button>

            </CardText>
          </StyledCard>
        </motion.div>
      ))}
    </Box>
  );
}

export default ThreeCards;