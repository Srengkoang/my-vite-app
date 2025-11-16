import React from "react";
import { useNavigate } from "react-router-dom";
import book0 from "../../assets/book cover.svg";
import book1 from "../../assets/book cover (1).svg";
import book2 from "../../assets/book cover (2).svg";

const books = [
  { id: 0, title: "The Inventor's Paradox", author: "Book Author", date: "1/1/2025", cover: book0 },
  { id: 1, title: "Jane's Last Stand", author: "Jane Doe", date: "3/15/2024", cover: book1 },
  { id: 2, title: "The Martian Colony", author: "Fictional Writer", date: "7/22/2025", cover: book2 },
  { id: 3, title: "The Cosmic Drift", author: "Zoe Chen", date: "9/10/2024", cover:book2 },
  { id: 4, title: "Quiet Village Murders", author: "A. P. Christie", date: "5/20/2023", cover:book2 },
  { id: 5, title: "Digital Utopia", author: "K. R. Neo", date: "11/01/2025", cover:book1 },
  { id: 6, title: "Alice's Bookstore Love", author: "Alice Smith", date: "10/01/2023", cover:book0 },
  { id: 7, title: "The Emerald Key", author: "Book Author", date: "1/1/2025", cover:book0 },
];

const trendingBooks = books.slice(0, 4); // First 4 trending

export default function TotalBooks({ onNavigate }) {
  const navigate = useNavigate();

  const handleCardClick = (book) => {
    navigate("/Book-Detail", { state: { bookId: book.id } });
  };

  const goBack = () => {
    if (onNavigate) onNavigate("Overview");
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-y-auto flex flex-col items-center p-10">

      {/* Back Button */}
      <button
        onClick={goBack}
        className="mb-6 self-start px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
      >
        ← Back to Overview
      </button>

      {/* Page Title */}
      <h1 className="text-black text-5xl font-semibold font-['Geist_Mono'] mb-10 text-center">
        Total Books : <span className="text-[#1A5632]">{books.length}</span>
      </h1>

      {/* Trending Section */}
      <section className="w-full max-w-7xl mb-16">
        <h2 className="text-4xl font-bold mb-6 text-left font-mono text-black">
          Trending <span className="text-[#00A819]">Now</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {trendingBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => handleCardClick(book)}
              className="flex flex-col items-center cursor-pointer bg-[#CEF17B] rounded-2xl shadow-md w-48 p-4 transition-transform duration-300 hover:-translate-y-2"
            >
              {book.cover && (
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-60 object-cover rounded-xl mb-2"
                />
              )}
              <h3 className="text-xl font-semibold text-black">{book.title}</h3>
              <p className="font-medium">{book.author}</p>
              <p className="text-sm text-gray-700">{book.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* All Books Section */}
      <section className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold mb-6 text-left font-mono text-black">
          All <span className="text-[#00A819]">Books</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              onClick={() => handleCardClick(book)}
              className="flex flex-col items-center cursor-pointer bg-[#CEF17B] rounded-2xl shadow-md w-48 p-4 transition-transform duration-300 hover:-translate-y-2"
            >
              {book.cover && (
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-60 object-cover rounded-xl mb-2"
                />
              )}
              <h3 className="text-xl font-semibold text-black">{book.title}</h3>
              <p className="font-medium">{book.author}</p>
              <p className="text-sm text-gray-700">{book.date}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
