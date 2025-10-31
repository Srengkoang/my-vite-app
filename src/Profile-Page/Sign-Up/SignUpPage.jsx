import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    dob: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.password || formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(randomOtp);
      console.log("OTP Sent to User:", randomOtp); // Replace with email/SMS later
      setShowOTP(true);
    }
  };

  const verifyOTP = () => {
    if (otp === generatedOtp) {
      alert("✅ Verification successful!");
      navigate("/Home");
    } else {
      alert("❌ Incorrect OTP, try again.");
    }
  };

  const InputField = ({ label, name, type = 'text', value, onChange, error }) => (
    <div className="mb-6 w-full">
      <label htmlFor={name} className="block text-xl font-semibold mb-1 text-[#1a4d0f]">
        {label}
      </label>
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
    <div className="min-h-screen bg-gradient-to-b from-[#C0FFB3] to-[#FFFDEE] py-16 px-4 flex flex-col items-center justify-center font-[Inter]">

      {!showOTP && (
        <div className="w-full max-w-md bg-[#e6ffe3] p-8 sm:p-10 border-2 border-[#1a4d0f] rounded-[24px] shadow-2xl">
          <h1 className="text-4xl font-extrabold text-[#1a4d0f] text-center mb-10">Sign Up</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full text-black">
            <InputField label="Username" name="username" value={formData.username} onChange={handleChange} error={errors.username} />
            <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
            <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} error={errors.password} />
            <InputField label="Confirm Password" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword} />

            <div className="w-full text-center mt-2 mb-8">
              <Link to="/signin" className="text-[#1a4d0f] hover:text-[#4CAF50] text-sm transition duration-150">
                Already have an account? Sign In here.
              </Link>
            </div>

            <button type="submit" className="w-full max-w-[200px] bg-[#1a4d0f] text-white text-xl font-bold py-3 rounded-xl shadow-lg hover:bg-[#28731b] transition duration-200 transform hover:scale-[1.02]">
              Confirm
            </button>
          </form>
        </div>
      )}

      {showOTP && (
        <div className="w-full max-w-md bg-white p-8 border-2 border-[#1a4d0f] rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold text-[#1a4d0f] mb-4">Enter Verification Code</h2>
          <p className="text-lg text-[#1a4d0f] mb-6">We sent a 6-digit code to your email.</p>

          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border-2 border-[#1a4d0f] rounded-lg py-3 text-center text-2xl tracking-widest"
          />

          <button onClick={verifyOTP} className="w-full mt-6 bg-[#1a4d0f] text-white py-3 rounded-xl font-bold hover:bg-[#2f6e25] transition">
            Verify
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;

