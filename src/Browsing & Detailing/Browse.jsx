import React from "react";
import { useNavigate } from "react-router-dom";

const stories = [
  {
    id: 1,
    title: "Galactic Drift",
    author: "Book Author",
    date: "1/1/2025",
    description:
      "A thrilling adventure across distant galaxies, following a rogue pilot and a scientist trying to outrun the totalitarian galactic empire. They must find an ancient artifact before it falls into the wrong hands."
  },
  {
    id: 2,
    title: "The Quiet City",
    author: "Jane Doe",
    date: "1/5/2025",
    description:
      "A mysterious story of a city where everyone suddenly stops talking and the secrets behind it unravel."
  },
  {
    id: 3,
    title: "Shadows of the Past",
    author: "John Smith",
    date: "1/10/2025",
    description: "An investigator uncovers hidden truths about their family's dark history."
  },
  {
    id: 4,
    title: "Echoes of the Void",
    author: "Book Author",
    date: "1/15/2025",
    description: "A space odyssey exploring uncharted planets and ancient alien civilizations."
  },
  {
    id: 5,
    title: "The Silent Grove",
    author: "A. N. Author",
    date: "1/20/2025",
    description: "A tale of a mystical forest that hides secrets older than time itself."
  },
  {
    id: 6,
    title: "Iron & Fire",
    author: "Book Author",
    date: "1/25/2025",
    description: "Warriors and kingdoms clash in a brutal battle for survival and honor."
  }
];

const BrowseStories = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#E8FDE8] font-['Roboto_Mono']">
      
      {/* Sidebar Filters */}
      <aside className="w-full lg:w-1/4 px-0 py-6 lg:px-8 lg:py-10 lg:p-8">
        <div className="p-6 lg:sticky lg:top-8 rounded-tr-3xl rounded-bl-1xl bg-[#BBFFAA] shadow-[4px_4px_0_0_#000] lg:ml-1">
          <h1 className="text-3xl font-bold mb-4 text-center text-black">Browse Stories</h1>
          <h2 className="text-xl font-bold mb-4 border-b border-black pb-2 text-center text-black">Filters</h2>

          {/* Author Filter */}
          <div className="mb-6">
            <label className="block mb-2 font-bold text-black" htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              placeholder="Type author name..."
              className="w-full h-8 border border-black rounded px-2 shadow-[1px_1px_0_0_#000] text-black"
            />
          </div>

          {/* Status Filter */}
          <div className="mb-6">
            <p className="font-bold mb-2 text-black">Status:</p>
            <div className="space-y-1">
              <label className="flex items-center space-x-2 text-black">
                <input type="radio" name="status" value="completed" className="form-radio text-black" />
                <span>Completed</span>
              </label>
              <label className="flex items-center space-x-2 text-black">
                <input type="radio" name="status" value="ongoing" className="form-radio text-black" />
                <span>Ongoing</span>
              </label>
              <label className="flex items-center space-x-2 text-black">
                <input type="radio" name="status" value="all" className="form-radio text-black" defaultChecked />
                <span>All</span>
              </label>
            </div>
          </div>

          {/* Tags Filter */}
          <div className="mb-8 text-black">
            <label className="block mb-2 font-bold" htmlFor="tags">Tags:</label>
            <input
              type="text"
              id="tags"
              placeholder="Action, Fantasy..."
              className="w-full h-8 border border-black rounded px-2 shadow-[1px_1px_0_0_#000]"
            />
          </div>

          {/* Likes Slider */}
          <div className="mb-4 text-black">
            <p className="font-bold mb-3 text-black">Likes more than:</p>
            <div className="flex justify-between text-sm mb-1 text-black">
              <span>0</span>
              <span>250</span>
              <span>500</span>
              <span>1K+</span>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              defaultValue="500"
              className="w-full h-1 bg-black cursor-pointer"
            />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-4 lg:p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-[#FEFEF0] border border-black rounded-lg shadow-[2px_2px_0_0_#000] overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate(`/story/${story.id}`)}
          >
            {/* Card Header */}
            <div className="p-3 flex justify-between items-start bg-[#B3E896]">
              <h3 className="text-lg font-bold truncate">{story.title}</h3>
              <span className="text-xs font-medium whitespace-nowrap">{story.date}</span>
            </div>

            {/* Card Body */}
            <div className="p-3 flex flex-col gap-1 text-sm">
              <p className="font-semibold text-black">{story.author}</p>
              <p className="text-xs font-semibold">Ongoing</p>
              <p className="text-xs line-clamp-3">{story.description}</p>
              <p className="text-xs font-semibold mt-1">Chapters: 7 | Views: 1K</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default BrowseStories;
