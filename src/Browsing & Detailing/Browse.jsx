import React from "react";
import { useNavigate } from "react-router-dom";

const stories = [
  {id:0, title: "The Inventor's Paradox", author: "Book Author", date: "1/1/2025", status: "Ongoing", chapters: 1, views: 1, description: "A thrilling introductory chapter has been posted. Read now and embark on an adventure!" },
  {id:1, title: "Jane's Last Stand", author: "Jane Doe", date: "3/15/2024", status: "Completed", chapters: 12, views: 5021, description: "A mystery set in the deep woods where shadows hide secrets." },
  {id:2, title: "The Martian Colony", author: "Fictional Writer", date: "7/22/2025", status: "Ongoing", chapters: 3, views: 45, description: "An epic sci-fi journey across distant galaxies." },
  {id:3, title: "The Cosmic Drift", author: "Zoe Chen", date: "9/10/2024", status: "Ongoing", chapters: 8, views: 320, description: "A lone pilot discovers a mysterious signal leading to a forgotten sector of space. High stakes and ancient ruins await." },
  {id:4, title: "Quiet Village Murders", author: "A. P. Christie", date: "5/20/2023", status: "Completed", chapters: 15, views: 7890, description: "When a wealthy man disappears, the local police are stumped. A retired detective steps in to solve the seemingly impossible crime." },
  {id:5, title: "Digital Utopia", author: "K. R. Neo", date: "11/01/2025", status: "Ongoing", chapters: 2, views: 12, description: "In a world where life is lived completely online, a glitch threatens to erase reality itself." },
  {id:6, title: "Alice's Bookstore Love", author: "Alice Smith", date: "10/01/2023", status: "Completed", chapters: 25, views: 800, description: "A touching romance story about two people who meet during a chance encounter in a quiet bookstore. Their lives are complicated, but fate keeps bringing them back together, chapter after chapter." },
  { title: "The Emerald Key", author: "Book Author", date: "1/1/2025", status: "Ongoing", chapters: 1, views: 1, description: "Latest update from the author! This is the start of something big. Prepare for excitement." },
];

const BrowseStories = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F9FFF5] font-mono min-h-screen text-[#1E1E1E] pt-8 md:pt-10">
      {/* Top Line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#38C7D8] z-50"></div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="absolute left-0 h-full w-64 lg:px-0 lg:py-60 ">
          <div className="absolute left-0 p-5 lg:sticky lg:top-8 bg-[#BBFFAA] rounded-tr-4xl rounded-br-4xl ml-0">
            <h2 className="text-2xl font-bold mb-4">Browse stories</h2>
            <h3 className="text-xl font-bold border-b border-gray-700 pb-1 mb-4">Filters</h3>

            <label className="block text-sm font-bold mb-1">Author:</label>
            <input type="text" className="w-full border border-[#1E1E1E] rounded-md px-2 py-1 mb-4 bg-[#FFFFFF]" />

            <p className="text-sm font-bold mb-2">Status:</p>
            <div className="space-y-1 mb-4 text-sm">
              <label className="flex items-center gap-2 "><input type="radio" name="status" /> Completed</label>
              <label className="flex items-center gap-2"><input type="radio" name="status" /> Ongoing</label>
              <label className="flex items-center gap-2"><input type="radio" name="status" defaultChecked /> All</label>
            </div>

            <label className="block text-sm font-bold mb-1">Tags:</label>
            <input type="text" className="w-full border border-[#1E1E1E] rounded-md px-2 py-1 mb-4 bg-[#F9F9F9]" />

            <p className="text-sm font-bold mb-2">Likes more than:</p>
            <input type="range" min="0" max="1000" step="250" className="w-full mb-2" />
            <div className="flex justify-between text-xs">
              <span>0</span><span>250</span><span>500</span><span>750</span><span>1000+</span>
            </div>
          </div>
        </aside>

        {/* Story Grid */}
        <main className="flex-grow min-w-0 px-4 md:px-0 lg:ml-75 pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {stories.map((story, index) => (
              <div
                key={index}
                className="grid grid-cols-[30%_70%] border border-[#1E1E1E] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-2xl shadow-[1px_1px_1px_#1E1E1E] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition cursor-pointer"
                onClick={() => navigate(`/story/${index}`)}
              >
                <div className="bg-[#CEF17B] rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-none pt-8 pr-0 pb-0 pl-8"></div>
                <div className="p-4 text-[#1E1E1E]">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[1.4rem] leading-[1.1]">{story.title}</h3>
                    <span className="text-xs text-gray-500 font-mono">{story.date}</span>
                  </div>
                  <p className="text-sm italic mb-2">{story.author}</p>
                  <p className="font-bold text-sm mb-1">{story.status}</p>
                  <p className="text-sm text-gray-700 line-clamp-3">{story.description}</p>
                  <div className="flex gap-4 text-xs text-gray-500 mt-2">
                    <span>Chapters: {story.chapters}</span>
                    <span>Views: {story.views}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BrowseStories;

