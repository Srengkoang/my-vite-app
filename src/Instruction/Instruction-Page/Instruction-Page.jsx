import React from "react";

const HelpPage = () => {
  // FAQ Data
  const instructions = [
    {
      question: "How do I use this site?",
      answer:
        "You can start reading any story from the trending section on the homepage or click on 'Browse' to explore more stories.",
    },
    {
      question: "How do I sign up for an account? What are the benefits?",
      answer:
        "Click 'Sign Up' on the navigation bar and fill in your details. With an account, you can like, follow, and write stories.",
    },
  ];

  const faqs = [
    {
      question: "Can I begin writing immediately?",
      answer:
        "No, you need an account to access the writing feature. Please follow our content guidelines.",
    },
    {
      question: "Is Readian free?",
      answer:
        "Yes, Readian is free to read. Some actions like liking or writing need an account. Subscriptions unlock premium features like downloads.",
    },
  ];

  return (
    <div className="flex-grow min-h-screen bg-gradient-to-b from-green-50 to-yellow-50 py-12 px-4 flex justify-center font-sans">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg border border-green-700">
        {/* Title */}
        <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">
          Help & FAQs
        </h1>

        {/* Instructions */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Instructions
          </h2>
          {instructions.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">
                {item.question}
              </h3>
              <p className="text-gray-600 mt-1">{item.answer}</p>
            </div>
          ))}
        </section>

        {/* Divider */}
        <hr className="border-gray-200 my-6" />

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">FAQs</h2>
          {faqs.map((item, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-medium text-gray-800">
                {item.question}
              </h3>
              <p className="text-gray-600 mt-1">{item.answer}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HelpPage;
