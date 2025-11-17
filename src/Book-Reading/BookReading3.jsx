import React from "react";
import { useNavigate } from "react-router-dom";

const BookReading3 = () => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/Book-Reading2");
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
    <div className="w-full min-h-screen bg-[#1A5632] flex justify-center py-10 border-t-[6px] border-b-[6px] relative">

      {/* Card */}
      <div className="w-[1000px] h-[1370px] bg-white relative shadow-xl overflow-hidden rounded-bl-[30%]">

        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-red-100 rounded-bl-full absolute" />
          <div className="w-56 h-28 bg-green-900 absolute top-0 left-0 rounded-br-[50px]" />
          <div className="w-16 h-12 bg-green-900 absolute top-0 left-[228px]" />
          <div className="w-16 h-12 bg-green-900 absolute top-[114px] left-0" />
          <div className="w-40 h-28 bg-red-100 absolute top-[114px] left-0" />
          <div className="w-40 h-28 bg-red-100 absolute top-0 left-[228px]" />
        </div>

        {/* Header */}
        <div className="absolute top-[37px] left-[52px] flex items-center justify-center w-32 h-10 border border-red-100 rounded-[30px]">
          <span className="text-red-100 text-2xl font-normal font-['Outfit']">Reading</span>
        </div>

        {/* Top Info Section */}
        <div className="absolute w-full top-0 h-80">
          <div className="absolute left-1/2 -translate-x-1/2 top-[95px] text-center">
            <h1 className="text-black text-3xl font-semibold font-['Geist_Mono']">
              Chapter 3
            </h1>
            <p className="text-black text-3xl font-normal font-['Geist_Mono']">
              Amongus Willy Nilly
            </p>
          </div>

          <p className="absolute left-1/2 -translate-x-1/2 top-[179px] text-black text-base font-normal font-['Outfit']">
            By: Leonard C.Spani
          </p>

          {/* Back to Book */}
          <button
            onClick={handleBackToBook}
            className="absolute left-[327px] top-[274px] text-black text-base font-['Outfit'] cursor-pointer hover:underline"
          >
            Back to book
          </button>

          {/* Like */}
          <button
            onClick={handleLike}
            className="absolute left-[581px] top-[274px] text-black text-base font-['Outfit'] cursor-pointer hover:underline"
          >
            Like button
          </button>
        </div>

        {/* Main Text Area */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[390px] w-[500px] h-[859px] overflow-y-auto text-black text-base font-['Outfit'] pr-4">
          In the heart of Evergreen Hollow, the little streets whispered secrets of the past as the morning fog slowly lifted. 
          Sunlight filtered through the tall trees, casting gentle patterns on cobblestone paths that had felt the steps of countless wanderers. 
          The young writer wandered again, notebook in hand, collecting the rhythm of daily life: the laughter of children chasing butterflies, 
          the smell of fresh bread wafting from the bakery, and the quiet hum of the old fountain in the square.

          As she moved through the town, she noticed the subtle magic in ordinary moments—a cat curling in a sunbeam, 
          a soft wind turning the pages of her notebook accidentally, and the way neighbors greeted each other with familiar smiles. 
          Every encounter, every sound, seemed to carry a story waiting to be remembered. 

          The young writer paused on a small wooden bridge overlooking the stream. She could hear the water tumbling over smooth stones, 
          mingling with the songs of birds hidden in the trees. She wrote furiously, capturing the details that others overlooked, 
          convinced that these tiny fragments would one day weave together into something greater—a tapestry of life itself. 

          In that quiet corner of Evergreen Hollow, she realized that stories were never loud or dramatic; 
          they lived in the unnoticed, the gentle, the everyday. And in those small, delicate moments, she found a world more vibrant 
          than any she had imagined, a place where hearts connected and simple gestures held a power all their own.
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-10 w-full flex justify-center gap-14 text-black text-base font-medium font-['Geist_Mono']">
          <button onClick={handlePrevious} className="cursor-pointer hover:underline">
            Previous
          </button>

          <button onClick={handleBackToTop} className="cursor-pointer hover:underline">
            Back to Top
          </button>

          <button onClick={() => navigate("/Book-Reading4")} className="cursor-pointer hover:underline">
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default BookReading3;
