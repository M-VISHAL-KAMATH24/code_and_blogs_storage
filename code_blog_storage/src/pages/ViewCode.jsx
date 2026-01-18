import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewCode = () => {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/codes`);
        const data = await res.json();
        setCodes(data);
      } catch (err) {
        console.error("Failed to fetch codes");
      } finally {
        setLoading(false);
      }
    };

    fetchCodes();
  }, []);

  const deleteCode = async (id) => {
    if (!confirm("Delete this code?")) return;

    await fetch(`${import.meta.env.VITE_API_URL}/api/codes/${id}`, {
      method: "DELETE",
    });

    setCodes(codes.filter((c) => c._id !== id));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0d1117] px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-10 text-3xl font-bold">Your Code Snippets</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codes.map((item) => (
            <div
              key={item._id}
              className="rounded-xl border border-white/10 bg-[#161b22] p-6"
            >
              <h2 className="text-xl font-semibold mb-2">
                {item.title}
              </h2>

              <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                {item.description}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate(`/code/${item._id}`)}
                  className="flex-1 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium hover:bg-emerald-600"
                >
                  View
                </button>

                <button
                  onClick={() => navigate(`/edit-code/${item._id}`)}
                  className="flex-1 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium hover:bg-blue-600"
                >
                  Update
                </button>

                <button
                  onClick={() => deleteCode(item._id)}
                  className="flex-1 rounded-md bg-red-500 px-4 py-2 text-sm font-medium hover:bg-red-600"
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

export default ViewCode;
