import React from 'react';

const Contact = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-red-700">Contact Us</h1>
      <p className="mt-4 text-gray-700">
        Got questions or need help? Reach out to our support team — we’re here to help!
      </p>

      <div className="mt-6 space-y-2">
        <p><strong>Email:</strong> support@pixelgenixedutech.com</p>
        <p><strong>Phone:</strong> +91-9876543210</p>
        <p><strong>Address:</strong> PixelGenixEduTech HQ, Jaipur, Rajasthan, India</p>
      </div>
    </div>
  );
};

export default Contact;
