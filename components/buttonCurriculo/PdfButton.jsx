import React from 'react';


const PdfButton = () => {
  const openPdfInNewWindow = () => {
    window.open('./assets/Currículo Vinicius Ferreira de Araujo.pdf', '_blank'); 
  };

  return (
    <button
      onClick={openPdfInNewWindow}
      className={`hover:scale-110 ease-in duration-300 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 w-max`}
    >
      Download CV
    </button>
  );
};

export default PdfButton;
