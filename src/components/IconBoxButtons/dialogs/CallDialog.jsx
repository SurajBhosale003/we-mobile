import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ContactDialog = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose(); // Close the dialog after submission
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          width: '80vw',
          maxWidth: '900px',
          backgroundColor: '#f3f4f6', // gray-200 equivalent
          color: 'black',
          borderRadius: '24px',
          padding: '20px'
        }
      }}
    >
      <DialogTitle>
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">
            Feel free to contact us. Submit your enquiries here and we will get back to you as soon as possible
          </p>
        </div>
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
      
      <DialogContent className="custom-scrollbar" sx={{ overflowY: 'auto', maxHeight: '70vh' }}>
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Contact Card */}
          <div className="bg-orange-200 rounded-2xl p-8 flex items-center space-x-6">
            <div className="text-red-500 text-3xl">
              <i className="fas fa-phone"></i>
            </div>
            <div>
              <h3 className="text-red-500 font-semibold text-lg mb-2">Contact</h3>
              <div className="text-gray-800 space-y-1">
                <p>+234 803 324 2821</p>
                <p>+234 803 324 2821</p>
                <p>+234 803 324 2821</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-orange-200 rounded-2xl p-8 flex items-center space-x-6">
            <div className="text-red-500 text-3xl">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3 className="text-red-500 font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-800">info@ludgroup.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-10 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-gray-800 font-medium mb-2 text-sm">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-800 font-medium mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-gray-800 font-medium mb-2 text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-800 font-medium mb-2 text-sm">
                Note
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={5}
                className="w-full bg-white px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;