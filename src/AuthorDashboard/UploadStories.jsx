import { useState } from "react";

export default function UploadStories({ addStories }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    status: "Ongoing",
    chapters: 1,
    views: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStory(form);
    alert("Story submitted! (In real system: This would wait for admin approval)");
  };

  return (
    <div className="p-10 max-w-xl mx-auto font-mono">
      <h1 className="text-3xl font-bold mb-6">Upload New Story</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input className="w-full p-2 border" name="title" placeholder="Title" onChange={handleChange} />

        <input className="w-full p-2 border" name="author" placeholder="Author" onChange={handleChange} />

        <textarea className="w-full p-2 border" name="description" placeholder="Description" onChange={handleChange} />

        <select className="w-full p-2 border" name="status" onChange={handleChange}>
          <option>Ongoing</option>
          <option>Completed</option>
        </select>

        <input className="w-full p-2 border" type="number" min="1" name="chapters" onChange={handleChange} />

        <button className="bg-green-700 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
