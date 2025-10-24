// RemovalModal.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

const COLORS = {
    lightGreen: '#C2F793',
    mediumGreen: '#79B055',
    darkAccent: '#420015',
    textPrimary: '#0A3F10',
    spanHighlight: '#00A819',
    draftGray: '#A9A9A9',
    confirmRed: '#E53E3E',
    confirmText: '#822727',
    focusRingColor: 'rgba(121, 176, 85, 0.5)',
};

const RemovalModal = ({ work, closeModal, removeWork }) => {
    const [step, setStep] = useState('confirm'); 
    const [reason, setReason] = useState(''); 
    const [error, setError] = useState(''); 

    const handleConfirmRemoval = () => {
        setError('');
        removeWork(work.id); 
        setStep('success');
    };

    const ConfirmScreen = () => (
        <div className="flex flex-col items-center p-8">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: COLORS.darkAccent }}>Are you sure?</h2>
            <p className="text-center mb-6 text-gray-700">
                You are about to remove work **{work.title}**. Optional reason below.
            </p>
            <textarea
                placeholder="Enter optional reason here..."
                rows="4"
                value={reason}
                onChange={(e) => { setReason(e.target.value); if (error) setError(''); }}
                className="w-full p-3 mb-2 border-2 rounded-lg font-sans resize-none"
                style={{ 
                    backgroundColor: '#F5F5F5', 
                    borderColor: COLORS.mediumGreen,
                    outline: 'none'
                }}
            />
            {error && <p style={{ color: COLORS.confirmRed }}>{error}</p>}
            <div className="flex space-x-8 mt-6 w-full justify-center text-xl font-bold">
                <button onClick={handleConfirmRemoval} className="p-2 text-red-700">Confirm</button>
                <button onClick={closeModal} className="p-2 text-gray-500">Abort</button>
            </div>
        </div>
    );

    const SuccessScreen = () => (
        <div className="flex flex-col items-center p-8">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: COLORS.darkAccent }}>Removal complete</h2>
            <p className="text-center mb-8 text-gray-700 max-w-xs">
                Work **{work.title}** has been successfully removed.
            </p>
            <button onClick={closeModal} className="px-8 py-3 text-white font-bold rounded-lg" style={{ backgroundColor: COLORS.mediumGreen }}>
                Confirm
            </button>
        </div>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={closeModal}>
            <div className="bg-white rounded-2xl w-full max-w-sm relative" onClick={e => e.stopPropagation()}>
                <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1">
                    <X size={20} />
                </button>
                {step === 'confirm' ? <ConfirmScreen /> : <SuccessScreen />}
            </div>
        </div>
    );
};

export default RemovalModal;
