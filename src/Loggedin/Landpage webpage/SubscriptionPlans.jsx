import React from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate

const plans = [
  {
    name: "Basic",
    price: "Free",
    color: "bg-lime-300",
    features: [
      "Access to public stories",
      "No downloads, read only",
      "Basic search options",
      "Advertisements",
      "Free",
    ],
  },
  {
    name: "Silver",
    price: "5.99$/month",
    color: "bg-gray-300",
    features: [
      "Access to public and premium stories",
      "Maximum 20 downloads monthly",
      "Advanced search options",
      "Less advertisements",
      "5.99$/month",
    ],
  },
  {
    name: "Gold",
    price: "12.99$/month",
    color: "bg-yellow-400",
    features: [
      "Access to public and premium stories",
      "Unlimited downloads",
      "Advanced search options",
      "No advertisements",
      "12.99$/month",
    ],
  },
];

const PricingCard = ({ plan }) => {
  return (
    <div className="bg-white border-2 border-green-900 rounded-3xl p-10 text-center shadow-lg transition-transform duration-300 hover:scale-105">
      <div className={`font-extrabold text-lg p-4 rounded-lg mb-4 border border-green-900 ${plan.color}`}>
        {plan.name}
      </div>
      <ul className="list-none p-0 m-0">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-4 font-medium text-gray-700">{feature}</li>
        ))}
      </ul>
    </div>
  );
};

const SubscriptionPlans = () => {
  const navigate = useNavigate(); // initialize navigate

  return (
    <section className="min-h-screen bg-gradient-to-b from-lime-200 to-yellow-50 p-16 flex flex-col items-center font-sans">
      <div className="text-center mb-12 max-w-xl">
        <h1 className="text-4xl font-extrabold text-green-900 mb-4">Become a subscriber!</h1>
        <p className="text-lg text-gray-800">
          As a subscriber, you can gain access to more content, and even more benefits!
        </p>
      </div>

      <div className="grid gap-8 w-full max-w-6xl grid-cols-1 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>

      <button
        className="mt-12 bg-green-900 text-pink-200 font-bold text-xl py-4 px-8 rounded-xl shadow-lg hover:bg-green-700 hover:scale-105 transition-transform duration-300"
        onClick={() => navigate("/subscription")} // navigate to confirmation page
      >
        Subscribe
      </button>
    </section>
  );
};

export default SubscriptionPlans;
