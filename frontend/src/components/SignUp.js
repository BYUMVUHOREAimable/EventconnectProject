import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ImagetoBase64 } from './utility/ImagetoBase64.js';
import { IoCloudUploadOutline } from "react-icons/io5";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields and email/password format
    if (!fullName || !email || !password || !username || !phoneNumber || !userProfile) {
      toast.error("Please enter all required fields.");
      return;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      toast.error("Invalid email format");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);

    try {
      // Prepare form data object
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("username", username);
      formData.append("phoneNumber", phoneNumber);
      formData.append("userProfile", userProfile);

      // Make API request
      const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/event`, {
        method: "POST",
        body: formData,
      });

      const dataRes = await response.json();

      if (response.status === 302) {
        toast.success(dataRes.message);
        navigate("/dashboard", { replace: true });
      } else {
        toast.error(dataRes.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Event creation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setUserProfile(data);
  };

  const googleSignup = () => {
    setLoading(true);
   // https://eventconnect2.onrender.com/auth/google/callback
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google/callback`;
  };

  return (
    <div className="w-full flex flex-col shadow-xl justify-center items-center mt-20">
      {loading && (
        <div className="fixed inset-0 bg-[#20B486] bg-opacity-40 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[#20B486]"></div>
        </div>
      )}
      <div className="w-1/2 flex text-xl text-black justify-between self-center font-semibold relative pt-4" id="choose">
        Sign up
        <div className="text-sm align-bottom inline">
          or{" "}
          <Link to="../" className="text-[#20B486] inline">Have Account&#63;</Link>
        </div>
      </div>
      <div className="flex flex-col w-1/2 pt-3 self-center relative" id="offPro">
        <Link to="./" className="p-1 bg-[#20B486] hover:bg-[#43edb7] hover:shadow-slate-950/30 shadow-lg text-white text-center relative w-full max-h-10 flex justify-center rounded-lg gap-2 mb-4 cursor-pointer" onClick={googleSignup}>
          <AiOutlineGoogle className="text-2xl absolute left-2 p-1" />
          <div>Sign up with Google</div>
        </Link>
      </div>
      <div className="flex text-black text-xl text-center self-center justify-center items-center w-2/12 relative" id="or">
        <span className="border border-black w-full min-w-full"></span>
        <span className="px-4">OR</span>
        <span className="border border-black w-full min-w-full"></span>
      </div>
      <form className="grid grid-flow-row gap-3 md:w-3/5 w-1/2 self-center mx-auto pt-3 rounded-lg px-8 py-5 relative" onSubmit={handleSubmit} id="loginForm">
        <div className="flex flex-col text-gray-800 py-1">
          <input className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
            type="text" placeholder="Your Full Names" value={fullName} onChange={(e) => setFullName(e.target.value)} autoComplete=""/>
        </div>
        <div className="flex flex-col text-gray-800 py-1">
          <input className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
            type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete=""/>
        </div>
        <div className="flex flex-col relative text-gray-400 py-1">
          <input
            className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
            type={visible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete=""
          />
          {visible ? (
            <AiOutlineEye
              className="absolute top-3 right-1 cursor-pointer"
              onClick={() => setVisible(false)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="absolute top-3 right-1 cursor-pointer"
              onClick={() => setVisible(true)}
            />
          )}
        </div>
        <div className="flex flex-col text-gray-400 py-1 mt-1">
          <input
            className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
            type="tel"
            placeholder="Tel: +250 7899030993"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            autoComplete=""
          />
        </div>
        <div className="flex flex-col text-gray-800 py-1">
          <input
            className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete=""
          />
        </div>
        {/* <div className="flex flex-col text-gray-400 py-1">
          <label htmlFor="profilePicture" className="text-sm">Profile Picture</label>
          <input
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="p-1 rounded-sm focus:border-blue-500 border border-violet-900 bg-white indent-3"
          />
        </div> */}
          <div className="flex flex-col py-1 p-1 rounded-sm focus:border-blue-500 border border-[#20B486]">
          <label htmlFor="profilePicture" className="block text-lg font-semibold mb-2">
          <div className="flex items-center justify-center w-full cursor-pointer">
  <IoCloudUploadOutline className="mr-2" />
  <p className="text-sm text-black">Upload</p>
  </div>

            <input
              type="file"
              id="userprofile"
              name="userprofile"
              accept='image/*'
              className="hidden"
              onChange={handleImageChange}
              required
            />
            </label>
          </div>





        <div className="text-sm text-center">
          <input
            type="checkbox"
            id="terms"
            className="w-5"
            onClick={() => setTerms(!terms)}
          />
          <label>
            Agree To Our{" "}
            <Link
              className="text-[#20B486] hover:text-[#43edb7] font-semibold"
              to="./"
            >
              Terms of Services
            </Link>{" "}
            and{" "}
            <Link
              className="text-[#20B486] hover:text-[#43edb7] font-semibold"
              to="./"
            >
              Privacy Policy
            </Link>
          </label>
        </div>
        <button
          className={`w-full my-1 py-1 shadow-lg text-white shadow-slate-500/50 font-semibold rounded-lg mt-1 ${
            terms
              ? "bg-[#20B486] hover:shadow-teal-500/40"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!terms}
        >
          Create account
        </button>
      </form>
    </div>
  );
}
