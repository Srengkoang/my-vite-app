import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get plan info from state
  const { planName = "Unknown", price = "0" } = location.state || {};

  // Format numeric input for card number and security code
  const formatNumericInput = (e) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };

  // Format expiry date as MM/YYYY
  const formatExpiry = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2, 6);
    e.target.value = value.slice(0, 7);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log("Payment initiated!", formData, "Amount:", price);

    // Navigate to payment complete page
    navigate("/payment-complete");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4 font-mono">
      <div className="w-full max-w-3xl bg-white p-6 sm:p-10 rounded-xl shadow-xl border border-gray-200 text-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-black">
          Confirm Payment for{" "}
          <span className="text-black font-extrabold">{planName}</span>
        </h1>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8 text-xs sm:text-sm text-black">
          <p className="mb-1">
            You will be subscribing to the{" "}
            <span className="font-bold text-black">{planName}</span> tier.
            This subscription can be canceled at any time.{" "}
            <span className="font-bold text-black">
              Billing starts today. It will automatically renew each month. No refunds &gt;:(
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <h2 className="text-black font-bold mb-4 border-b border-gray-200 pb-2">
            Your Information
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/3">
                <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                />
              </div>
              <div className="w-full sm:w-1/3">
                <label htmlFor="middleName" className="block text-xs font-medium text-gray-700 mb-1">
                  Middle Name (Optional):
                </label>
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                />
              </div>
              <div className="w-full sm:w-1/3">
                <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-1">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              />
            </div>
          </div>

          <h2 className="text-lg font-bold mb-4 border-b border-gray-200 pb-2">
            Credit Card Details
          </h2>
          <p className="text-xs text-gray-500 italic mb-4">*All fields required</p>

          <div className="space-y-4 mb-8">
            <div>
              <label htmlFor="cardNumber" className="block text-xs font-medium text-gray-700 mb-1">
                Card Number:
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                pattern="\d{13,19}"
                title="Credit card number"
                required
                onInput={formatNumericInput}
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-full sm:w-2/3">
                <label htmlFor="expiry" className="block text-xs font-medium text-gray-700 mb-1">
                  MM/YYYY:
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  placeholder="MM/YYYY"
                  pattern="(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})"
                  required
                  onInput={formatExpiry}
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                />
              </div>
              <div className="w-full sm:w-1/3">
                <label htmlFor="securityCode" className="block text-xs font-medium text-gray-700 mb-1">
                  Security Code:
                </label>
                <input
                  type="text"
                  id="securityCode"
                  name="securityCode"
                  pattern="\d{3,4}"
                  required
                  onInput={formatNumericInput}
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                />
              </div>
            </div>

            <div>
              <label htmlFor="cardholderName" className="block text-xs font-medium text-gray-700 mb-1">
                Cardholder Name:
              </label>
              <input
                type="text"
                id="cardholderName"
                name="cardholderName"
                required
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              />
            </div>

            <div>
              <label htmlFor="streetAddress" className="block text-xs font-medium text-gray-700 mb-1">
                Street Address:
              </label>
              <input
                type="text"
                id="streetAddress"
                name="streetAddress"
                required
                className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-full sm:w-2/3">
                <label htmlFor="city" className="block text-xs font-medium text-gray-700 mb-1">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                />
              </div>
              <div className="w-full sm:w-1/3">
                <label htmlFor="postalCode" className="block text-xs font-medium text-gray-700 mb-1">
                  Postal Code:
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  required
                  className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-black"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center pt-4 border-t border-gray-200">
            <p className="text-base font-bold mb-6 text-center text-red-600">
              Amount to be paid:{" "}
              <span className="text-yellow-600 font-extrabold">{price}</span>
            </p>
            <button
              type="submit"
              className="px-8 py-3 bg-red-900 text-white font-bold rounded-xl shadow-md hover:bg-red-800 transition-colors duration-200"
            >
              Confirm Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
