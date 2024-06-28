import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function UserProfile() {
  const [fullName, setFullName] = useState("BYUMVUHORE Aimable");
  const [email, setEmail] = useState("aimablebyumvuhore@gmail.com");
  const [username, setUsername] = useState("BYUMVUHOREAimable");
  const [phoneNumber, setPhoneNumber] = useState("+250 784191775");
  const [profilePicture, setProfilePicture] = useState(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleSave = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("phoneNumber", phoneNumber);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/updateProfile`, {
        method: "POST",
        body: formData,
      });

      const dataRes = await response.json();
      toast(dataRes.message);

      if (!response.ok) {
        toast.error(dataRes.message || "Failed to update profile");
        return;
      }

      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (error) {
      toast.error("An error occurred while updating the profile");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center justify-center p-6">
          <img
            className="h-24 w-24 rounded-full object-cover cursor-pointer"
            src={profilePicture ? URL.createObjectURL(profilePicture) : "https://via.placeholder.com/150"}
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
          {editing && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Profile Picture
              </label>
              <input
                type="file"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleFileChange}
              />
            </div>
          )}
          <div className="flex items-center justify-between">
            {editing ? (
              <>
                <button
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={handleEditToggle}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  disabled={loading}
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
                <Link to="/">
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Logout
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
