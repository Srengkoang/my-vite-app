import React, { useState } from "react";

// COLORS
const COLORS = {
  mediumGreen: "#79B055",
  textPrimary: "#0A3F10",
};

// Success modal component
const SuccessModal = ({ userName, reason, action, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[480px] bg-white rounded-2xl shadow-lg p-5">
        <div className="text-center text-xl font-bold font-['Geist_Mono'] mb-2 text-black">
          Action Complete
        </div>
        <div className="text-center text-base font-['Outfit'] mb-4 text-black">
          User <span className="font-semibold">{userName}</span> has been successfully{" "}
          {action === "remove" ? `removed for "${reason}"` : "activated"}.
        </div>
        <div className="flex justify-center">
          <button
            onClick={closeModal}
            className={`px-4 py-2 border border-black rounded-lg font-bold font-['Outfit'] text-sm text-white ${
              action === "remove" ? "bg-red-600 hover:bg-red-500" : "bg-green-600 hover:bg-green-500"
            } transition`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

// Filter Input Component
const FilterInput = ({ label, value, onChange, type = "text" }) => (
  <div className="mb-4 flex items-center gap-2">
    <label
      className="text-sm font-mono font-medium"
      style={{ color: COLORS.textPrimary }}
    >
      Filter by {label}:
    </label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={`Enter ${label}`}
      className="w-48 p-2 border-2 rounded-lg font-sans focus:outline-none focus:ring-2 text-black placeholder-black"
      style={{ borderColor: COLORS.mediumGreen }}
    />
  </div>
);

export default function AllUsersPage() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null); // 'remove', 'disactivate', 'suspend'
  const [success, setSuccess] = useState(false);
  const [reason, setReason] = useState("");
  const [filterUsername, setFilterUsername] = useState("");
  const [filterUserID, setFilterUserID] = useState("");

  const [users, setUsers] = useState([
    { id: 1, username: "Nana", email: "nana@example.com", joinDate: "2024-01-02", subscription: "Free", works: 5 },
    { id: 2, username: "Mina", email: "mina@example.com", joinDate: "2024-02-15", subscription: "Premium", works: 2 },
    { id: 3, username: "Minchul", email: "minchul@111.com", joinDate: "2025-03-03", subscription: "Suspended", works: 7 },
  ]);

  // Filtered Users
  const filteredUsers = users.filter(u => {
    const usernameMatch = u.username.toLowerCase().includes(filterUsername.toLowerCase());
    const idMatch = filterUserID === "" || u.id === Number(filterUserID);
    return usernameMatch && idMatch;
  });

  // Handlers
  const handleConfirmRemove = () => {
    setUsers(users.filter(u => u.id !== selectedUser.id));
    setSuccess(true);
  };

  const handleConfirmActivate = () => {
    setUsers(users.map(u => u.id === selectedUser.id ? { ...u, subscription: "Premium" } : u));
    setSuccess(true);
  };

  const handleUnsuspend = () => {
    setUsers(users.map(u => u.id === selectedUser.id ? { ...u, subscription: "Free" } : u));
    setSuccess(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalType(null);
    setSuccess(false);
    setReason("");
  };

  return (
    <div className="w-full h-screen bg-white overflow-auto p-10 relative">

      {/* Page Title */}
      <h1 className="text-black text-5xl font-semibold font-['Geist_Mono'] mb-6">
        All Users
      </h1>

      {/* Filter Section */}
      <div className="w-[1123px] h-28 relative mb-10">
        <div className="w-[1123px] h-28 left-0 top-0 absolute bg-white border-t border-b border-black" />
        <div className="left-[52px] top-[20px] absolute text-black text-2xl font-normal font-['Outfit']">Filter username:</div>
        <input
          type="text"
          value={filterUsername}
          onChange={(e) => setFilterUsername(e.target.value)}
          className="w-48 h-7 left-[233px] top-[20px] absolute bg-white rounded-[10px] border border-black px-2 text-black"
        />
        <div className="left-[52px] top-[70px] absolute text-black text-2xl font-normal font-['Outfit']">Filter user ID:</div>
        <input
          type="number"
          value={filterUserID}
          onChange={(e) => setFilterUserID(e.target.value)}
          className="w-48 h-7 left-[233px] top-[70px] absolute bg-white rounded-[10px] border border-black px-2 text-black"
        />
      </div>

      {/* Table */}
      <div className="w-full bg-white rounded-2xl border border-black p-5">
        {/* Header */}
        <div className="grid grid-cols-7 gap-4 text-black font-['Geist_Mono'] mb-4">
          <div>User ID</div>
          <div>Username</div>
          <div>Email</div>
          <div>Join Date</div>
          <div className="text-center">Subscription</div>
          <div className="text-center">Works</div>
          <div className="text-center">Action</div>
        </div>

        {/* Rows */}
        {filteredUsers.map(u => (
          <div key={u.id} className="grid grid-cols-7 gap-4 items-center text-black font-['Geist_Mono'] border-t border-gray-300 py-3">
            <div>{u.id}</div>
            <div>{u.username}</div>
            <div>{u.email}</div>
            <div>{u.joinDate}</div>
            <div className="text-center">{u.subscription}</div>
            <div className="text-center">{u.works}</div>
            <div className="flex justify-center gap-3">
              {u.subscription === "Free" && (
                <button
                  onClick={() => { setSelectedUser(u); setModalType("disactivate"); }}
                  className="px-3 py-1 bg-green-600 text-white rounded-lg hover:opacity-80 transition"
                >
                  Activate
                </button>
              )}
              {u.subscription === "Premium" && (
                <button
                  onClick={() => { setSelectedUser(u); setModalType("remove"); }}
                  className="px-3 py-1 bg-red-600 text-white rounded-lg hover:opacity-80 transition"
                >
                  Remove
                </button>
              )}
              {u.subscription === "Suspended" && (
                <button
                  onClick={() => { setSelectedUser(u); setModalType("suspend"); }}
                  className="px-3 py-1 bg-yellow-400 text-black rounded-lg hover:opacity-80 transition"
                >
                  Suspended
                </button>
              )}
            </div>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center p-4 text-gray-500">No users match the filter criteria.</div>
        )}
      </div>

      {/* Modals */}
      {selectedUser && modalType && !success && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-black">
          <div className="relative w-[480px] bg-white rounded-2xl shadow-lg p-5">
            <div className="text-center text-base font-['Outfit'] mb-2">
              <span className="font-bold text-black">Are you sure?</span><br />
              {modalType === "remove" && <>You are about to remove <span className="font-semibold text-black">{selectedUser.username}</span>.<br />Please provide a reason below.</>}
              {modalType === "disactivate" && <>You are about to disactivate <span className="font-semibold text-black">{selectedUser.username}</span>.</>}
              {modalType === "suspend" && <>User <span className="font-semibold text-black">{selectedUser.username}</span> is suspended. Choose an action.</>}
            </div>

            {modalType === "remove" && (
              <input
                type="text"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Reason"
                className="w-full h-10 bg-zinc-300 border border-black rounded-lg px-3 text-black text-sm font-['Outfit'] mb-3"
              />
            )}

            <div className="flex justify-center space-x-6">
              {modalType === "remove" && <button onClick={handleConfirmRemove} className="text-black text-sm font-bold font-['Outfit'] hover:text-red-600 transition">Confirm</button>}
              {modalType === "disactivate" && <button onClick={handleConfirmActivate} className="text-black text-sm font-bold font-['Outfit'] hover:text-green-600 transition">Confirm</button>}
              {modalType === "suspend" && (
                <>
                  <button onClick={handleUnsuspend} className="px-3 py-1 bg-green-600 text-white rounded-lg hover:opacity-80 transition">Unsuspend</button>
                  <button onClick={() => setModalType("remove")} className="px-3 py-1 bg-red-600 text-white rounded-lg hover:opacity-80 transition">Remove</button>
                </>
              )}
              <button onClick={closeModal} className="px-3 py-1 bg-gray-300 text-black rounded-lg hover:opacity-80 transition">Abort</button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {success && selectedUser && (
        <SuccessModal
          userName={selectedUser.username}
          reason={modalType === "remove" ? reason : null}
          action={modalType === "remove" ? "remove" : "activate"}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
