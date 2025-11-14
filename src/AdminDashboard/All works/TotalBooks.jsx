import React from "react";
import { useNavigate } from "react-router-dom";

const books = [
  { id: 0, title: "The Inventor's Paradox", author: "Book Author", date: "1/1/2025" },
  { id: 1, title: "Jane's Last Stand", author: "Jane Doe", date: "3/15/2024" },
  { id: 2, title: "The Martian Colony", author: "Fictional Writer", date: "7/22/2025" },
  { id: 3, title: "The Cosmic Drift", author: "Zoe Chen", date: "9/10/2024" },
  { id: 4, title: "Quiet Village Murders", author: "A. P. Christie", date: "5/20/2023" },
  { id: 5, title: "Digital Utopia", author: "K. R. Neo", date: "11/01/2025" },
  { id: 6, title: "Alice's Bookstore Love", author: "Alice Smith", date: "10/01/2023" },
  { id: 7, title: "The Emerald Key", author: "Book Author", date: "1/1/2025" },
];

const trendingBooks = books.slice(0, 4); // first 4 as trending

export default function TotalBooks() {
  const navigate = useNavigate();

  const handleCardClick = (book) => {
    navigate("/Book-Detail", { state: { bookId: book.id } });
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-y-auto flex flex-col items-center p-10">
      {/* Page Title */}
      <h1 className="text-black text-5xl font-semibold font-['Geist_Mono'] mb-10 text-center">
        Total Books : <span className="text-[#1A5632]">{books.length}</span>
      </h1>

      {/* Trending Now Section */}
      <section className="w-full max-w-7xl mb-16">
        <h2 className="text-4xl font-bold mb-6 text-left font-mono text-black">
          Trending <span className="text-[#00A819]">Now</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {trendingBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => handleCardClick(book)}
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="bg-[#CEF17B] rounded-2xl w-48 h-60 shadow-md transition-transform duration-300 hover:-translate-y-2"></div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-black">{book.title}</h3>
                <p className="font-medium">{book.author}</p>
                <p className="text-sm text-gray-700">{book.date}</p>
              </div>
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
              className="flex flex-col items-center cursor-pointer"
            >
              <div className="bg-[#CEF17B] rounded-2xl w-48 h-60 shadow-md transition-transform duration-300 hover:-translate-y-2"></div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-black">{book.title}</h3>
                <p className="font-medium">{book.author}</p>
                <p className="text-sm text-gray-700">{book.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
