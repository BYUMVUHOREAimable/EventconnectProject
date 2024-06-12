
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReturnLogin = (e) => {
    e.preventDefault();
    navigate("/authentication");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Define the request data
    const requestData = {
      email,
    };

    // Use fetch to make the POST request
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      // Convert the response data to JSON
      const dataRes = await response.json();
      // Display success or error message
      if (dataRes) {
        toast.success(dataRes.message);
      }

    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="pt-3 flex flex-col justify-center items-center w-full">
      {loading && (
        <div className="fixed inset-0 bg-[#20B486] bg-opacity-40 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-[#20B486"></div>
        </div>
      )}
      <div className="grid grid-flow-row gap-3 max-sm:w-full sm:w-4/5 w-1/2 rounded-lg p-3 px-8 max-sm:px-4">
        <h1 className="text-[#20B486] text-xl font-semibold">Forgot password</h1>
        <form onSubmit={handleSubmit} className="justify-center items-center w-11/12 max-sm:w-full">
          <p className="text-[#20B486] my-2">
            Enter your registered email verification.
            <br />
            <span className="text-gray-500 flex">
            You will receive a password reset email soon.
            Follow the link in the email to reset your password.
            </span>
          </p>
            <input
              className="p-1 rounded-sm border border-[#20B486] indent-2 text-gray-800 border-current w-full my-2"
              type="email"
              placeholder="Enter your email here"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          <button
            type="submit"
            className={`w-full shadow-lg shadow-slate-500/50 hover:shadow-slate-500/40 text-white font-semibold rounded-lg p-2 mt-4 bg-[#20B486] hover:bg-[#43edb7] text-center self-center`}
          >
            Send
          </button>
        </form>
        <a
        href="/authentication"
        onClick={handleReturnLogin}
        className="text-violet-900 hover:text-violet-800 hover:underline py-6"
      >
        Return login?
      </a>
      </div>
    </div>
  );
}
