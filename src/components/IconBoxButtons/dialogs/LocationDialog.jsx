import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LocationDialog = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNo: "",
    state: "",
    lga: "",
    location: "",
    street: "",
  });

  const [sidebarItems] = useState([
    {
      id: 1,
      name: "Victoria Island, Lagos",
      active: true,
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1753422408/dexciss%20site/udemba/location/victoria-island-lagos-nigeria-v0-rbpx8j40bxzb1_ifvwgc.webp",
    },
    {
      id: 2,
      name: "Lekki Phase 1, Lagos",
      active: false,
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1753422784/dexciss%20site/udemba/location/Night-view-of-lekki-link-bridge_dxis0y.jpg",
    },
    {
      id: 3,
      name: "Ikeja GRA, Lagos",
      active: false,
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1753436130/dexciss%20site/udemba/location/3379675_lekkitollgate2_jpeg3db1ff6a8d45d87cb1cfe80c161c4885_j2uwvg.jpg",
    },
    {
      id: 4,
      name: "Ikoyi, Lagos",
      active: false,
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1753436258/dexciss%20site/udemba/location/1_lx2gqy.webp",
    },
    {
      id: 5,
      name: "Banana Island, Lagos",
      active: false,
      image: "https://res.cloudinary.com/de6u5kbiw/image/upload/v1753436303/dexciss%20site/udemba/location/360_F_359318133_30PfWP4dGbh7jan16JwrQEXMktH2swkl_afiahp.jpg",
    },
  ]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      PaperProps={{
        style: {
          width: '90vw',
          backgroundColor: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
        },
      }}
      
    >
      
      <DialogTitle className="text-xl font-semibold text-gray-800 relative">
         <span className='text-3xl text-red-600'>Coverage Area</span>
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

        <style>{`
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 3px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #ef4444; border-radius: 3px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #dc2626; }
        `}</style>
      <DialogContent className="!p-6 overflow-hidden">

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-2/4 relative">

            <div className="pl-4 h-[600px] overflow-y-auto custom-scrollbar">
              <div className="flex justify-center mb-4">
                <button
                  onClick={() =>
                    document.querySelector(".custom-scrollbar")?.scrollBy({
                      top: -400,
                      behavior: "smooth",
                    })
                  }
                  className="text-red-500 hover:text-red-600"
                >
                  
                </button>
              </div>
              <div className="space-y-4 m-4">
                {sidebarItems.map((item) => (
                  <div key={item.id} className="relative">
                    <div className={`border-2 rounded-lg p-4 transition-all duration-200 ${item.active ? "border-gray-800 bg-gray-50" : "border-gray-300 bg-white"}`}>
                      <div className="text-center">
                        <div className="h-24 bg-gray-100 rounded mb-3 overflow-hidden flex justify-center items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className={`w-full h-full object-cover transition-all duration-300 ${!item.active ? 'grayscale' : ''}`}
                          />
                        </div>
                        <div className={`text-sm font-medium ${item.active ? "text-gray-800" : "text-gray-400"}`}>
                          {item.name}
                        </div>
                        <div className={`text-xs mt-1 flex justify-center items-center gap-1 ${item.active ? "text-green-500" : "text-gray-400"}`}>
                          <span className={`w-2 h-2 rounded-full ${item.active ? "bg-green-500" : "bg-gray-400"}`}></span>
                          {item.active ? "Active" : "Inactive"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() =>
                    document.querySelector(".custom-scrollbar")?.scrollBy({
                      top: 400,
                      behavior: "smooth",
                    })
                  }
                  className="text-red-500 hover:text-red-600"
                >
                 
                </button>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-2/3 overflow-hidden">
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
              Fill This Form if Interested in Our Service
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-red-500 text-sm mb-1">Full Name</label>
                <input
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border-2 bg-white border-gray-300 rounded-lg focus:border-red-500 text-sm"
                />
              </div>
              <div>
                <label className="block text-red-500 text-sm mb-1">Phone No</label>
                <input
                  type="tel"
                  value={formData.phoneNo}
                  onChange={(e) => handleInputChange("phoneNo", e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border-2 bg-white border-gray-300 rounded-lg focus:border-red-500 text-sm"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-red-500 text-sm mb-1">State</label>
                  <input
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="w-full bg-white px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-red-500 text-sm mb-1">LGA</label>
                  <input
                    value={formData.lga}
                    onChange={(e) => handleInputChange("lga", e.target.value)}
                    className="w-full bg-white px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-red-500 text-sm mb-1">Location / Area</label>
                  <input
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className="w-full bg-white px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-red-500 text-sm mb-1">Street</label>
                <textarea
                  rows={4}
                  value={formData.street}
                  onChange={(e) => handleInputChange("street", e.target.value)}
                  className="w-full px-4 bg-white py-2 border-2 border-gray-300 rounded-lg focus:border-red-500 text-sm resize-none"
                ></textarea>
              </div>
              <div>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium">
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationDialog;
