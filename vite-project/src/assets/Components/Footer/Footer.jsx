import React from 'react';
import Button from './Buttons-Rodape';

const Footer = () => {
  const images = [
    { src: '/Images/React.png', alt: 'Imagem 1' },
    { src: '/Images/linkedin.png', alt: 'Imagem 2', href: 'https://www.linkedin.com/in/jo%C3%A3o-vitor-carotta-ribeiro-3602ab230/'},
    { src: '/Images/github.png', alt: 'Imagem 3', href: 'https://github.com/JoaoVitorCarottaRibeiro' }
  ];

  return (
    <>
        <div className="bg-black">
            <div className="flex items-center justify-center py-2">
                {images.map((image, index) => (
                <Button key={index} imageSrc={image.src} altText={image.alt} href={image.href} />
                ))}
            </div>
        </div>
    </>
  
  );
};

export default Footer;
