import React from "react";
import { useNavigate } from "react-router-dom";

const BookReading2 = () => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/Book-Reading");
  };

   const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBook = () => {
    console.log("Back to book clicked");
  };

  const handleLike = () => {
    console.log("Like button clicked");
  };

  return (
        <div className="w-screen relative bg-[#1A5632] border-t-[6px] border-b-[6px] overflow-hidden flex justify-center py-10">

      {/* Main reading card */}
      <div className="w-[1000px] h-[1370px] relative overflow-hidden shadow-lg">

        {/* Background layers */}
        <div className="w-[1000px] h-[1370px] left-0 top-0 absolute bg-red-100 rounded-bl-full" />
        <div className="w-56 h-28 left-0 top-0 absolute bg-green-900 rounded-br-[50px]" />
        <div className="w-16 h-12 left-[228px] top-0 absolute bg-green-900" />
        <div className="w-16 h-12 left-0 top-[114px] absolute bg-green-900" />
        <div className="w-40 h-28 left-0 top-[114px] absolute bg-red-100 " />
        <div className="w-40 h-28 left-[228px] top-0 absolute bg-red-100" />

        {/* Header label */}
        <div className="w-32 h-10 left-[52px] top-[37px] absolute rounded-[30px] border border-red-100" />
        <div className="left-[70px] top-[42px] absolute text-center justify-center text-red-100 text-2xl font-normal font-['Outfit']">
          Reading
        </div>

        {/* Reading area background */}
        <div className="w-[1000px] h-[1030px] left-0 top-[340px] absolute bg-white rounded-bl-[30%]" />

        {/* Chapter info */}
        <div className="w-[1000px] h-80 left-0 top-0 absolute overflow-hidden">
          <div className="left-[327px] top-[95px] absolute text-center justify-center">
            <span className="text-black text-3xl font-semibold font-['Geist_Mono']">
              Chapter 2<br />
            </span>
            <span className="text-black text-3xl font-normal font-['Geist_Mono']">
              Amongus Electric Boogaloo
            </span>
          </div>

          <div className="left-[462px] top-[179px] absolute text-center justify-start text-black text-base font-normal font-['Outfit']">
            By: Leonard C.Spani
          </div>

          <div
            className="left-[327px] top-[274px] absolute justify-start text-black text-base font-normal font-['Outfit'] cursor-pointer"
            onClick={handleBackToBook}
          >
            Back to book
          </div>

          <div
            className="left-[581px] top-[274px] absolute justify-start text-black text-base font-normal font-['Outfit'] cursor-pointer"
            onClick={handleLike}
          >
            Like button
          </div>
        </div>

        {/* Text content */}
        <div className="w-[500px] h-[859px] left-[250px] top-[390px] absolute text-black text-base font-normal font-['Outfit'] overflow-y-auto">
          WALL OF TEXT INCOMING blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahiaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaa
          aImaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaa.
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaainsaneaaaaaa
        </div>

        {/* Navigation buttons */}
        <div
          className="left-[339px] top-[1299px] absolute text-black text-base font-medium font-['Geist_Mono'] cursor-pointer"
          onClick={handlePrevious}
        >
          Previous
        </div>
        <div
          className="left-[466px] top-[1299px] absolute text-black text-base font-medium font-['Geist_Mono'] cursor-pointer"
          onClick={handleBackToTop}
        >
          Back to Top
        </div>
        <div
          className="left-[622px] top-[1299px] absolute text-black text-base font-medium font-['Geist_Mono'] cursor-pointer"
          onClick={() => navigate("/Book-Reading3")}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default BookReading2;