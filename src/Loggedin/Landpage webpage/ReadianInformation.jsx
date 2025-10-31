import React from "react";
import bookStack from "../../assets/image-1.svg"; // adjust the path if needed

const ReadianInformation = () => {
  return (
    <section className="bg-[#CDEDBC] min-h-[70vh] grid grid-cols-1 md:grid-cols-[1fr_350px] items-center gap-4 px-5 py-16">
      
      {/* Text Content */}
      <div className="text-center md:text-left ml-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a4d0f] mb-6">
          What is <span className="text-[#00A819]">Readian</span>?
        </h2>
        <p className="text-lg text-gray-800 max-w-lg leading-relaxed mx-auto md:mx-0">
          Readian is a platform made for public users to read, write, and share
          stories amongst each other. Let your creativity flow unbounded into
          your works. Write about anything you can think of, from magic wielding
          warlocks, to your average Jim working the local bar.
        </p>
      </div>

      {/* Book Stack Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={bookStack}
          alt="Stack of colorful books"
          className="w-[300px] md:w-[400px] mt-10 md:mt-0 -ml-80"
        />
      </div>

    </section>
  );
};

export default ReadianInformation;
