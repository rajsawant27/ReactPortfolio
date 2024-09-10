import React, { useEffect } from 'react';

const ChatWidget = () => {

    useEffect(() => {
        // Add the Tawk.to widget script to the document
        const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/66e09849ea492f34bc10c41c/1i7el5ogk';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');

    // Append the script to the document body
    document.body.appendChild(script);
  return () => {
    document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default ChatWidget;