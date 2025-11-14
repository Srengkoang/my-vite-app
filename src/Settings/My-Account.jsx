import React, { useState } from "react"; 
import ProfilePic from "../assets/book cover.svg"; // import your image

const AccountSettings = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    username: "John Pork",
    email: "John.Pork@gmail.com",
    dateOfBirth: "12/05/2000",
    subscribed: false,
    joined: "15/07/2023",
    aboutMe: "I am John Pork, and I love reading and writing fantasy stories.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  return (
    <div className="min-h-screen flex justify-center items-start bg-white p-10 font-[Inter] text-black">
      
      {/* NORMAL VIEW */}
      {!isEditing && (
        <div className="w-[900px] bg-white border border-black rounded-xl p-10 shadow-sm">
          <h1 className="text-4xl font-semibold text-center mb-10 text-black">My Account</h1>

          <div className="flex items-center gap-8 mb-10">
            {/* Profile Picture */}
            <div className="w-28 h-28 rounded-full border border-black overflow-hidden">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-black font-outfit">Joined: {profile.joined}</p>
          </div>

          <div className="space-y-6 text-xl">
            <div className="flex">
              <label className="w-48 font-semibold text-black">Username:</label>
              <p>{profile.username}</p>
            </div>

            <div className="flex">
              <label className="w-48 font-semibold text-black">Email:</label>
              <p>{profile.email}</p>
            </div>

            <div className="flex">
              <label className="w-48 font-semibold text-black">Date of Birth:</label>
              <p>{profile.dateOfBirth}</p>
            </div>

            <div className="flex">
              <label className="w-48 font-semibold text-black">Subscribed:</label>
              <p>{profile.subscribed ? "Yes" : "No"}</p>
            </div>

            <div className="flex items-start">
              <label className="w-48 font-semibold text-black">About Me:</label>
              <div className="bg-white w-[400px] min-h-[80px] p-3 border border-black rounded-lg">
                {profile.aboutMe}
              </div>
            </div>
          </div>

          <div className="flex gap-6 mt-12 text-black">
            <button
              onClick={handleEdit}
              className="px-6 py-3 border border-black rounded-lg bg-white text-xl"
            >
              Edit
            </button>

            <button className="px-6 py-3 rounded-lg bg-red-100 text-red-600 text-xl">
              Logout
            </button>
          </div>
        </div>
      )}

      {/* EDIT VIEW */}
      {isEditing && (
        <div className="w-[900px] bg-white border border-black rounded-xl p-10 shadow-sm">
          <h1 className="text-4xl font-semibold text-center mb-10">My Account</h1>

          <div className="flex flex-col items-center mb-12">
            {/* Profile Picture */}
            <div className="w-28 h-28 rounded-full border border-black overflow-hidden">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm mt-2">Upload Photo</p>
            <p className="text-xs mt-1">Joined: {profile.joined}</p>
          </div>

          {/* Input Form Fields */}
          <div className="space-y-6 text-xl">
            <div>
              <label className="block font-semibold mb-1">Username:</label>
              <input
                name="username"
                value={profile.username}
                onChange={handleChange}
                className="w-full h-10 border border-black rounded-lg px-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email:</label>
              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full h-10 border border-black rounded-lg px-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Date of Birth:</label>
              <input
                name="dateOfBirth"
                value={profile.dateOfBirth}
                onChange={handleChange}
                className="w-full h-10 border border-black rounded-lg px-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Subscribed:</label>
              <input
                value={profile.subscribed ? "Yes" : "No"}
                disabled
                className="w-full h-10 border border-gray-400 bg-gray-100 rounded-lg px-3"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">About Me:</label>
              <textarea
                name="aboutMe"
                value={profile.aboutMe}
                onChange={handleChange}
                className="w-full h-24 border border-black rounded-lg px-3 py-2 resize-none"
              />
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={handleSave}
              className="px-10 py-3 border border-black rounded-xl bg-white text-xl"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSettings;
