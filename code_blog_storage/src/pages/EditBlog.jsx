import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
        setContent(data.content);
      });
  }, [id]);

  const updateBlog = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/api/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, content }),
    });

    navigate("/blogs");
  };

  return (
    <section className="min-h-screen bg-[#0d1117] px-6 py-16 text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Edit Blog</h1>

        <form onSubmit={updateBlog} className="space-y-4">
          <input
            className="w-full bg-[#161b22] p-3 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            className="w-full bg-[#161b22] p-3 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <textarea
            className="w-full h-80 bg-[#161b22] p-4 rounded-md"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <button className="bg-white text-black px-8 py-3 rounded-full">
            Update Blog
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditBlog;
