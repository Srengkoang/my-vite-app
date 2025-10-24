import React from "react";
import { useNavigate } from "react-router-dom";
import PaymentConfirmation from "./SubscriptionPlans";

const PLANS = [
  { 
    name: "Basic", 
    price: "Free", 
    priceDisplay: "Free",
    features: ["Public books only", "No downloads", "Read only", "Basic search", "Basic ads"], 
    isFree: true, 
    color: "bg-[#C2F793]",
    textColor: "text-black",
    buttonText: "Default",
    cardBorder: "border-[#79B055]"
  },
  { 
    name: "Silver", 
    price: "5.99$", 
    priceDisplay: "5.99$",
    features: ["Full access to all books", "20 downloads a month", "Advanced search", "Partial ads"], 
    isFree: false, 
    color: "bg-[#D3D3D3]",
    textColor: "text-black",
    buttonText: "Subscribe",
    cardBorder: "border-[#A9A9A9]"
  },
  { 
    name: "Gold", 
    price: "12.99$", 
    priceDisplay: "12.99$",
    features: ["Early access to all books", "Unlimited downloads", "Advanced search", "No ads"], 
    isFree: false, 
    color: "bg-[#FFCC33]",
    textColor: "text-black",
    buttonText: "Subscribe",
    cardBorder: "border-[#FFA500]"
  }
];

export default function SubscriptionPlans() {
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    if (!plan.isFree) {
      navigate("/payment-confirmation", { state: { planName: plan.name, price: plan.price } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-16 font-mono bg-[#E0F8E0]">
      <header className="text-center mb-10 px-4">
        <h1 className="text-5xl font-bold text-[#79B055] mb-4 tracking-wider">
          Choose Your Plan
        </h1>
      </header>

      <div className="flex flex-wrap justify-center items-start gap-8">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col items-center p-0 m-3 w-72 h-[420px] rounded-[30px] shadow-lg transition-all duration-300 transform hover:scale-[1.03] border-4 border-b-8 ${plan.cardBorder} ${plan.color}`}
          >
            {/* Plan Header */}
            <div className={`w-full px-4 pt-6 pb-2 rounded-t-[26px] text-center shadow-md ${plan.color} ${plan.textColor}`}>
              <h3 className="text-3xl font-normal uppercase mb-1 tracking-wider">{plan.name}</h3>
              <p className="text-4xl font-extrabold pb-3">{plan.priceDisplay}</p>
            </div>

            {/* Features List */}
            <div className="flex-grow w-11/12 bg-white rounded-xl shadow-inner mt-4 mb-4 p-4 flex flex-col justify-center">
              <ul className="text-base space-y-2 text-black">
                {plan.features.map((feature, index) => (
                  <li key={index} className="leading-tight text-center">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe / Default Button */}
            <button
              onClick={() => handleSubscribe(plan)}
              disabled={plan.isFree}
              className={`mt-auto mb-6 w-5/6 py-3 font-medium rounded-full transition-all duration-200 text-lg
                bg-white border-2 border-white text-black
                hover:bg-gray-100 active:scale-[0.98]
                ${plan.isFree ? "cursor-not-allowed opacity-70" : "cursor-pointer"}
              `}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
