import React, { useState } from "react";

// COLORS
const COLORS = {
  mediumGreen: "#79B055",
  textPrimary: "#0A3F10",
};

export default function TotalUserList() {
  const [filterUsername, setFilterUsername] = useState("");
  const [filterUserID, setFilterUserID] = useState("");

  // Generate 200 dummy users
  const [users] = useState(
    Array.from({ length: 200 }, (_, i) => ({
      id: i + 1,
      username: `User${i + 1}`,
      email: `user${i + 1}@example.com`,
      joinDate: `2024-${String((i % 12) + 1).padStart(2, "0")}-${String(
        (i % 28) + 1
      ).padStart(2, "0")}`,
      subscription: ["Free", "Premium", "Suspended"][i % 3],
      works: Math.floor(Math.random() * 10) + 1,
    }))
  );

  // Filtered Users
  const filteredUsers = users.filter((u) => {
    const usernameMatch = u.username
      .toLowerCase()
      .includes(filterUsername.toLowerCase());
    const idMatch = filterUserID === "" || u.id === Number(filterUserID);
    return usernameMatch && idMatch;
  });

  return (
    <div className="w-full h-screen bg-white overflow-y-auto overflow-x-hidden flex flex-col items-center p-10">
      {/* Page Title */}
      <h1 className="text-black text-5xl font-semibold font-['Geist_Mono'] mb-6 text-center">
        All Users : <span className="text-[#1A5632]">200</span>
      </h1>

      {/* Filter Section */}
      <div className="w-[80%] max-w-5xl bg-white border-t border-b border-black py-6 px-8 mb-10 rounded-lg">
        <div className="flex flex-col gap-6">
          {/* Filter Username */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="text-black text-2xl font-normal font-['Outfit']">
              Filter username:
            </label>
            <input
              type="text"
              value={filterUsername}
              onChange={(e) => setFilterUsername(e.target.value)}
              className="w-64 h-8 bg-white rounded-[10px] border border-black px-2 text-black"
            />
          </div>

          {/* Filter User ID */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <label className="text-black text-2xl font-normal font-['Outfit']">
              Filter user ID:
            </label>
            <input
              type="number"
              value={filterUserID}
              onChange={(e) => setFilterUserID(e.target.value)}
              className="w-64 h-8 bg-white rounded-[10px] border border-black px-2 text-black"
            />
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="w-[85%] max-w-6xl bg-white rounded-2xl border border-black p-5 h-[75vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="grid grid-cols-7 gap-4 text-black font-['Geist_Mono'] mb-4 sticky top-0 bg-white py-3 border-b border-gray-300">
          <div>User ID</div>
          <div>Username</div>
          <div>Email</div>
          <div>Join Date</div>
          <div className="text-center">Subscription</div>
          <div className="text-center">Works</div>
          <div className="text-center">Action</div>
        </div>

        {/* Rows */}
        {filteredUsers.map((u, index) => (
          <div
            key={u.id}
            className={`grid grid-cols-7 gap-4 items-center text-black font-['Geist_Mono'] border-t border-gray-200 py-3 ${
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            }`}
          >
            <div>{u.id}</div>
            <div>{u.username}</div>
            <div>{u.email}</div>
            <div>{u.joinDate}</div>
            <div className="text-center">{u.subscription}</div>
            <div className="text-center">{u.works}</div>
            <div className="flex justify-center gap-3">
              <button
                className={`px-3 py-1 rounded-lg cursor-not-allowed ${
                  u.subscription === "Free"
                    ? "bg-green-600 text-white"
                    : u.subscription === "Premium"
                    ? "bg-red-600 text-white"
                    : "bg-yellow-400 text-black"
                }`}
                disabled
              >
                {u.subscription === "Free" && "Activate"}
                {u.subscription === "Premium" && "Remove"}
                {u.subscription === "Suspended" && "Suspended"}
              </button>
            </div>
          </div>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center p-4 text-gray-500">
            No users match the filter criteria.
          </div>
        )}
      </div>
    </div>
  );
}
