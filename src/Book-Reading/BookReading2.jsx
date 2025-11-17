import React from "react";
import { useNavigate } from "react-router-dom";

const BookReading2 = () => {
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate("/Book-Reading");
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBook = () => {
    console.log("Back to book clicked");
  };

  const handleLike = () => {
    console.log("Like button clicked");
  };

  return (
    <div className="w-screen relative bg-[#1A5632] border-t-[6px] border-b-[6px] overflow-hidden flex justify-center py-10">
      {/* Main reading card */}
      <div className="w-[1000px] h-[1370px] relative overflow-hidden shadow-lg">

        {/* Background layers */}
        <div className="w-[1000px] h-[1370px] left-0 top-0 absolute bg-red-100 rounded-bl-full" />
        <div className="w-56 h-28 left-0 top-0 absolute bg-green-900 rounded-br-[50px]" />
        <div className="w-16 h-12 left-[228px] top-0 absolute bg-green-900" />
        <div className="w-16 h-12 left-0 top-[114px] absolute bg-green-900" />
        <div className="w-40 h-28 left-0 top-[114px] absolute bg-red-100" />
        <div className="w-40 h-28 left-[228px] top-0 absolute bg-red-100" />

        {/* Header */}
        <div className="w-32 h-10 left-[52px] top-[37px] absolute rounded-[30px] border border-red-100" />
        <div className="left-[70px] top-[42px] absolute text-red-100 text-2xl">
          Reading
        </div>

        {/* White reading background */}
        <div className="w-[1000px] h-[1030px] left-0 top-[340px] absolute bg-white rounded-bl-[30%]" />

        {/* Chapter Info */}
        <div className="w-[1000px] h-80 left-0 top-0 absolute overflow-hidden">
          <div className="left-[327px] top-[95px] absolute text-center">
            <span className="text-black text-3xl font-semibold">
              Chapter 2<br />
            </span>
            <span className="text-black text-3xl">
              The Lanterns of Hollow Street
            </span>
          </div>

          <div className="left-[462px] top-[179px] absolute text-black text-base">
            By: Leonard C. Spani
          </div>

          <div
            className="left-[327px] top-[274px] absolute text-black text-base cursor-pointer"
            onClick={handleBackToBook}
          >
            Back to book
          </div>

          <div
            className="left-[581px] top-[274px] absolute text-black text-base cursor-pointer"
            onClick={handleLike}
          >
            Like ❤️
          </div>
        </div>

        {/* NEW STORY TEXT */}
        <div className="w-[500px] h-[859px] left-[250px] top-[390px] absolute text-black text-base overflow-y-auto leading-relaxed whitespace-pre-line">

          {`As night settled over Evergreen Hollow, a soft amber glow began filling the narrow curves of Hollow Street. 
The lanterns—hand-crafted glass spheres that had been suspended for decades—started flickering to life one by one, 
as though waking from a gentle sleep.

No one in town knew exactly who first created the lanterns. Some said an old traveler forged them from melted 
starlight; others claimed they were enchanted by a quiet witch who lived deep in the woods. But everyone agreed 
on one thing: the lanterns never shone the same way twice.

Tonight, they glimmered with a warm, honey-gold tint. The writer walked beneath them, her notebook pressed 
against her chest. Each lantern hummed faintly, almost like it was whispering secrets into the cool evening air.

With every step, new scenes unfolded around her:  
• A baker locking his shop, humming a tune older than the town itself.  
• A child skipping in circles, chasing her own shadow.  
• A cat perched on a wooden fence, tail swishing like a metronome.  

The lanterns illuminated everything with a dream-like softness, turning ordinary life into something surreal.

As she reached the center of the street, a sudden breeze drifted through, causing all the lanterns to sway in perfect 
unison. Their light rippled like water. In that moment, she felt something—an emotion she hadn’t been ready to name.

It felt like the hollow inside her chest had been gently filled. Not with answers, but with wonder.

And as the lanterns continued glowing above her, she began writing the first line of a story she knew would change 
her life forever.`}

        </div>

        {/* Navigation buttons */}
        <div
          className="left-[339px] top-[1299px] absolute text-black text-base cursor-pointer"
          onClick={handlePrevious}
        >
          Previous
        </div>
        <div
          className="left-[466px] top-[1299px] absolute text-black text-base cursor-pointer"
          onClick={handleBackToTop}
        >
          Back to Top
        </div>
        <div
          className="left-[622px] top-[1299px] absolute text-black text-base cursor-pointer"
          onClick={() => navigate("/Book-Reading3")}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default BookReading2;
