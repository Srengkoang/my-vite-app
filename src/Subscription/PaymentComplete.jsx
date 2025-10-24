import React from "react";
import { useNavigate } from "react-router-dom"; 

const PaymentComplete = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate("/Home"); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#444444] p-4 font-['Roboto_Mono']">
      <div
        className="w-11/12 max-w-sm p-8 rounded-xl text-center border-4 border-gray-900 shadow-[8px_8px_0_0_#444444] bg-[#EDE0D4]"
      >
        <h2 className="text-3xl font-bold mb-8 text-[#6B2D32]">
          Payment Complete!
        </h2>

        <p className="text-lg font-medium mb-12 text-black">
          Your payment was successful!
        </p>

        <button
          onClick={handleConfirm}
          className="bg-white text-black border-2 border-black shadow-[3px_3px_0_0_#000000] px-8 py-2 rounded-lg font-bold text-lg
                     hover:shadow-[1px_1px_0_0_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-100"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default PaymentComplete;





