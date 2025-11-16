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
{ id: 4, username: "Alice", email: "alice@demo.com", joinDate: "2023-11-01", subscription: "Free", works: 1 },
{ id: 5, username: "Bob", email: "bob@demo.com", joinDate: "2024-01-18", subscription: "Premium", works: 3 },
{ id: 6, username: "Charlie", email: "charlie@demo.com", joinDate: "2024-02-09", subscription: "Suspended", works: 0 },
{ id: 7, username: "David", email: "david@demo.com", joinDate: "2024-03-12", subscription: "Free", works: 2 },
{ id: 8, username: "Eva", email: "eva@demo.com", joinDate: "2024-03-21", subscription: "Premium", works: 4 },
{ id: 9, username: "Frank", email: "frank@demo.com", joinDate: "2024-03-25", subscription: "Free", works: 6 },
{ id: 10, username: "Grace", email: "grace@demo.com", joinDate: "2024-04-01", subscription: "Suspended", works: 1 },

{ id: 11, username: "Heidi", email: "heidi@demo.com", joinDate: "2024-04-02", subscription: "Free", works: 7 },
{ id: 12, username: "Ivan", email: "ivan@demo.com", joinDate: "2024-04-03", subscription: "Premium", works: 3 },
{ id: 13, username: "Judy", email: "judy@demo.com", joinDate: "2024-04-07", subscription: "Free", works: 2 },
{ id: 14, username: "Kevin", email: "kevin@demo.com", joinDate: "2024-04-09", subscription: "Suspended", works: 1 },
{ id: 15, username: "Luna", email: "luna@demo.com", joinDate: "2024-04-10", subscription: "Premium", works: 8 },

{ id: 16, username: "Mason", email: "mason@demo.com", joinDate: "2024-04-12", subscription: "Free", works: 3 },
{ id: 17, username: "Nora", email: "nora@demo.com", joinDate: "2024-04-15", subscription: "Premium", works: 2 },
{ id: 18, username: "Oliver", email: "oliver@demo.com", joinDate: "2024-04-17", subscription: "Free", works: 0 },
{ id: 19, username: "Paula", email: "paula@demo.com", joinDate: "2024-04-18", subscription: "Suspended", works: 1 },
{ id: 20, username: "Quinn", email: "quinn@demo.com", joinDate: "2024-04-19", subscription: "Free", works: 9 },

{ id: 21, username: "Rosa", email: "rosa@demo.com", joinDate: "2024-04-21", subscription: "Premium", works: 5 },
{ id: 22, username: "Sam", email: "sam@demo.com", joinDate: "2024-04-22", subscription: "Free", works: 3 },
{ id: 23, username: "Tina", email: "tina@demo.com", joinDate: "2024-04-23", subscription: "Free", works: 2 },
{ id: 24, username: "Uri", email: "uri@demo.com", joinDate: "2024-04-24", subscription: "Suspended", works: 0 },
{ id: 25, username: "Vera", email: "vera@demo.com", joinDate: "2024-04-26", subscription: "Premium", works: 6 },

{ id: 26, username: "Wendy", email: "wendy@demo.com", joinDate: "2024-04-27", subscription: "Free", works: 7 },
{ id: 27, username: "Xander", email: "xander@demo.com", joinDate: "2024-04-28", subscription: "Premium", works: 8 },
{ id: 28, username: "Yuki", email: "yuki@demo.com", joinDate: "2024-04-29", subscription: "Free", works: 1 },
{ id: 29, username: "Zara", email: "zara@demo.com", joinDate: "2024-04-30", subscription: "Suspended", works: 1 },
{ id: 30, username: "Aaron", email: "aaron@demo.com", joinDate: "2024-05-01", subscription: "Free", works: 3 },

{ id: 31, username: "Bella", email: "bella@demo.com", joinDate: "2024-05-02", subscription: "Premium", works: 6 },
{ id: 32, username: "Cindy", email: "cindy@demo.com", joinDate: "2024-05-03", subscription: "Free", works: 1 },
{ id: 33, username: "Derek", email: "derek@demo.com", joinDate: "2024-05-04", subscription: "Free", works: 4 },
{ id: 34, username: "Elly", email: "elly@demo.com", joinDate: "2024-05-05", subscription: "Suspended", works: 2 },
{ id: 35, username: "Finn", email: "finn@demo.com", joinDate: "2024-05-06", subscription: "Free", works: 0 },

{ id: 36, username: "Gina", email: "gina@demo.com", joinDate: "2024-05-07", subscription: "Premium", works: 3 },
{ id: 37, username: "Holly", email: "holly@demo.com", joinDate: "2024-05-08", subscription: "Free", works: 6 },
{ id: 38, username: "Isaac", email: "isaac@demo.com", joinDate: "2024-05-09", subscription: "Free", works: 5 },
{ id: 39, username: "Jasmine", email: "jasmine@demo.com", joinDate: "2024-05-10", subscription: "Suspended", works: 2 },
{ id: 40, username: "Kai", email: "kai@demo.com", joinDate: "2024-05-11", subscription: "Free", works: 1 },

{ id: 41, username: "Liam", email: "liam@demo.com", joinDate: "2024-05-12", subscription: "Premium", works: 7 },
{ id: 42, username: "Maya", email: "maya@demo.com", joinDate: "2024-05-13", subscription: "Free", works: 2 },
{ id: 43, username: "Noah", email: "noah@demo.com", joinDate: "2024-05-14", subscription: "Free", works: 3 },
{ id: 44, username: "Olivia", email: "olivia@demo.com", joinDate: "2024-05-16", subscription: "Premium", works: 4 },
{ id: 45, username: "Penny", email: "penny@demo.com", joinDate: "2024-05-17", subscription: "Suspended", works: 0 },

{ id: 46, username: "Ray", email: "ray@demo.com", joinDate: "2024-05-18", subscription: "Free", works: 6 },
{ id: 47, username: "Sara", email: "sara@demo.com", joinDate: "2024-05-19", subscription: "Premium", works: 5 },
{ id: 48, username: "Toby", email: "toby@demo.com", joinDate: "2024-05-20", subscription: "Free", works: 1 },
{ id: 49, username: "Uma", email: "uma@demo.com", joinDate: "2024-05-21", subscription: "Free", works: 3 },
{ id: 50, username: "Victor", email: "victor@demo.com", joinDate: "2024-05-22", subscription: "Suspended", works: 2 },
 { id: 51, username: "User51", email: "user51@example.com", joinDate: "2024-02-20", subscription: "Free", works: 5 },
  { id: 52, username: "User52", email: "user52@example.com", joinDate: "2024-02-21", subscription: "Premium", works: 3 },
  { id: 53, username: "User53", email: "user53@example.com", joinDate: "2024-02-22", subscription: "Suspended", works: 1 },
  { id: 54, username: "User54", email: "user54@example.com", joinDate: "2024-02-23", subscription: "Free", works: 8 },
  { id: 55, username: "User55", email: "user55@example.com", joinDate: "2024-02-24", subscription: "Premium", works: 2 },
  { id: 56, username: "User56", email: "user56@example.com", joinDate: "2024-02-25", subscription: "Free", works: 6 },
  { id: 57, username: "User57", email: "user57@example.com", joinDate: "2024-02-26", subscription: "Suspended", works: 3 },
  { id: 58, username: "User58", email: "user58@example.com", joinDate: "2024-02-27", subscription: "Premium", works: 7 },
  { id: 59, username: "User59", email: "user59@example.com", joinDate: "2024-02-28", subscription: "Free", works: 9 },
  { id: 60, username: "User60", email: "user60@example.com", joinDate: "2024-03-01", subscription: "Free", works: 2 },

  { id: 61, username: "User61", email: "user61@example.com", joinDate: "2024-03-02", subscription: "Premium", works: 4 },
  { id: 62, username: "User62", email: "user62@example.com", joinDate: "2024-03-03", subscription: "Suspended", works: 1 },
  { id: 63, username: "User63", email: "user63@example.com", joinDate: "2024-03-04", subscription: "Free", works: 5 },
  { id: 64, username: "User64", email: "user64@example.com", joinDate: "2024-03-05", subscription: "Premium", works: 6 },
  { id: 65, username: "User65", email: "user65@example.com", joinDate: "2024-03-06", subscription: "Free", works: 1 },
  { id: 66, username: "User66", email: "user66@example.com", joinDate: "2024-03-07", subscription: "Premium", works: 7 },
  { id: 67, username: "User67", email: "user67@example.com", joinDate: "2024-03-08", subscription: "Suspended", works: 2 },
  { id: 68, username: "User68", email: "user68@example.com", joinDate: "2024-03-09", subscription: "Free", works: 8 },
  { id: 69, username: "User69", email: "user69@example.com", joinDate: "2024-03-10", subscription: "Premium", works: 3 },
  { id: 70, username: "User70", email: "user70@example.com", joinDate: "2024-03-11", subscription: "Free", works: 5 },

  { id: 71, username: "User71", email: "user71@example.com", joinDate: "2024-03-12", subscription: "Free", works: 2 },
  { id: 72, username: "User72", email: "user72@example.com", joinDate: "2024-03-13", subscription: "Suspended", works: 6 },
  { id: 73, username: "User73", email: "user73@example.com", joinDate: "2024-03-14", subscription: "Premium", works: 4 },
  { id: 74, username: "User74", email: "user74@example.com", joinDate: "2024-03-15", subscription: "Free", works: 1 },
  { id: 75, username: "User75", email: "user75@example.com", joinDate: "2024-03-16", subscription: "Free", works: 9 },
  { id: 76, username: "User76", email: "user76@example.com", joinDate: "2024-03-17", subscription: "Premium", works: 7 },
  { id: 77, username: "User77", email: "user77@example.com", joinDate: "2024-03-18", subscription: "Suspended", works: 3 },
  { id: 78, username: "User78", email: "user78@example.com", joinDate: "2024-03-19", subscription: "Free", works: 6 },
  { id: 79, username: "User79", email: "user79@example.com", joinDate: "2024-03-20", subscription: "Premium", works: 8 },
  { id: 80, username: "User80", email: "user80@example.com", joinDate: "2024-03-21", subscription: "Free", works: 5 },

  { id: 81, username: "User81", email: "user81@example.com", joinDate: "2024-03-22", subscription: "Free", works: 3 },
  { id: 82, username: "User82", email: "user82@example.com", joinDate: "2024-03-23", subscription: "Premium", works: 6 },
  { id: 83, username: "User83", email: "user83@example.com", joinDate: "2024-03-24", subscription: "Suspended", works: 2 },
  { id: 84, username: "User84", email: "user84@example.com", joinDate: "2024-03-25", subscription: "Free", works: 7 },
  { id: 85, username: "User85", email: "user85@example.com", joinDate: "2024-03-26", subscription: "Premium", works: 4 },
  { id: 86, username: "User86", email: "user86@example.com", joinDate: "2024-03-27", subscription: "Free", works: 1 },
  { id: 87, username: "User87", email: "user87@example.com", joinDate: "2024-03-28", subscription: "Suspended", works: 9 },
  { id: 88, username: "User88", email: "user88@example.com", joinDate: "2024-03-29", subscription: "Free", works: 4 },
  { id: 89, username: "User89", email: "user89@example.com", joinDate: "2024-03-30", subscription: "Premium", works: 8 },
  { id: 90, username: "User90", email: "user90@example.com", joinDate: "2024-03-31", subscription: "Free", works: 2 },

  { id: 91, username: "User91", email: "user91@example.com", joinDate: "2024-04-01", subscription: "Premium", works: 5 },
  { id: 92, username: "User92", email: "user92@example.com", joinDate: "2024-04-02", subscription: "Free", works: 7 },
  { id: 93, username: "User93", email: "user93@example.com", joinDate: "2024-04-03", subscription: "Suspended", works: 3 },
  { id: 94, username: "User94", email: "user94@example.com", joinDate: "2024-04-04", subscription: "Premium", works: 6 },
  { id: 95, username: "User95", email: "user95@example.com", joinDate: "2024-04-05", subscription: "Free", works: 1 },
  { id: 96, username: "User96", email: "user96@example.com", joinDate: "2024-04-06", subscription: "Premium", works: 9 },
  { id: 97, username: "User97", email: "user97@example.com", joinDate: "2024-04-07", subscription: "Suspended", works: 4 },
  { id: 98, username: "User98", email: "user98@example.com", joinDate: "2024-04-08", subscription: "Free", works: 5 },
  { id: 99, username: "User99", email: "user99@example.com", joinDate: "2024-04-09", subscription: "Premium", works: 2 },
  { id: 100, username: "User100", email: "user100@example.com", joinDate: "2024-04-10", subscription: "Free", works: 8 },

    { id: 101, username: "User101", email: "user101@example.com", joinDate: "2024-04-11", subscription: "Free", works: 6 },
  { id: 102, username: "User102", email: "user102@example.com", joinDate: "2024-04-12", subscription: "Premium", works: 3 },
  { id: 103, username: "User103", email: "user103@example.com", joinDate: "2024-04-13", subscription: "Suspended", works: 5 },
  { id: 104, username: "User104", email: "user104@example.com", joinDate: "2024-04-14", subscription: "Free", works: 1 },
  { id: 105, username: "User105", email: "user105@example.com", joinDate: "2024-04-15", subscription: "Premium", works: 4 },
  { id: 106, username: "User106", email: "user106@example.com", joinDate: "2024-04-16", subscription: "Free", works: 8 },
  { id: 107, username: "User107", email: "user107@example.com", joinDate: "2024-04-17", subscription: "Suspended", works: 2 },
  { id: 108, username: "User108", email: "user108@example.com", joinDate: "2024-04-18", subscription: "Free", works: 5 },
  { id: 109, username: "User109", email: "user109@example.com", joinDate: "2024-04-19", subscription: "Premium", works: 6 },
  { id: 110, username: "User110", email: "user110@example.com", joinDate: "2024-04-20", subscription: "Free", works: 7 },

  { id: 111, username: "User111", email: "user111@example.com", joinDate: "2024-04-21", subscription: "Premium", works: 1 },
  { id: 112, username: "User112", email: "user112@example.com", joinDate: "2024-04-22", subscription: "Suspended", works: 4 },
  { id: 113, username: "User113", email: "user113@example.com", joinDate: "2024-04-23", subscription: "Free", works: 9 },
  { id: 114, username: "User114", email: "user114@example.com", joinDate: "2024-04-24", subscription: "Premium", works: 3 },
  { id: 115, username: "User115", email: "user115@example.com", joinDate: "2024-04-25", subscription: "Free", works: 2 },
  { id: 116, username: "User116", email: "user116@example.com", joinDate: "2024-04-26", subscription: "Premium", works: 7 },
  { id: 117, username: "User117", email: "user117@example.com", joinDate: "2024-04-27", subscription: "Suspended", works: 5 },
  { id: 118, username: "User118", email: "user118@example.com", joinDate: "2024-04-28", subscription: "Free", works: 6 },
  { id: 119, username: "User119", email: "user119@example.com", joinDate: "2024-04-29", subscription: "Premium", works: 8 },
  { id: 120, username: "User120", email: "user120@example.com", joinDate: "2024-04-30", subscription: "Free", works: 4 },

  { id: 121, username: "User121", email: "user121@example.com", joinDate: "2024-05-01", subscription: "Free", works: 5 },
  { id: 122, username: "User122", email: "user122@example.com", joinDate: "2024-05-02", subscription: "Suspended", works: 1 },
  { id: 123, username: "User123", email: "user123@example.com", joinDate: "2024-05-03", subscription: "Premium", works: 4 },
  { id: 124, username: "User124", email: "user124@example.com", joinDate: "2024-05-04", subscription: "Free", works: 6 },
  { id: 125, username: "User125", email: "user125@example.com", joinDate: "2024-05-05", subscription: "Premium", works: 2 },
  { id: 126, username: "User126", email: "user126@example.com", joinDate: "2024-05-06", subscription: "Free", works: 9 },
  { id: 127, username: "User127", email: "user127@example.com", joinDate: "2024-05-07", subscription: "Suspended", works: 3 },
  { id: 128, username: "User128", email: "user128@example.com", joinDate: "2024-05-08", subscription: "Free", works: 7 },
  { id: 129, username: "User129", email: "user129@example.com", joinDate: "2024-05-09", subscription: "Premium", works: 8 },
  { id: 130, username: "User130", email: "user130@example.com", joinDate: "2024-05-10", subscription: "Free", works: 4 },

  { id: 131, username: "User131", email: "user131@example.com", joinDate: "2024-05-11", subscription: "Premium", works: 6 },
  { id: 132, username: "User132", email: "user132@example.com", joinDate: "2024-05-12", subscription: "Free", works: 5 },
  { id: 133, username: "User133", email: "user133@example.com", joinDate: "2024-05-13", subscription: "Suspended", works: 2 },
  { id: 134, username: "User134", email: "user134@example.com", joinDate: "2024-05-14", subscription: "Premium", works: 7 },
  { id: 135, username: "User135", email: "user135@example.com", joinDate: "2024-05-15", subscription: "Free", works: 1 },
  { id: 136, username: "User136", email: "user136@example.com", joinDate: "2024-05-16", subscription: "Premium", works: 9 },
  { id: 137, username: "User137", email: "user137@example.com", joinDate: "2024-05-17", subscription: "Free", works: 2 },
  { id: 138, username: "User138", email: "user138@example.com", joinDate: "2024-05-18", subscription: "Suspended", works: 4 },
  { id: 139, username: "User139", email: "user139@example.com", joinDate: "2024-05-19", subscription: "Premium", works: 5 },
  { id: 140, username: "User140", email: "user140@example.com", joinDate: "2024-05-20", subscription: "Free", works: 3 },

  { id: 141, username: "User141", email: "user141@example.com", joinDate: "2024-05-21", subscription: "Premium", works: 7 },
  { id: 142, username: "User142", email: "user142@example.com", joinDate: "2024-05-22", subscription: "Free", works: 4 },
  { id: 143, username: "User143", email: "user143@example.com", joinDate: "2024-05-23", subscription: "Suspended", works: 1 },
  { id: 144, username: "User144", email: "user144@example.com", joinDate: "2024-05-24", subscription: "Free", works: 6 },
  { id: 145, username: "User145", email: "user145@example.com", joinDate: "2024-05-25", subscription: "Premium", works: 8 },
  { id: 146, username: "User146", email: "user146@example.com", joinDate: "2024-05-26", subscription: "Free", works: 2 },
  { id: 147, username: "User147", email: "user147@example.com", joinDate: "2024-05-27", subscription: "Suspended", works: 7 },
  { id: 148, username: "User148", email: "user148@example.com", joinDate: "2024-05-28", subscription: "Free", works: 5 },
  { id: 149, username: "User149", email: "user149@example.com", joinDate: "2024-05-29", subscription: "Premium", works: 9 },
  { id: 150, username: "User150", email: "user150@example.com", joinDate: "2024-05-30", subscription: "Free", works: 6 },
  { id: 151, username: "User151", email: "user151@example.com", joinDate: "2024-05-31", subscription: "Free", works: 7 },
  { id: 152, username: "User152", email: "user152@example.com", joinDate: "2024-06-02", subscription: "Premium", works: 5 },
  { id: 153, username: "User153", email: "user153@example.com", joinDate: "2024-06-03", subscription: "Free", works: 2 },
  { id: 154, username: "User154", email: "user154@example.com", joinDate: "2024-06-04", subscription: "Premium", works: 7 },
  { id: 155, username: "User155", email: "user155@example.com", joinDate: "2024-06-05", subscription: "Free", works: 4 },
  { id: 156, username: "User156", email: "user156@example.com", joinDate: "2024-06-06", subscription: "Premium", works: 6 },
  { id: 157, username: "User157", email: "user157@example.com", joinDate: "2024-06-07", subscription: "Free", works: 1 },
  { id: 158, username: "User158", email: "user158@example.com", joinDate: "2024-06-08", subscription: "Premium", works: 8 },
  { id: 159, username: "User159", email: "user159@example.com", joinDate: "2024-06-09", subscription: "Free", works: 2 },
  { id: 160, username: "User160", email: "user160@example.com", joinDate: "2024-06-10", subscription: "Premium", works: 5 },
  { id: 161, username: "User161", email: "user161@example.com", joinDate: "2024-06-11", subscription: "Free", works: 3 },
  { id: 162, username: "User162", email: "user162@example.com", joinDate: "2024-06-12", subscription: "Premium", works: 7 },

  { id: 163, username: "User163", email: "user163@example.com", joinDate: "2024-06-13", subscription: "Free", works: 4 },
  { id: 164, username: "User164", email: "user164@example.com", joinDate: "2024-06-14", subscription: "Premium", works: 6 },
  { id: 165, username: "User165", email: "user165@example.com", joinDate: "2024-06-15", subscription: "Free", works: 2 },
  { id: 166, username: "User166", email: "user166@example.com", joinDate: "2024-06-16", subscription: "Premium", works: 8 },
  { id: 167, username: "User167", email: "user167@example.com", joinDate: "2024-06-17", subscription: "Free", works: 3 },
  { id: 168, username: "User168", email: "user168@example.com", joinDate: "2024-06-18", subscription: "Premium", works: 5 },
  { id: 169, username: "User169", email: "user169@example.com", joinDate: "2024-06-19", subscription: "Free", works: 1 },
  { id: 170, username: "User170", email: "user170@example.com", joinDate: "2024-06-20", subscription: "Premium", works: 6 },
  { id: 171, username: "User171", email: "user171@example.com", joinDate: "2024-06-21", subscription: "Free", works: 2 },
  { id: 172, username: "User172", email: "user172@example.com", joinDate: "2024-06-22", subscription: "Premium", works: 7 },
  { id: 173, username: "User173", email: "user173@example.com", joinDate: "2024-06-23", subscription: "Free", works: 3 },
  { id: 174, username: "User174", email: "user174@example.com", joinDate: "2024-06-24", subscription: "Premium", works: 5 },
  { id: 175, username: "User175", email: "user175@example.com", joinDate: "2024-06-25", subscription: "Free", works: 4 },
  { id: 176, username: "User176", email: "user176@example.com", joinDate: "2024-06-26", subscription: "Premium", works: 6 },

   { id: 177, username: "User177", email: "user177@example.com", joinDate: "2024-06-27", subscription: "Free", works: 2 },
  { id: 178, username: "User178", email: "user178@example.com", joinDate: "2024-06-28", subscription: "Premium", works: 8 },
  { id: 179, username: "User179", email: "user179@example.com", joinDate: "2024-06-29", subscription: "Free", works: 1 },
  { id: 180, username: "User180", email: "user180@example.com", joinDate: "2024-06-30", subscription: "Premium", works: 7 },
  { id: 181, username: "User181", email: "user181@example.com", joinDate: "2024-07-01", subscription: "Free", works: 3 },
  { id: 182, username: "User182", email: "user182@example.com", joinDate: "2024-07-02", subscription: "Premium", works: 5 },
  { id: 183, username: "User183", email: "user183@example.com", joinDate: "2024-07-03", subscription: "Free", works: 2 },
  { id: 184, username: "User184", email: "user184@example.com", joinDate: "2024-07-04", subscription: "Premium", works: 6 },
  { id: 185, username: "User185", email: "user185@example.com", joinDate: "2024-07-05", subscription: "Free", works: 4 },
  { id: 186, username: "User186", email: "user186@example.com", joinDate: "2024-07-06", subscription: "Premium", works: 7 },
  { id: 187, username: "User187", email: "user187@example.com", joinDate: "2024-07-07", subscription: "Free", works: 1 },
  { id: 188, username: "User188", email: "user188@example.com", joinDate: "2024-07-08", subscription: "Premium", works: 5 },
  { id: 189, username: "User189", email: "user189@example.com", joinDate: "2024-07-09", subscription: "Free", works: 3 },
  { id: 190, username: "User190", email: "user190@example.com", joinDate: "2024-07-10", subscription: "Premium", works: 6 },
  { id: 191, username: "User191", email: "user191@example.com", joinDate: "2024-07-11", subscription: "Free", works: 2 },
  { id: 192, username: "User192", email: "user192@example.com", joinDate: "2024-07-12", subscription: "Premium", works: 8 },
  { id: 193, username: "User193", email: "user193@example.com", joinDate: "2024-07-13", subscription: "Free", works: 1 },
  { id: 194, username: "User194", email: "user194@example.com", joinDate: "2024-07-14", subscription: "Premium", works: 7 },
  { id: 195, username: "User195", email: "user195@example.com", joinDate: "2024-07-15", subscription: "Free", works: 3 },
  { id: 196, username: "User196", email: "user196@example.com", joinDate: "2024-07-16", subscription: "Premium", works: 5 },
  { id: 197, username: "User197", email: "user197@example.com", joinDate: "2024-07-17", subscription: "Free", works: 2 },
  { id: 198, username: "User198", email: "user198@example.com", joinDate: "2024-07-18", subscription: "Premium", works: 6 },
  { id: 199, username: "User199", email: "user199@example.com", joinDate: "2024-07-19", subscription: "Free", works: 4 },
  { id: 200, username: "User200", email: "user200@example.com", joinDate: "2024-07-20", subscription: "Premium", works: 7 }


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
