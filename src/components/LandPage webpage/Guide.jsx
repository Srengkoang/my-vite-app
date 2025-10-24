import React from "react";
import { useNavigate } from "react-router-dom";

const Guide = () => {
  const navigate = useNavigate();

  const handleHelpClick = () => {
    navigate("/Instruction"); 
  };

  return (
    <section className="bg-[#FFFDEE] py-20 flex justify-start items-center md:justify-center">
      <div className="bg-[#1a4d0f] text-white rounded-[0_90px_90px_0] pt-12 pr-20 pb-12 pl-8 -ml-16 text-center w-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out">
        <h3 className="text-2xl md:text-3xl font-medium mb-4">Need a guide?</h3>
        <p className="text-lg md:text-xl mb-8 leading-relaxed">
          Visit our instructions page to find helpful tips, FAQs, and instructions on how to use the site.
        </p>
        <button
          onClick={handleHelpClick}
          className="px-8 py-3 bg-[#F8C8C8] text-[#1a4d0f] font-bold rounded-xl shadow-md transition-transform duration-200 hover:bg-[#ff9999] hover:-translate-y-0.5"
        >
          Help
        </button>
      </div>
    </section>
  );
};

export default Guide;

