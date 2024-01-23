import React from 'react';


const PdfButton = () => {
  const openPdfInNewWindow = () => {
    window.open('./assets/Currículo Vinicius Ferreira de Araujo.pdf', '_blank'); 
  };

  return (
    <button
      onClick={openPdfInNewWindow}
      className={`hover:scale-95 ease-in-out duration-100 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 w-max`}
    >
      Currículo
    </button>
  );
};

export default PdfButton;
