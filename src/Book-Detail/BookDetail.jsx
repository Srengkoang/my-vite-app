// BookDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function BookDetail() {
  const { id } = useParams();
  const book = stories.find((b) => b.id === parseInt(id, 10));

  if (!book) {
    return <p className="text-center mt-20 text-red-500">Book not found!</p>;
  }

  return (
    <div className="w-full min-h-screen bg-green-900 text-green-900 p-20">
      {/* Book Info */}
      <div className="bg-white rounded-xl p-8 mb-10">
        <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
        <p className="text-xl mb-1">Author: {book.author}</p>
        <p className="mb-1">Status: {book.status}</p>
        <p className="mb-1">Chapters: {book.chapters}</p>
        <p className="mb-1">Views: {book.views.toLocaleString()}</p>
        <p className="mt-2">{book.description}</p>
      </div>

      {/* Chapters */}
      <div className="bg-red-100 rounded-xl p-8">
        <h2 className="text-2xl mb-4">Chapters</h2>
        {Array.from({ length: book.chapters }).map((_, idx) => (
          <div key={idx} className="flex justify-between mb-2">
            <span>Chapter {idx + 1}: Sample Title</span>
            <span>Oct 10, 2025</span>
          </div>
        ))}
      </div>
    </div>
  );
}
