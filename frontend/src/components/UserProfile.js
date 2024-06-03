import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function UserProfile() {
  const [fullName, setFullName] = useState("BYUMVUHORE Aimable");
  const [email, setEmail] = useState("aimablebyumvuhore@gmail.com");
  const [username, setUsername] = useState("BYUMVUHOREAimable");
  const [phoneNumber, setPhoneNumber] = useState("+250 784191775");
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    // Perform API request to update user details
    setTimeout(() => {
      setEditing(false);
      toast.success("Profile updated successfully!");
    }, 1000); // Simulating API request delay
  };

  const handleLogout = () => {
    // Handle logout functionality
    navigate("/logout");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center justify-center p-6">
          <img
            className="h-24 w-24 rounded-full object-cover cursor-pointer"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            onClick={handleEditToggle}
          />
        </div>
        <div className="px-6 pb-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your Full Name
            </label>
            <input
              type="text"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                editing ? "" : "bg-gray-200"
              }`}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={!editing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                editing ? "" : "bg-gray-200"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!editing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                editing ? "" : "bg-gray-200"
              }`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={!editing}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                editing ? "" : "bg-gray-200"
              }`}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              disabled={!editing}
            />
          </div>
          <div className="flex items-center justify-between">
            {editing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save
                </button>
                <button
                  onClick={handleEditToggle}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleEditToggle}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Edit Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
}
