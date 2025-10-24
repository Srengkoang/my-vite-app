// AllWorksContent.jsx
import React, { useState } from "react";
import RemovalModal from "../RemovalModal/RemovalModal.jsx";

const COLORS = {
    mediumGreen: '#79B055',
    darkAccent: '#420015',
    textPrimary: '#0A3F10',
    spanHighlight: '#00A819',
    lightGreen: '#C2F793',
    draftGray: '#A9A9A9',
    confirmRed: '#E53E3E',
};

// Filter Input Component
const FilterInput = ({ label, placeholder, value, onChange }) => (
    <div className="mb-4 w-full">
        <label className="text-sm font-mono block mb-1 font-medium" style={{ color: COLORS.textPrimary }}>
            Filter by {label}:
        </label>
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full p-2 border-2 rounded-lg font-sans focus:outline-none focus:ring-2"
            style={{ borderColor: COLORS.mediumGreen }}
        />
    </div>
);

// Work Card Component
const WorkCard = ({ work, openModal }) => {
    const [isHovered, setIsHovered] = useState(false);

    const bgColor = work.status === 'Draft' ? COLORS.draftGray : COLORS.lightGreen;
    const removeBtnColor = work.status === 'Draft' ? '#B05555' : COLORS.confirmRed;

    return (
        <div
            className="w-full rounded-xl p-4 shadow-md transition-shadow duration-300 flex flex-col justify-between cursor-pointer relative"
            style={{ backgroundColor: bgColor }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="text-lg font-extrabold leading-tight" style={{ color: COLORS.darkAccent }}>{work.title}</h3>
                    <p className="text-sm font-mono" style={{ color: COLORS.textPrimary }}>by {work.author}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-mono text-gray-700">{work.date}</p>
                    <p className="text-xs font-mono font-semibold mt-1 px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', color: COLORS.textPrimary }}>
                        {work.status}
                    </p>
                </div>
            </div>

            <div className="mb-4 text-sm font-mono" style={{ color: COLORS.textPrimary }}>
                <p className="text-xs italic text-gray-700 max-h-12 overflow-hidden mb-2">
                    {work.description.substring(0, 100)}...
                </p>
                <div className="text-xs">
                    Chapters: <span className="font-bold">{work.chapters}</span> | Views: <span className="font-bold">{work.views.toLocaleString()}</span>
                </div>
            </div>

            <div className={`flex space-x-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <button
                    className="flex-1 px-4 py-1 text-white font-bold rounded-lg transition-transform hover:scale-[1.03] shadow-md text-sm"
                    style={{ backgroundColor: removeBtnColor }}
                    onClick={(e) => { e.stopPropagation(); openModal(work); }}
                >
                    Remove
                </button>
                <button
                    className="flex-1 px-4 py-1 font-bold rounded-lg transition-transform hover:scale-[1.03] shadow-md text-sm"
                    style={{ backgroundColor: 'white', color: COLORS.textPrimary, border: `1px solid ${COLORS.mediumGreen}` }}
                >
                    View
                </button>
            </div>
        </div>
    );
};

// Main All Works Component
const AllWorksContent = ({ initialWorks }) => {
    const [works, setWorks] = useState(initialWorks);
    const [filterTitle, setFilterTitle] = useState('');
    const [filterAuthor, setFilterAuthor] = useState('');

    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [workToRemove, setWorkToRemove] = useState(null);

    // Filtered works
    const filteredWorks = works.filter(work =>
        work.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        work.author.toLowerCase().includes(filterAuthor.toLowerCase())
    );

    // Modal handlers
    const openRemovalModal = (work) => {
        setWorkToRemove(work);
        setIsModalOpen(true);
    };

    const closeRemovalModal = () => {
        setIsModalOpen(false);
        setWorkToRemove(null);
    };

    const removeWork = (workId) => {
        setWorks(prev => prev.filter(w => w.id !== workId));
    };

    return (
        <div className="flex-grow p-4 md:p-10 font-mono relative">

            {/* Removal Modal */}
            {isModalOpen && workToRemove && (
                <RemovalModal
                    work={workToRemove}
                    closeModal={closeRemovalModal}
                    removeWork={removeWork}
                />
            )}

            <h1 className="text-4xl md:text-5xl font-normal mb-2" style={{ color: COLORS.textPrimary }}>
                <span className='font-bold' style={{ color: COLORS.spanHighlight }}>All Works</span>
            </h1>
            <p className="text-gray-500 mb-8 text-sm">Manage, filter, and review all user-submitted works across the platform.</p>

            <div className="flex flex-col gap-4 mb-10">
                <FilterInput label="title" placeholder="e.g., Quantum Quests" value={filterTitle} onChange={(e) => setFilterTitle(e.target.value)} />
                <FilterInput label="author" placeholder="e.g., A. Lee" value={filterAuthor} onChange={(e) => setFilterAuthor(e.target.value)} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredWorks.map(work => (
                    <WorkCard key={work.id} work={work} openModal={openRemovalModal} />
                ))}
            </div>

            {filteredWorks.length === 0 && (
                <div className="text-center p-12 border-2 border-dashed rounded-xl mt-10 text-gray-500" style={{ borderColor: COLORS.mediumGreen }}>
                    No works match the current filter criteria. Try adjusting your search terms.
                </div>
            )}
        </div>
    );
};

export default AllWorksContent;
