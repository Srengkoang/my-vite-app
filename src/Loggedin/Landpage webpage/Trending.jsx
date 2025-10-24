import React from "react";

function Trending() {
  const stories = [
    { title: "Story 1", book: "Book A", description: "11 November" },
    { title: "Story 2", book: "Book B", description: "15 November"},
    { title: "Story 3", book: "Book C", description: "Adam the killer" },
    { title: "Story 4", book: "Book D", description: "You Belong to me" },
    { title: "Story 5", book: "Book E", description: "Dear Oppa" },
  ];

  return (
    
    <section className="relative z-50 py-16 px-8 bg-[#FFFDEE] text-left text-black dark:text-black">
      <h2 className="font-mono text-5xl mb-8">
       See <span className="text-[#00A819]">Trending</span> Stories
      </h2> 

    <div className="flex justify-center flex-wrap gap-8">
  {stories.map((story, index) => (
    <div key={index} className="flex flex-col items-center">
      {/* Rectangular Card */}
      <div className="bg-[#CEF17B] p-8 rounded-2xl shadow-md w-48 h-80 flex flex-col justify-center transition-transform duration-300 hover:-translate-y-2">
        <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
        <p className="font-medium">{story.book}</p>
      </div>
      {/* Description outside the card */}
      <p className="text-sm text-gray-700 mt-4 text-center">{story.description}</p>
    </div>
  ))}
</div>



    </section>
  );
}

export default Trending;