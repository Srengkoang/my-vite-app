// TopBooks.jsx
import React from "react";

// Add the stories array here directly
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

const TopBooks = () => {
  const sortedStories = [...stories].sort((a, b) => b.views - a.views);

  return (
    <div className="min-h-screen bg-white p-10 font-mono text-[#1E1E1E]">

      <h1 className="text-5xl font-semibold mb-8 text-center">
        Top Books by Views
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-green-200">
            <tr>
              <th className="border px-4 py-2 text-left">#</th>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Author</th>
              <th className="border px-4 py-2 text-left">Status</th>
              <th className="border px-4 py-2 text-left">Chapters</th>
              <th className="border px-4 py-2 text-left">Views</th>
              <th className="border px-4 py-2 text-left">Likes</th>
            </tr>
          </thead>
          <tbody>
            {sortedStories.map((story, index) => (
              <tr key={story.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{story.title}</td>
                <td className="border px-4 py-2">{story.author}</td>
                <td className="border px-4 py-2">{story.status}</td>
                <td className="border px-4 py-2">{story.chapters}</td>
                <td className="border px-4 py-2">{story.views}</td>
                <td className="border px-4 py-2">{story.likes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopBooks;
