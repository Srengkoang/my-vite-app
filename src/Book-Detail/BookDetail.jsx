import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { stories } from "../Browsing & Detailing/Browse.jsx";
import Book0 from "../assets/book cover.svg"; // import your image


const BookDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Safe destructuring
  const bookId = location.state?.bookId;

  if (bookId === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-xl">
          No book selected. Please go back to browse stories.
        </p>
        <button
          className="ml-4 px-4 py-2 bg-green-600 text-white rounded"
          onClick={() => navigate("/Browse")}
        >
          Back to Browse
        </button>
      </div>
    );
  }

  const book = stories.find((b) => b.id === bookId);

  if (!book) return <div>Book not found</div>;

  return (
    <div className="min-h-screen bg-[#1A5632] py-12 px-4 flex flex-col items-center">
      {/* === MAIN CARD (Book Info + Description) === */}
      <div className="w-[1000px] h-[600px] relative overflow-hidden bg-[#1A5632] flex items-center justify-center rounded-3xl shadow-xl">
        {/* Background Shapes */}
        <div className="absolute w-full h-full left-0 top-0 bg-white rounded-tr-full rounded-br-full rounded-bl-full" />
        <div className="absolute w-56 h-28 left-0 top-0 bg-green-900 rounded-br-[50px]" />
        <div className="absolute w-20 h-12 left-[228px] top-0 bg-green-900" />
        <div className="absolute w-12 h-12 left-0 top-[114px] bg-green-900" />
        <div className="absolute w-40 h-28 left-0 top-[114px] bg-white" />
        <div className="absolute w-40 h-28 left-[228px] top-0 bg-white" />

        {/* General Info Box */}
        <div className="absolute left-[31px] top-[37px]">
          <div className="w-40 h-10 relative rounded-[30px]">
            <div className="w-40 h-10 left-0 top-0 absolute rounded-[30px] border border-red-100" />
            <div className="left-[17px] top-[5px] absolute text-center justify-center text-red-100 text-2xl font-normal font-['Outfit']">
              General Info
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="absolute w-[1000px] h-64 left-1 top-[350px] bg-red-100 rounded-bl-[150px]" />
        <div className="absolute left-[380px] top-[390px] text-center text-green-900 text-4xl font-semibold font-['Geist_Mono']">
          Description
        </div>
        <div className="absolute left-[250px] top-[441px] w-[500px] text-green-900 text-base font-normal font-['Outfit']">
          {book.description}
        </div>

        {/* Book Image */}
        <img
          className="absolute w-70 h-90 left-[744px] top-[3px] rounded-tr-full "
          src={book.image || Book0}
          alt="Book cover"
        />

        {/* Book Info */}
        <div className="absolute w-[750px] h-60 left-0 top-[114px] overflow-hidden rounded-none">
          <div className="absolute left-[50px] top-[34px] text-black text-xs font-normal font-['Geist_Mono']">
            {book.date}
          </div>
          <div className="absolute left-[50px] top-[50px] text-black text-3xl font-semibold font-['Geist_Mono']">
            {book.title}
          </div>
          <div className="absolute left-[50px] top-[92px] text-black text-xs font-normal font-['Outfit']">
            By: {book.author}
          </div>

          {/* Stats */}
          <div className="absolute left-[496px] top-[34px] text-black text-base font-normal font-['Outfit']">
            Chapters
          </div>
          <div className="absolute left-[524px] top-[67px] text-black text-base font-normal font-['Outfit']">
            {book.chapters}
          </div>
          <div className="absolute left-[592px] top-[34px] text-black text-base font-normal font-['Outfit']">
            Views
          </div>
          <div className="absolute left-[599px] top-[67px] text-black text-base font-normal font-['Outfit']">
            {book.views}
          </div>
          <div className="absolute left-[664px] top-[34px] text-black text-base font-normal font-['Outfit']">
            Likes
          </div>
          <div className="absolute left-[677px] top-[67px] text-black text-base font-normal font-['Outfit']">
            {book.likes || 0}
          </div>

          {/* Start Reading Button */}
          <div
            className="absolute left-[300px] top-[185px] text-black text-base font-semibold font-['Geist_Mono'] cursor-pointer"
            onClick={() => navigate("/Book-Reading", { state: { bookId: book.id, chapter: 1 } })}
          >
            Start Reading
          </div>
        </div>
      </div>

      {/* === CHAPTERS SECTION === */}
      <div className="relative w-[1000px] h-[563px] mt-10 overflow-hidden rounded-10xl shadow-lg">
        <div className="absolute w-full h-full bg-red-100 rounded-br-[150px]" />
        <div className="absolute w-56 h-28 bg-green-900 rounded-br-[50px]" />
        <div className="absolute w-16 h-12 left-[228px] top-0 bg-green-900" />
        <div className="absolute w-16 h-12 top-[114px]" />
        <div className="absolute w-40 h-28 top-[114px] bg-red-100 rounded-tl-[50px]" />
        <div className="absolute w-40 h-28 left-[228px] top-0 bg-red-100 " />

        {/* Chapter Label */}
        <div className="absolute w-32 h-10 left-[52px] top-[37px] rounded-[30px] border border-green-100 flex items-center justify-center">
          <span className="text-red-100 text-2xl font-normal font-['Outfit']">Chapters</span>
        </div>

        {/* Chapter List */}
        <div className="absolute left-[75px] top-[168px] w-[850px] space-y-2">
          {Array.from({ length: book.chapters }, (_, i) => (
            <div
              key={i}
              className="flex justify-between text-green-900 text-2xl font-normal font-['Outfit'] cursor-pointer"
              onClick={() => navigate("/Book-Reading", { state: { bookId: book.id, chapter: i + 1 } })}
            >
              <span>Chapter {i + 1}</span>
              <span className="text-right">{book.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;



