import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showOTP, setShowOTP] = useState(false);
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");

  const refs = useRef([]);

  // Smooth OTP typing handler
  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/\D/g, ""); // only digits
    const newDigits = [...otpDigits];
    newDigits[idx] = value;
    setOtpDigits(newDigits);

    if (value && idx < 5) refs.current[idx + 1].focus(); // move forward
    else if (!value && idx > 0) refs.current[idx - 1].focus(); // move back on delete
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(randomOtp);
      console.log("OTP Sent to User:", randomOtp); // Replace with real email/SMS
      setShowOTP(true);
    }
  };

  const verifyOTP = () => {
    if (otpDigits.join("") === generatedOtp) {
      alert("✅ Verification successful!");
      navigate("/Home");
    } else {
      alert("❌ Incorrect OTP, try again.");
    }
  };

  const InputField = ({ label, name, type = "text", value, onChange, error }) => (
    <div className="mb-6 w-full">
      <label htmlFor={name} className="block text-xl font-semibold mb-1 text-black">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 border-2 rounded-lg text-lg focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-300" : "border-black focus:ring-black"
        } transition duration-150 text-black`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#C0FFB3] py-16 px-4 flex flex-col items-center justify-center font-[Inter] text-black">
      {/* SIGNUP FORM */}
      {!showOTP && (
        <div className="w-full max-w-md bg-[#e6ffe3] p-8 sm:p-10 border-2 border-black rounded-[24px] shadow-2xl">
          <h1 className="text-4xl font-extrabold text-black text-center mb-10">Sign Up</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <InputField
              label="Username"
              name="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              error={errors.username}
            />
            <InputField
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            />
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={errors.email}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              error={errors.password}
            />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              error={errors.confirmPassword}
            />

            <div className="w-full text-center mt-2 mb-8">
              <Link
                to="/signin"
                className="text-black hover:text-gray-700 text-sm transition duration-150"
              >
                Already have an account? Sign In here.
              </Link>
            </div>

            <button
              type="submit"
              className="w-full max-w-[200px] bg-black text-white text-xl font-bold py-3 rounded-xl shadow-lg hover:bg-gray-800 transition duration-200 transform hover:scale-[1.02]"
            >
              Confirm
            </button>
          </form>
        </div>
      )}

      {/* OTP VERIFICATION */}
      {showOTP && (
        <div className="w-full max-w-md bg-white p-8 border-2 border-black rounded-2xl shadow-xl text-center">
          <h2 className="text-3xl font-bold text-black mb-4">Enter Verification Code</h2>
          <p className="text-lg text-black mb-6">We sent a 6-digit code to your email.</p>

          <div className="flex justify-center gap-2 mb-4">
            {otpDigits.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (refs.current[idx] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, idx)}
                className="w-12 h-12 text-center text-2xl border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition"
              />
            ))}
          </div>

          <button
            onClick={verifyOTP}
            className="w-full mt-6 bg-[#1a4d0f] text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition"
          >
            Verify
          </button>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
