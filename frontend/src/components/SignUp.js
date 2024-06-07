import React, { useState } from "react";
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
    userprofile: null,
  });
  const [visible, setVisible] = useState(false);
  const [terms, setTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    if (keys.length === 1) {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData(prevState => ({
        ...prevState,
        [keys[0]]: {
          ...prevState[keys[0]],
          [keys[1]]: value
        }
      }));
    }
  };

  const handleImageChange =  async(e)=>{
    const data = await ImagetoBase64(e.target.files[0])
    setFormData((preve)=>{
        return{
          ...preve,
          userprofile : data
        }
    })

}

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields and email/password format
    if (!formData.fullName || !formData.email || !formData.password || !formData.username || !formData.phoneNumber || !formData.userprofile) {
        toast.error("Please enter all required fields.");
        return;
    }

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
        toast.error("Invalid email format");
        return;
    }

    if (formData.password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        return;
    }

    setLoading(true);

    try {

        // Make API request
        const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        // Parse JSON response
        const dataRes = await response.json();
        toast(dataRes.message)

        // Check response status
        if (!response.ok) {
            if (response.status === 401) {
                toast.error("Failed to create account");
            } else if (response.status === 500) {
                toast.error("Server error");
            } else {
                toast.error("Something went wrong");
            }
            return;
        }

        // Display success or error message
        if (dataRes) {
            toast.success(dataRes.message);
            navigate("/authentication");
        } else {
            toast.error(dataRes.message);
        }
    } catch (error) {
        // Handle error cases
        console.error("Error during form submission:", error);
        if (error.message === "Network Error") {
            toast.error("Network error, please check your internet connection");
        } else {
            toast.error(error.message);
        }
    } finally {
        setLoading(false);
    }
};
const googleSignup = async () => {
  setLoading(true);

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/google`);
    // Handle successful response (likely a redirect)
    if (response.ok) {
      window.location.href = response.url; // Follow the redirect URL
    } else {
      console.error('Error initiating Google signup:', await response.text());
      setLoading(false); // Handle errors appropriately
    }
  } catch (error) {
    console.error('Error initiating Google signup:', error);
    setLoading(false); // Handle errors appropriately
  }
};

console.log(`${process.env.REACT_APP_API_URL}/auth/google/callback`);
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
      <div className="flex flex-col w-1/2 pt-3 self-center relative" id="offPro" onClick={googleSignup}>
        <Link to="./" className="p-1 bg-[#20B486] hover:bg-[#43edb7] hover:shadow-slate-950/30 shadow-lg text-white text-center relative w-full max-h-10 flex justify-center rounded-lg gap-2 mb-4 cursor-pointer" >
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
    <label htmlFor="userprofile" className="text-sm">Profile Picture</label>
    <input
      type="file"
      id="userprofile"
      name="userprofile"
      accept='image/*'
      className="hidden"
      onChange={onChange}
      required 
    />
  </div>
);

export default SignUp;
