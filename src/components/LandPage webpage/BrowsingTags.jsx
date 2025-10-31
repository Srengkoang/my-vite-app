import React from "react";

const BrowsingTags = () => {
  const tags = [
    "Romance", "Horror", "Sci-fi", "Fantasy",
    "Mystery", "Thriller", "Supernatural", "Poetry"
  ];

  return (
    <section className="w-full bg-gradient-to-b from-[#FFFDEE] to-[#CDEDBC] py-20 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a4d0f] mb-8">
        Browse through various tags
      </h2>
      <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 max-w-4xl mx-auto">
        {tags.map(tag => (
          <button
            key={tag}
            className="flex items-center justify-center px-6 py-3 bg-[#1a4d0f] text-[#FFD7DF] rounded-xl font-semibold text-lg shadow-md transform transition-all duration-200 hover:bg-[#2e7a1e] hover:-translate-y-1 hover:shadow-lg"

          >
            <div className="w-4 h-4 text-center"></div>
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BrowsingTags;
