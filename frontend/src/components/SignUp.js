import React, { useState, useCallback } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineGoogle } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { ImagetoBase64 } from './utility/ImagetoBase64.js';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    phoneNumber: "",
    password: "",
    userProfile: null,
  });
  const [visible, setVisible] = useState(false);
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleImageChange = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    setFormData((prevData) => ({ ...prevData, userProfile: data }));
  };

  const validateForm = () => {
    const { fullName, email, password, username, phoneNumber, userProfile } = formData;
    if (!fullName || !email || !password || !username || !phoneNumber || !userProfile) {
      toast.error("Please enter all required fields.");
      return false;
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      toast.error("Invalid email format");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/event`, {
        method: "POST",
        body: formDataToSend,
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

  const googleSignup = () => {
    setLoading(true);
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
        <InputField type="text" placeholder="Your Full Names" name="fullName" value={formData.fullName} onChange={handleChange} />
        <InputField type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
        <PasswordField visible={visible} setVisible={setVisible} value={formData.password} onChange={handleChange} />
        <InputField type="tel" placeholder="Tel: +250 7899030993" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        <InputField type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
        <FileInputField onChange={handleImageChange} />
        <div className="text-sm text-center">
          <input type="checkbox" id="terms" className="w-5" onClick={() => setTerms(!terms)} />
          <label>
            Agree To Our{" "}
            <Link className="text-[#20B486] hover:text-[#43edb7] font-semibold" to="./">Terms of Services</Link>{" "}
            and{" "}
            <Link className="text-[#20B486] hover:text-[#43edb7] font-semibold" to="./">Privacy Policy</Link>
          </label>
        </div>
        <button className={`w-full my-1 py-1 shadow-lg text-white shadow-slate-500/50 font-semibold rounded-lg mt-1 ${terms ? "bg-[#20B486] hover:shadow-teal-500/40" : "bg-gray-400 cursor-not-allowed"}`} disabled={!terms}>
          Create account
        </button>
      </form>
    </div>
  );
};

const InputField = ({ type, placeholder, name, value, onChange }) => (
  <div className="flex flex-col text-gray-800 py-1">
    <input
      className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      autoComplete=""
    />
  </div>
);

const PasswordField = ({ visible, setVisible, value, onChange }) => (
  <div className="flex flex-col relative text-gray-400 py-1">
    <input
      className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 text-gray-700"
      type={visible ? "text" : "password"}
      placeholder="Password"
      name="password"
      value={value}
      onChange={onChange}
      autoComplete=""
    />
    {visible ? (
      <AiOutlineEye className="absolute top-3 right-1 cursor-pointer" onClick={() => setVisible(false)} />
    ) : (
      <AiOutlineEyeInvisible className="absolute top-3 right-1 cursor-pointer" onClick={() => setVisible(true)} />
    )}
  </div>
);

const FileInputField = ({ onChange }) => (
  <div className="flex flex-col text-gray-400 py-1">
    <label htmlFor="profilePicture" className="text-sm">Profile Picture</label>
    <input type="file" id="profilePicture" accept="image/*" className="p-1 rounded-sm focus:border-blue-500 border border-violet-900 bg-white indent-3" onChange={onChange} />
  </div>
);

export default SignUp;
