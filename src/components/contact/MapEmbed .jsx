import React from 'react';

const MapEmbed = () => {
  return (
    <div className="w-full h-64 sm:h-72 md:h-96 flex justify-center items-center">
      <iframe
        title="Business Victory Solutions Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472.6369685014529!2d79.98469663366032!3d14.443973575600237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf373b8947d45%3A0x9e2b0159a402aafb!2sBusiness%20victory%20solutions!5e1!3m2!1sen!2sin!4v1729236968301!5m2!1sen!2sin"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
