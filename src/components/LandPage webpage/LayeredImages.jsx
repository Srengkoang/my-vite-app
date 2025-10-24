import React from "react";
import { useNavigate } from "react-router-dom"; // import hook
import book1 from "../../assets/book cover.svg";
import book2 from "../../assets/book cover (1).svg";
import book3 from "../../assets/book cover (2).svg";

const LayeredImages = () => {
  const navigate = useNavigate(); // initialize navigate

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#C0FFB3] to-[#FFFDEE] grid md:grid-cols-[1fr_450px] items-center p-8 md:p-16 overflow-hidden">
      
      {/* Text Section */}
      <div className="md:pl-[5vw] text-[#1a4d0f] text-center md:text-left">
        <h1 className="text-5xl font-extrabold leading-[1.1]">
          Discover Your New <span className="text-[#4CAF50]">Favorite</span> Stories!
        </h1>
        <p className="text-lg max-w-[400px] mt-6 leading-7 mx-auto md:mx-0">
          Read and explore our vast catalog of works! Find literary works that interest you! Or start writing your own!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <button
            onClick={() => navigate("/Browse")} // navigate to browse page
            className="bg-[#1a4d0f] text-[#FFD7DF] font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#2e7a1e] hover:-translate-y-0.5 transition-transform duration-200"
          >
            Browse
          </button>
        </div>
      </div>

      {/* Image Stack */}
      <div className="relative flex items-center justify-center md:h-[450px] h-[350px] mt-10 md:mt-0">
        <div className="absolute top-[40%] md:right-[220px] w-[180px] h-[220px] rounded-[15px] shadow-lg overflow-hidden">
          <img src={book1} alt="First" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-[55%] md:right-[120px] w-[180px] h-[220px] rounded-[15px] shadow-lg overflow-hidden">
          <img src={book2} alt="Second" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-[70%] md:right-[20px] w-[180px] h-[220px] rounded-[15px] shadow-lg overflow-hidden">
          <img src={book3} alt="Third" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default LayeredImages;
