import React from 'react';

const Location= () => {
  return (
    <div className="location_wrapper">

      <iframe title="location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42929.54077283798!2d174.8166413411637!3d-36.89615612664136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d49d48c645e73%3A0xf382ba368c00b70d!2sSEA%20LIFE%20Kelly%20Tarlton&#39;s%20Aquarium!5e0!3m2!1sen!2snz!4v1589620815944!5m2!1sen!2snz"
        width="100%"
        height="500px"
        frameborder="0"
        allowFullScreen
      ></iframe>
      
      <div className="location_tag">
        <div>Location</div>
      </div>
      
    </div>
  );
};

export default Location;