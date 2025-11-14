import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { stories } from "../Browsing & Detailing/Browse.jsx";

const BookReading = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { bookId, chapter } = location.state || { bookId: 0, chapter: 1 };
  const book = stories.find((b) => b.id === bookId);

  if (!book) return <div className="text-center text-white mt-10">Book not found 😢</div>;

  const handlePrevious = () => {
    if (chapter > 1) {
      navigate("/Book-Reading", { state: { bookId, chapter: chapter - 1 } });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBook = () => {
    navigate("/Book-Detail", { state: { bookId } });
  };

  const handleNext = () => {
    if (chapter < book.chapters) {
      navigate("/Book-Reading", { state: { bookId, chapter: chapter + 1 } });
    }
  };

  const handleLike = () => {
    console.log("Like button clicked 💗");
  };

  return (
    <div className="w-screen relative bg-[#1A5632] border-t-[6px] border-b-[6px] overflow-hidden flex justify-center py-10">
      {/* Main reading card */}
      <div className="w-[1000px] h-[1370px] relative overflow-hidden shadow-lg">
        {/* Background layers */}
        <div className="w-[1000px] h-[1370px] absolute bg-red-100 rounded-bl-full" />
        <div className="w-56 h-28 absolute bg-green-900 rounded-br-[50px]" />
        <div className="w-16 h-12 left-[228px] top-0 absolute bg-green-900" />
        <div className="w-16 h-12 top-[114px] absolute bg-green-900" />
        <div className="w-40 h-28 top-[114px] absolute bg-red-100 " />
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
            <span className="text-black text-3xl font-semibold">
              Chapter {chapter}
              <br />
            </span>
            <span className="text-black text-3xl font-normal">
              {book.title}
            </span>
          </div>

          <div className="left-[462px] top-[179px] absolute text-center justify-start text-black text-base font-normal">
            By: {book.author}
          </div>

          <div
            className="left-[327px] top-[274px] absolute justify-start text-black text-base cursor-pointer"
            onClick={handleBackToBook}
          >
            Back to book
          </div>

          <div
            className="left-[581px] top-[274px] absolute justify-start text-black text-base cursor-pointer"
            onClick={handleLike}
          >
            Like button
          </div>
        </div>

        {/* Text content */}
        <div className="w-[500px] h-[859px] left-[250px] top-[390px] absolute text-black text-base overflow-y-auto">
          {book.chapterContent
            ? book.chapterContent[chapter - 1]
            : "No content yet. Coming soon..."}
        </div>

        {/* Navigation buttons */}
        <div
          className="left-[339px] top-[1299px] absolute text-black text-base font-medium cursor-pointer"
          onClick={handlePrevious}
        >
          Previous
        </div>
        <div
          className="left-[466px] top-[1299px] absolute text-black text-base font-medium cursor-pointer"
          onClick={handleBackToTop}
        >
          Back to Top
        </div>
        <div
          className="left-[622px] top-[1299px] absolute text-black text-base font-medium cursor-pointer"
          onClick={() => navigate("/Book-Reading2")}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default BookReading;


