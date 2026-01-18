import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewSingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then(setBlog);
  }, [id]);

  if (!blog) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <section className="min-h-screen bg-[#0d1117] px-6 py-16 text-white">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate("/blogs")}
          className="text-gray-400 mb-6"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <p className="text-gray-400 mb-6">{blog.description}</p>

        <article className="leading-relaxed whitespace-pre-wrap">
          {blog.content}
        </article>
      </div>
    </section>
  );
};

export default ViewSingleBlog;
