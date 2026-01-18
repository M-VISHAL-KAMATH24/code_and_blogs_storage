import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/blogs`)
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  return (
    <section className="min-h-screen bg-[#0d1117] px-6 py-16 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-10">Blogs</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-[#161b22] p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-400 mb-4 line-clamp-2">
                {blog.description}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => navigate(`/blog/${blog._id}`)}
                  className="bg-emerald-500 px-4 py-2 rounded-md text-sm"
                >
                  View
                </button>

                <button
                  onClick={() => navigate(`/edit-blog/${blog._id}`)}
                  className="bg-blue-500 px-4 py-2 rounded-md text-sm"
                >
                  Edit
                </button>

                <button
                  onClick={async () => {
                    await fetch(
                      `${import.meta.env.VITE_API_URL}/${blog._id}`,
                      { method: "DELETE" }
                    );
                    setBlogs(blogs.filter(b => b._id !== blog._id));
                  }}
                  className="bg-red-500 px-4 py-2 rounded-md text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewBlogs;
