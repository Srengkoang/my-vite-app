import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate("/SignIn");
  };

  return (
    <section className="w-full min-h-[100vh] flex flex-col items-center justify-center px-4 py-12 text-center bg-gradient-to-b from-[#CDEDBC] to-[#FFFDEE] text-black">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-4 max-w-xl">
        Sign In to access more features
      </h3>
      <p className="text-lg md:text-xl max-w-lg mb-8 text-gray-800 leading-relaxed">
        With an account, you can start writing your own stories, leave likes
        on other people's works, and more!
      </p>
      <button
        onClick={handleSignInClick}
        className="px-10 py-3 bg-[#1a4d0f] text-pink-400 rounded-lg text-lg font-semibold shadow-lg hover:bg-[#2e7a1e] hover:-translate-y-1 transition duration-200"
      >
        Sign In
      </button>
    </section>
  );
};

export default SignIn;

