import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required.';
    if (!formData.password || formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted Successfully:', formData);
      alert('Sign In Successful! (Check console for data)');
    } else {
      console.log('Validation Failed', errors);
    }
  };

  const InputField = ({ label, name, type = 'text', value, onChange, error }) => (
    <div className="mb-6 w-full">
      <label htmlFor={name} className="block text-xl font-semibold mb-1 text-[#1a4d0f]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className={`w-full p-3 border-2 rounded-lg text-lg focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-300' : 'border-[#1a4d0f] focus:ring-[#4CAF50]'
        } transition duration-150`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#C0FFB3] to-[#FFFDEE] flex flex-col items-center justify-center font-[Inter]">
      <div className="w-full max-w-md bg-[#e6ffe3] p-8 sm:p-10 border-2 border-[#1a4d0f] rounded-[24px] shadow-2xl">
        <h1 className="text-4xl font-extrabold text-[#1a4d0f] text-center mb-10">
          Sign In
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
          <InputField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <div className="w-full text-center mt-2 mb-8">
            <p className="mt-2 text-gray-600 text-sm">
              Don't have an account?{' '}
              <Link
              to="/signup"
              className="ml-1 font-semibold text-[#1a4d0f] hover:text-[#4CAF50] transition duration-150"
              >
             Make one here.
            </Link>  
            </p>
          </div>

          <button
            type="submit"
            className="w-full max-w-[200px] bg-[#1a4d0f] text-white text-xl font-bold py-3 rounded-xl shadow-lg hover:bg-[#28731b] transition duration-200 transform hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

