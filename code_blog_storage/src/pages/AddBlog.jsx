import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, content }),
    });

    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="bg-[#161b22] p-8 rounded-xl text-center text-white">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Blog Published 🎉
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-black px-6 py-2 rounded-full"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0d1117] px-6 py-16 text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Add New Blog</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Blog title"
            className="w-full bg-[#161b22] p-3 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            placeholder="Short description"
            className="w-full bg-[#161b22] p-3 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <textarea
            placeholder="Write your blog here..."
            className="w-full h-80 bg-[#161b22] p-4 rounded-md"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <button
            disabled={loading}
            className="bg-white text-black px-8 py-3 rounded-full"
          >
            {loading ? "Publishing..." : "Publish Blog"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddBlog;
