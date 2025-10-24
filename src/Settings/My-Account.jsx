import React, { useState } from "react";
import { User, Lock, Settings, Upload } from "lucide-react";

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
  const [tempProfile, setTempProfile] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempProfile({ ...tempProfile, [name]: value });
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setTempProfile(profile);
    setIsEditing(false);
  };
  const handleSave = () => {
    setProfile(tempProfile);
    setIsEditing(false);
  };
  const handleLogout = () => console.log("Logged out!");

  // A simple reusable field
  const Field = ({ label, name, editable = true, type = "text" }) => (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      {isEditing && editable ? (
        <input
          type={type}
          name={name}
          value={tempProfile[name]}
          onChange={handleChange}
          className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
        />
      ) : (
        <p className="text-gray-800">{profile[name]}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex font-[Inter] bg-white">
      {/* Sidebar */}
      {!isEditing && (
        <div className="w-1/4 bg-[#e6ffe3] p-6 pt-16 border-r">
          <h1 className="text-4xl font-bold text-[#1a4d0f] mb-10">Settings</h1>
          <nav className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-white text-[#1a4d0f] rounded-lg shadow-md font-bold">
              <User className="w-5 h-5" />
              <span>My Account</span>
            </div>
          </nav>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 p-8 sm:p-12 pt-16">
        <h1 className="text-4xl font-light mb-8">My Account</h1>

        {/* Avatar and Joined Date */}
        <div className="flex items-center gap-6 mb-10">
          <div className="w-28 h-28 border-2 border-gray-400 rounded-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50">
            {isEditing ? <Upload className="w-6 h-6 text-gray-500" /> : <User className="w-16 h-16 text-gray-400" />}
          </div>
          <p className="text-sm text-gray-500">Joined: {profile.joined}</p>
        </div>

        {/* Profile fields */}
        <div className="max-w-lg">
          <Field label="Username" name="username" />
          <Field label="Email" name="email" type="email" />
          <Field label="Date of Birth" name="dateOfBirth" />
          <div className="mb-4">
            <label className="block font-medium mb-1">Subscribed</label>
            <p className={profile.subscribed ? "text-green-600" : "text-red-500"}>
              {profile.subscribed ? "Yes" : "No"}
            </p>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1">About Me</label>
            {isEditing ? (
              <textarea
                name="aboutMe"
                value={tempProfile.aboutMe}
                onChange={handleChange}
                rows="3"
                className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-1 focus:ring-black"
              />
            ) : (
              <div className="border border-gray-200 p-3 rounded-lg bg-gray-50 text-gray-700">
                {profile.aboutMe}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 border border-black rounded-lg hover:bg-gray-100"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-6 py-2 border border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleEdit}
                  className="px-6 py-2 border border-black rounded-lg hover:bg-gray-100 text-black"
                >
                  Edit
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 border border-red-300 text-red-600 rounded-lg bg-red-100 hover:bg-red-200"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;

