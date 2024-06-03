
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const {id, token} = useParams()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/reset-password/${id}/${token}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password })
        }
      );

      const dataRes = await response.json() 
      toast(dataRes.message)
            // Display success or error message
            if (dataRes) {
              toast.success(dataRes.message);
              navigate("/authentication");
            }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Ensure loading state is reset even on errors
    }
  };

  return (
    <div className="pt-3 flex flex-col justify-center items-center w-full">
      {loading && (
        <div className="fixed inset-0 bg-[#20B486] bg-opacity-40 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[#20B486]"></div>
        </div>
      )}
      <div className="flex flex-col text-gray-400 justify-center items-center self-center max-sm:w-full sm:w-4/5">
        <p className="text-[#20B486] text-xl font-semibold">Reset password</p>
        <form className="w-10/12 max-sm:w-11/12 my-5" onSubmit={handleSubmit}>
          <input 
          className="p-1 rounded-sm focus:border-blue-500 border border-[#20B486] bg-white indent-3 w-full" 
          type={visible ? "text" : "password"}
          name="password" 
           placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="" />
          {visible ? (
            <AiOutlineEye className="absolute top-3 right-1 cursor-pointer" onClick={() => setVisible(false)} />) : (
            <AiOutlineEyeInvisible className="absolute top-3 right-1 cursor-pointer" onClick={() => setVisible(true)}/>
          )}
          <button type="submit" className="shadow-lg shadow-slate-500/50 hover:shadow-slate-500/40 text-white bg-[#20B486] hover:bg-[#43edb7] font-semibold rounded-sm w-full p-2 my-3">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
