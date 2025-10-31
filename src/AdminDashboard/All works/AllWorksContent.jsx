import React, { useState } from "react";

// COLORS
const COLORS = {
  mediumGreen: "#79B055",
  darkAccent: "#420015",
  textPrimary: "#0A3F10",
  spanHighlight: "#00A819",
  lightGreen: "#C2F793",
  draftGray: "#A9A9A9",
  confirmRed: "#E53E3E",
};

// Filter Input Component
const FilterInput = ({ label, placeholder, value, onChange }) => (
  <div className="mb-4 flex items-center gap-2">
    <label
      className="text-sm font-mono font-medium"
      style={{ color: COLORS.textPrimary }}
    >
      Filter by {label}:
    </label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-64 p-2 border-2 rounded-lg font-sans focus:outline-none focus:ring-2 text-black placeholder-grey-400"
      style={{ borderColor: COLORS.mediumGreen }}
    />
  </div>
);

// Work Card Component
const WorkCard = ({ work, onRemoveClick, onDeactivateClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      className="w-[490px] h-48 relative bg-white rounded-[10px] outline-black cursor-pointer overflow-hidden"
      onClick={() => setIsSelected((prev) => !prev)}
    >
      {/* Book Spine */}
      <div className="w-32 h-48 left-0 top-0 absolute bg-lime-300 rounded-tl-[10px] rounded-bl-[10px]" />

      {/* Book Details */}
      <div className="absolute left-[150px] top-[10px] text-black text-xl font-bold font-['Geist_Mono']">
        {work.title}
      </div>
      <div className="absolute left-[150px] top-[36px] text-black text-xs font-bold font-['Outfit']">
        {work.author}
      </div>
      <div className="absolute left-[151px] top-[92px] text-black text-xs font-bold font-['Outfit']">
        {work.status}
      </div>
      <div className="absolute left-[150px] top-[111px] text-black text-xs font-normal font-['Outfit'] overflow-hidden">
        {work.description.substring(0, 150)}...
      </div>
      <div className="absolute left-[423px] top-[10px] text-black text-xs font-bold font-['Outfit']">
        {work.date}
      </div>
      <div className="absolute left-[150px] top-[177px] text-black text-[10px] font-normal font-['Outfit']">
        Chapters: {work.chapters}
      </div>
      <div className="absolute left-[215px] top-[177px] text-black text-[10px] font-normal font-['Outfit']">
        Views: {work.views.toLocaleString()}
      </div>

      {/* Overlay + buttons */}
      {isSelected && (
        <>
          <div className="absolute w-full h-full bg-black/50 rounded-[10px]" />
          <button
            className="absolute w-24 h-6 left-[142px] top-[88px] bg-red-600 rounded-[10px] flex items-center justify-center text-white text-base font-semibold font-['Outfit'] z-10"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveClick(work);
            }}
          >
            Remove
          </button>
          <button
            className={`absolute w-24 h-6 left-[255px] top-[88px] rounded-[10px] flex items-center justify-center text-black text-base font-semibold font-['Outfit'] z-10 ${
              work.status === "View" ? "bg-gray-300" : "bg-white"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onDeactivateClick(work);
            }}
          >
            {work.status === "View" ? "view" : "View"}
          </button>
        </>
      )}
    </div>
  );
};

// Removal Modal
const RemovalModal = ({ work, closeModal, confirmRemoval }) => {
  const [reason, setReason] = useState("");

  const handleConfirm = () => {
    if (!reason.trim()) {
      alert("Please provide a reason");
      return;
    }
    confirmRemoval(work, reason);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
      <div className="relative w-[480px] bg-white rounded-2xl shadow-lg p-5">
        <div className="text-center text-base font-['Outfit'] mb-2">
          <span className="font-bold text-black">Are you sure?</span>
          <br />
          You are about to remove <span className="font-semibold">{work.title}</span>.
          <br />
          Please provide a reason below.
        </div>

        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason"
          className="w-full h-10 bg-zinc-300 border border-black rounded-lg px-3 text-black text-sm font-['Outfit'] mb-3 placeholder-black"
        />

        <div className="flex justify-center space-x-8">
          <button
            onClick={handleConfirm}
            className="text-black text-sm font-bold font-['Outfit'] hover:text-red-600 transition"
          >
            Confirm
          </button>
          <button
            onClick={closeModal}
            className="text-black text-sm font-bold font-['Outfit'] hover:text-gray-600 transition"
          >
            Abort
          </button>
        </div>
      </div>
    </div>
  );
};

// Success Modal
const SuccessModal = ({ workTitle, reason, closeModal }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="w-[480px] bg-white rounded-2xl shadow-lg p-5">
      <div className="text-center text-xl font-bold font-['Geist_Mono'] mb-2 text-black">
        Removal Complete
      </div>
      <div className="text-center text-base font-['Outfit'] mb-4 text-black">
        Work <span className="font-semibold">{workTitle}</span> has been
        successfully removed for <span className="font-semibold">{reason}</span>.
      </div>
      <div className="flex justify-center">
        <button
          onClick={closeModal}
          className="text-black text-sm font-bold font-['Outfit'] hover:text-gray-600 transition px-4 py-2 border border-black rounded-lg"
        >
          Confirm
        </button>
      </div>
    </div>
  </div>
);

// Main AllWorksContent
const AllWorksContent = () => {
  const initialWorks = [
    {
      id: 1,
      title: "Quantum Quests",
      author: "A. Lee",
      status: "Active",
      description:
        "Explore the quantum realms and unravel the mysteries of parallel universes.",
      date: "2025-01-01",
      chapters: 12,
      views: 10234,
    },
    {
      id: 2,
      title: "Galactic Tales",
      author: "B. Smith",
      status: "Active",
      description:
        "Adventures across galaxies with heroes from different worlds and planets.",
      date: "2025-02-15",
      chapters: 8,
      views: 7543,
    },
    {
      id: 3,
      title: "Mystic Rivers",
      author: "C. Tan",
      status: "Suspended",
      description:
        "Follow the journey of an ancient river holding secrets of old civilizations.",
      date: "2025-03-03",
      chapters: 15,
      views: 8932,
    },
    {
      id: 4,
      title: "Cybernetic Dreams",
      author: "D. Kim",
      status: "Active",
      description:
        "In a cyberpunk future, humans and AI navigate dreams and reality.",
      date: "2025-04-20",
      chapters: 10,
      views: 12054,
    },
  ];

  const [works, setWorks] = useState(initialWorks);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");
  const [removalModalOpen, setRemovalModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [currentWork, setCurrentWork] = useState(null);
  const [removalReason, setRemovalReason] = useState("");

  const filteredWorks = works.filter(
    (work) =>
      work.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      work.author.toLowerCase().includes(filterAuthor.toLowerCase())
  );

  const openRemovalModal = (work) => {
    setCurrentWork(work);
    setRemovalModalOpen(true);
  };

  const closeRemovalModal = () => {
    setRemovalModalOpen(false);
    setCurrentWork(null);
  };

  const confirmRemoval = (work, reason) => {
    setWorks((prev) => prev.filter((w) => w.id !== work.id));
    setRemovalReason(reason);
    setRemovalModalOpen(false);
    setSuccessModalOpen(true);
  };

  const closeSuccessModal = () => {
    setSuccessModalOpen(false);
    setCurrentWork(null);
    setRemovalReason("");
  };

  const handleDeactivate = (work) => {
    setWorks((prev) =>
      prev.map((w) =>
        w.id === work.id
          ? { ...w, status: w.status === "Suspended" ? "Active" : "Suspended" }
          : w
      )
    );
  };

  return (
    <div className="flex-grow p-4 md:p-10 font-mono relative">
      {removalModalOpen && currentWork && (
        <RemovalModal
          work={currentWork}
          closeModal={closeRemovalModal}
          confirmRemoval={confirmRemoval}
        />
      )}
      {successModalOpen && currentWork && (
        <SuccessModal
          workTitle={currentWork.title}
          reason={removalReason}
          closeModal={closeSuccessModal}
        />
      )}

      <h1 className="text-4xl md:text-5xl font-normal mb-2" style={{ color: COLORS.textPrimary }}>
        <span className="font-bold" style={{ color: COLORS.spanHighlight }}>
          All Works
        </span>
      </h1>
      <p className="text-gray-500 mb-8 text-sm">
        Manage, filter, and review all user-submitted works across the platform.
      </p>

<div className="flex flex-col gap-4 mb-10">
        <FilterInput
          label="title"
          placeholder="e.g., Quantum Quests"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
        <FilterInput
          label="author"
          placeholder="e.g., A. Lee"
          value={filterAuthor}
          onChange={(e) => setFilterAuthor(e.target.value)}
        />
      </div>

      {/* Work Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10">
        {filteredWorks.map((work) => (
          <WorkCard
            key={work.id}
            work={work}
            onRemoveClick={openRemovalModal}
            onDeactivateClick={handleDeactivate}
          />
        ))}
      </div>

      {/* No results */}
      {filteredWorks.length === 0 && (
        <div className="text-center p-12 border-2 border-dashed rounded-xl mt-10 text-gray-500" style={{ borderColor: COLORS.mediumGreen }}>
          No works match the current filter criteria. Try adjusting your search terms.
        </div>
      )}
    </div>
  );
};

export default AllWorksContent;




