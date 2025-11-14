import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Book0 from "../assets/book cover.svg"; // import your image
import Book1 from "../assets/image-1.svg"; // import your image
import Book2 from "../assets/book cover (2).svg";

export const stories = [
  { id: 0, title: "The Inventor's Paradox", author: "Book Author", date: "1/1/2025", status: "Ongoing", chapters: 6, views: 1, likes: 50, description: "A thrilling introductory chapter has been posted. Read now and embark on an adventure!", cover: Book0 },
  { id: 1, title: "Jane's Last Stand", author: "Jane Doe", date: "3/15/2024", status: "Completed", chapters: 6, views: 5021, likes: 800, description: "A mystery set in the deep woods where shadows hide secrets.", cover: Book1 },
  { id: 2, title: "The Martian Colony", author: "Fictional Writer", date: "7/22/2025", status: "Ongoing", chapters: 6, views: 45, likes: 120, description: "An epic sci-fi journey across distant galaxies.", cover: Book1 },
  { id: 3, title: "The Cosmic Drift", author: "Zoe Chen", date: "9/10/2024", status: "Ongoing", chapters: 6, views: 320, likes: 500, description: "A lone pilot discovers a mysterious signal leading to a forgotten sector of space. High stakes and ancient ruins await.", cover: Book2 },
  { id: 4, title: "Quiet Village Murders", author: "A. P. Christie", date: "5/20/2023", status: "Completed", chapters: 6, views: 7890, likes: 950, description: "When a wealthy man disappears, the local police are stumped. A retired detective steps in to solve the seemingly impossible crime.", cover: Book0 },
  { id: 5, title: "Digital Utopia", author: "K. R. Neo", date: "11/01/2025", status: "Ongoing", chapters: 6, views: 12, likes: 300, description: "In a world where life is lived completely online, a glitch threatens to erase reality itself.", cover: Book2 },
  { id: 6, title: "Alice's Bookstore Love", author: "Alice Smith", date: "10/01/2023", status: "Completed", chapters: 6, views: 800, likes: 420, description: "A touching romance story about two people who meet during a chance encounter in a quiet bookstore. Their lives are complicated, but fate keeps bringing them back together, chapter after chapter.", cover: Book1 },
  { id: 7, title: "The Emerald Key", author: "Book Author", date: "1/1/2025", status: "Ongoing", chapters: 6, views: 1, likes: 90, description: "Latest update from the author! This is the start of something big. Prepare for excitement.", cover: Book0 },
];

const BrowseStories = () => {
  const navigate = useNavigate();

  const [authorFilter, setAuthorFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [minLikes, setMinLikes] = useState(0);

  const [premiumStories, setPremiumStories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const shuffled = [...stories].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3).map(s => s.id);
    setPremiumStories(selected);
  }, []);

  const filteredStories = stories.filter((story) => {
    const matchAuthor = story.author.toLowerCase().includes(authorFilter.toLowerCase());
    const matchStatus = statusFilter === "All" || story.status === statusFilter;
    const matchLikes = story.likes >= minLikes;
    return matchAuthor && matchStatus && matchLikes;
  });

  const handleClickStory = (storyId) => {
    if (premiumStories.includes(storyId)) {
      setShowModal(true); // Show modal
    } else {
      navigate(`/Book-Detail`, { state: { bookId: storyId } });
    }
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className={`bg-[#F9FFF5] font-mono min-h-screen text-[#1E1E1E] pt-8 md:pt-10}`}>
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#38C7D8] z-50"></div>
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="absolute left-0 h-full w-64 lg:px-0 lg:py-60">
          <div className="absolute left-0 p-5 lg:sticky lg:top-8 bg-[#BBFFAA] rounded-tr-4xl rounded-br-4xl ml-0">
            <h2 className="text-2xl font-bold mb-4">Browse stories</h2>
            <h3 className="text-xl font-bold border-b border-gray-700 pb-1 mb-4">Filters</h3>

            <label className="block text-sm font-bold mb-1">Author:</label>
            <input
              type="text"
              value={authorFilter}
              onChange={(e) => setAuthorFilter(e.target.value)}
              placeholder="Type author name"
              className="w-full border border-[#1E1E1E] rounded-md px-2 py-1 mb-4 bg-[#FFFFFF]"
            />

            <p className="text-sm font-bold mb-2">Status:</p>
            <div className="space-y-1 mb-4 text-sm">
              {["Completed", "Ongoing", "All"].map((status) => (
                <label key={status} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value={status}
                    checked={statusFilter === status}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  />
                  {status}
                </label>
              ))}
            </div>

            <p className="text-sm font-bold mb-2">Likes more than:</p>
            <input
              type="range"
              min="0"
              max="1000"
              step="250"
              value={minLikes}
              onChange={(e) => setMinLikes(Number(e.target.value))}
              className="w-full mb-2"
            />
            <div className="flex justify-between text-xs">
              <span>0</span><span>250</span><span>500</span><span>750</span><span>1000+</span>
            </div>
          </div>
        </aside>

        {/* Story Grid */}
        <main className="flex-grow min-w-0 px-4 md:px-0 lg:ml-75 pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {filteredStories.length > 0 ? (
              filteredStories.map((story) => (
                <div
                  key={story.id}
                  className={`grid grid-cols-[30%_70%] border rounded-2xl shadow hover:shadow-none transition cursor-pointer ${
                    premiumStories.includes(story.id) ? "border-yellow-400" : "border-[#1E1E1E]"
                  }`}
                  onClick={() => handleClickStory(story.id)}
                >
                  <div className="rounded-l-2xl overflow-hidden">
                    <img
                     src={story.cover}
                     alt={`${story.title} cover`}
                     className="w-full h-full object-cover"
                     />
                  </div>
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
                      <span>Likes: {story.likes}</span>
                      {premiumStories.includes(story.id) && <span className="text-yellow-500 font-bold">Premium</span>}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-lg">No stories match your filters 😢</p>
            )}
          </div>
        </main>
      </div>

      {/* Premium Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center relative">
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

export default BrowseStories;
