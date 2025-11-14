import React from "react";
import { useNavigate } from "react-router-dom";
import book0 from "../../assets/book cover.svg";
import book1 from "../../assets/book cover (1).svg";
import book2 from "../../assets/book cover (2).svg";

function Trending() {
  const navigate = useNavigate();
  const stories = [
    { id: 0, title: "Story 1", book: "Book A", description: "11 November", cover:book0 },
    { id: 1, title: "Story 2", book: "Book B", description: "15 November", cover:book1 },
    { id: 2, title: "Story 3", book: "Book C", description: "Adam the killer", cover:book1 },
    { id: 3, title: "Story 4", book: "Book E", description: "Dear Oppa", cover:book2 },
  ];

  const handleCardClick = (story) => {
    navigate("/Book-Detail", { state: { bookId: story.id } });
  };

  return (
    <section className="relative z-50 py-16 px-8 bg-[#FFFDEE] text-left text-black">
      <h2 className="font-mono text-5xl mb-8">
        See <span className="text-[#00A819]">Trending</span> Stories
      </h2> 

      <div className="flex justify-center flex-wrap gap-8">
        {stories.map((story) => (
          <div
            key={story.id}
            onClick={() => handleCardClick(story)}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* Card */}
            <div className="bg-[#CEF17B] p-4 rounded-2xl shadow-md w-44 h-60 flex flex-col justify-start items-center transition-transform duration-300 hover:-translate-y-2">  
              <img
               src={story.cover}
               alt={`${story.title} cover`}
               className="w-full h-70 object-cover rounded-xl mb-2"
            />
              <h3 className="text-xl font-semibold mb-1">{story.title}</h3>
              <p className="font-medium">{story.book}</p>
            </div>
            {/* Description */}
            <p className="text-sm text-gray-700 mt-2 text-center">{story.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;
