import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { stories } from "../Browsing & Detailing/Browse.jsx";

const BookReading = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { bookId, chapter } = location.state || { bookId: 0, chapter: 1 };
  const book = stories.find((b) => b.id === bookId);

  if (!book) {
    return (
      <div className="text-center text-white mt-10 text-xl">
        Book not found 😢
      </div>
    );
  }

  // Navigation
  const handlePrevious = () => {
    if (chapter > 1) {
      navigate("/Book-Reading", { state: { bookId, chapter: chapter - 1 } });
    }
  };

  const handleNext = () => {
    if (chapter < book.chapters) {
      navigate("/Book-Reading", { state: { bookId, chapter: chapter + 1 } });
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBook = () => {
    navigate("/Book-Detail", { state: { bookId } });
  };

  const handleLike = () => {
    console.log("❤️ You liked this chapter!");
  };

  // Fallback reading text if chapterContent missing
  const fallbackText = `
    In a quiet corner of the world, where the sky always seemed a little softer
    and the wind carried stories from faraway lands, there was a small town
    known as Evergreen Hollow. Visitors said the town wasn’t special, yet the
    moment they stepped inside its borders, something magical wrapped around
    them like a warm blanket.

    Lanterns glowed softly along stone paths. Morning sunlight slipped through
    tall trees, painting rooftops gold. The people were gentle—strange in the
    best way possible.

    A young writer wandered the streets each day, notebook in hand, collecting
    laughter, raindrops, falling leaves, and fragments of conversations. She
    believed life wasn’t made of big moments, but thousands of tiny ones that
    stitched themselves into something beautiful.

    And in Evergreen Hollow, she discovered a truth: stories don’t need to be
    loud to be powerful. Sometimes, the quietest words echo the longest.
  `;

  const chapterText = book.chapterContent
    ? book.chapterContent[chapter - 1]
    : fallbackText;

  return (
    <div className="w-screen min-h-screen bg-[#1A5632] flex justify-center py-10 relative">
      <div className="w-[1000px] h-[1370px] relative overflow-hidden shadow-lg">

        {/* Decorative Background Layers */}
        <div className="w-[1000px] h-[1370px] absolute bg-red-100 rounded-bl-full" />
        <div className="w-56 h-28 absolute bg-green-900 rounded-br-[50px]" />
        <div className="w-16 h-12 left-[228px] top-0 absolute bg-green-900" />
        <div className="w-16 h-12 top-[114px] absolute bg-green-900" />
        <div className="w-40 h-28 top-[114px] absolute bg-red-100" />
        <div className="w-40 h-28 left-[228px] top-0 absolute bg-red-100" />

        {/* Header */}
        <div className="w-32 h-10 left-[52px] top-[37px] absolute rounded-[30px] border border-red-100" />
        <div className="left-[70px] top-[42px] absolute text-red-100 text-2xl font-normal">
          Reading
        </div>

        {/* Reading container background */}
        <div className="w-[1000px] h-[1030px] left-0 top-[340px] absolute bg-white rounded-bl-[30%]" />

        {/* Book metadata area */}
        <div className="w-[1000px] h-80 left-0 top-0 absolute">
          <div className="left-[327px] top-[95px] absolute text-center">
            <span className="text-black text-3xl font-semibold">
              Chapter {chapter}
            </span>
            <br />
            <span className="text-black text-3xl">{book.title}</span>
          </div>

          <div className="left-[462px] top-[179px] absolute text-black text-base">
            By: {book.author}
          </div>

          <div
            className="left-[327px] top-[274px] absolute text-black text-base cursor-pointer"
            onClick={handleBackToBook}
          >
            Back to book
          </div>

          <div
            className="left-[581px] top-[274px] absolute text-black text-base cursor-pointer"
            onClick={handleLike}
          >
            Like ❤️
          </div>
        </div>

        {/* Reading text */}
        <div className="w-[500px] h-[859px] left-[250px] top-[390px] absolute text-black text-base overflow-y-auto whitespace-pre-line leading-relaxed">
          {chapterText}
        </div>

        {/* Navigation Buttons */}
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
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default BookReading;


