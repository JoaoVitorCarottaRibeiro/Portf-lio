import React from 'react';

const Button = ({ imageSrc, altText, href }) => {
  return (
    <>
     <a href={href} target='_blank' rel='noopener noreferrer'>
      <button className="btn w-14 h-14 bg-gray-300 rounded-full flex justify-center items-center bg-transparent">
        <img src={imageSrc} alt={altText} className="h-8 w-8" />
      </button>
    </a>
    </> 
  );
};

export default Button;