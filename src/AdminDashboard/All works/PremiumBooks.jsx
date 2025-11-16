import React, { useState, useEffect } from "react";

export const stories = [
  { id: 0, title: "The Inventor's Paradox", author: "Book Author", date: "1/1/2025", status: "Ongoing", chapters: 6, views: 1, likes: 50, description: "A thrilling introductory chapter has been posted. Read now and embark on an adventure!" },
  { id: 1, title: "Jane's Last Stand", author: "Jane Doe", date: "3/15/2024", status: "Completed", chapters: 6, views: 5021, likes: 800, description: "A mystery set in the deep woods where shadows hide secrets." },
  { id: 2, title: "The Martian Colony", author: "Fictional Writer", date: "7/22/2025", status: "Ongoing", chapters: 6, views: 45, likes: 120, description: "An epic sci-fi journey across distant galaxies." },
  { id: 3, title: "The Cosmic Drift", author: "Zoe Chen", date: "9/10/2024", status: "Ongoing", chapters: 6, views: 320, likes: 500, description: "A lone pilot discovers a mysterious signal leading to a forgotten sector of space. High stakes and ancient ruins await." },
  { id: 4, title: "Quiet Village Murders", author: "A. P. Christie", date: "5/20/2023", status: "Completed", chapters: 6, views: 7890, likes: 950, description: "When a wealthy man disappears, the local police are stumped. A retired detective steps in to solve the seemingly impossible crime." },
  { id: 5, title: "Digital Utopia", author: "K. R. Neo", date: "11/01/2025", status: "Ongoing", chapters: 6, views: 12, likes: 300, description: "In a world where life is lived completely online, a glitch threatens to erase reality itself." },
  { id: 6, title: "Alice's Bookstore Love", author: "Alice Smith", date: "10/01/2023", status: "Completed", chapters: 6, views: 800, likes: 420, description: "A touching romance story about two people who meet during a chance encounter in a quiet bookstore. Their lives are complicated, but fate keeps bringing them back together, chapter after chapter." },
  { id: 7, title: "The Emerald Key", author: "Book Author", date: "1/1/2025", status: "Ongoing", chapters: 6, views: 1, likes: 90, description: "Latest update from the author! This is the start of something big. Prepare for excitement." },
];

const PremiumBooks = ({ onNavigate }) => {
  const [premiumStories, setPremiumStories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // pick 3 random stories as premium
    const shuffled = [...stories].sort(() => 0.5 - Math.random());
    setPremiumStories(shuffled.slice(0, 3));
  }, []);

  const handleClickStory = () => {
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const goBack = () => {
    if (onNavigate) onNavigate("Overview");
  };

  return (
    <div className="bg-[#F9FFF5] font-mono min-h-screen text-[#1E1E1E] pt-10 flex flex-col items-center p-8">

      {/* Back Button */}
      <button
        onClick={goBack}
        className="mb-6 self-start px-5 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
      >
        ← Back to Overview
      </button>

      {/* Page Title */}
      <h1 className="text-black text-5xl font-semibold mb-10 text-center">
        Premium Books
      </h1>

      {/* Premium Books Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {premiumStories.map((story) => (
          <div
            key={story.id}
            className="grid grid-cols-[30%_70%] border border-yellow-400 rounded-2xl shadow hover:shadow-none transition cursor-pointer"
            onClick={handleClickStory}
          >
            <div className="bg-[#CEF17B] rounded-l-2xl pt-8 pr-0 pb-0 pl-8"></div>
            <div className="p-4 text-[#1E1E1E]">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-[1.4rem] leading-[1.1]">{story.title}</h3>
                <span className="text-xs text-gray-500">{story.date}</span>
              </div>
              <p className="text-sm italic mb-2">{story.author}</p>
              <p className="font-bold text-sm mb-1">{story.status}</p>
              <p className="text-sm text-gray-700 line-clamp-3">{story.description}</p>
              <div className="flex gap-4 text-xs text-gray-500 mt-2">
                <span>Chapters: {story.chapters}</span>
                <span>Views: {story.views}</span>
                <span>Likes: {story.likes}</span>
                <span className="text-yellow-500 font-bold">Premium</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-4">Premium Content</h2>
            <p className="mb-6">Subscribe before reading the full article!</p>
            <button
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default PremiumBooks;
