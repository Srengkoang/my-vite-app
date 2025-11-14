import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [showOTP, setShowOTP] = useState(false);
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState('');

  const refs = useRef([]);

  // OTP input handler
  const handleOtpChange = (e, idx) => {
    const value = e.target.value.replace(/\D/g, '');
    const newDigits = [...otpDigits];
    newDigits[idx] = value;
    setOtpDigits(newDigits);

    if (value && idx < 5) refs.current[idx + 1].focus();
    else if (!value && idx > 0) refs.current[idx - 1].focus();
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
      // generate OTP
      const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(randomOtp);
      console.log('OTP Sent to User:', randomOtp); // replace with actual email/SMS
      setShowOTP(true);
    }
  };

  const verifyOTP = () => {
    if (otpDigits.join('') === generatedOtp) {
      alert('✅ Sign In Successful!');
      navigate('/Home'); // redirect after success
    } else {
      alert('❌ Incorrect OTP, try again.');
    }
  };

  const InputField = ({ label, name, type = 'text', value, onChange, error }) => (
    <div className="mb-6 w-full">
      <label htmlFor={name} className="block text-xl font-semibold mb-1 text-[#1a4d0f]">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 border-2 rounded-lg text-lg focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-300' : 'border-[#1a4d0f] focus:ring-[#4CAF50]'
        } transition duration-150`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#C0FFB3] to-[#FFFDEE] flex flex-col items-center justify-center font-[Inter] text-black">
      {!showOTP && (
        <div className="w-full max-w-md bg-[#e6ffe3] p-8 sm:p-10 border-2 border-[#1a4d0f] rounded-[24px] shadow-2xl">
          <h1 className="text-4xl font-extrabold text-[#1a4d0f] text-center mb-10">Sign In</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full ">
            <InputField
              label="Username"
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              error={errors.username}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
            />

            <div className="w-full text-center mt-2 mb-8">
              <p className="mt-2 text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link to="/signup" className="ml-1 font-semibold text-[#1a4d0f] hover:text-[#4CAF50] transition duration-150">
                  Sign Up here.
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
      )}

      {showOTP && (
        <div className="w-full max-w-md bg-white p-8 border-2 border-[#1a4d0f] rounded-[24px] shadow-2xl text-center">
          <h2 className="text-3xl font-bold text-[#1a4d0f] mb-4">Enter Verification Code</h2>
          <p className="text-lg text-[#1a4d0f] mb-6">We sent a 6-digit code to your email.</p>

          <div className="flex justify-center gap-2 mb-4">
            {otpDigits.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (refs.current[idx] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, idx)}
                className="w-12 h-12 text-center text-2xl border-2 border-[#1a4d0f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4CAF50] transition"
              />
            ))}
          </div>

          <button
            onClick={verifyOTP}
            className="w-full mt-6 bg-[#1a4d0f] text-white py-3 rounded-xl font-bold hover:bg-[#28731b] transition"
          >
            Verify
          </button>
        </div>
      )}
    </div>
  );
};

export default SignInForm;


