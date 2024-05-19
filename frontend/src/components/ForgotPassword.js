
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
    <div className="w-full flex flex-col justify-center items-center">
            {loading && (
        <div className="fixed inset-0 bg-purple-500 bg-opacity-40 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-purple-900"></div>
        </div>
      )}
      <div className="flex flex-col justify-center self-center p-3">
        <h1 className="text-purple-900 text-xl font-semibold">
          Forgot password
        </h1>
        <form onSubmit={handleSubmit}>
          <p className="text-purple-900 ml-5 mt-2">
            Enter your registered email verification.
            <br />
            <span className="text-gray-500">
              We will share link to reset your password on your email.
            </span>
          </p>
          <div className="flex flex-col w-full px-5 my-6">
            <input
              className="p-1 rounded-sm border border-purple-800 indent-2 text-gray-800 border-current"
              type="email"
              placeholder="Enter your email here"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`w-11/12 shadow-lg shadow-slate-500/50 hover:shadow-slate-500/40 text-white font-semibold rounded-lg p-2 mt-4 bg-purple-800 hover:bg-purple-600 text-center self-center`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
