import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "@monaco-editor/react";

const EditCode = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/codes`);
        const data = await res.json();
        const found = data.find((item) => item._id === id);

        if (!found) {
          navigate("/codes");
          return;
        }

        setTitle(found.title);
        setDescription(found.description);
        setCode(found.code);
      } catch (err) {
        navigate("/codes");
      } finally {
        setLoading(false);
      }
    };

    fetchCode();
  }, [id, navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/codes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, code }),
      });

      navigate("/codes");
    } catch (err) {
      alert("Failed to update code");
    } finally {
      setSaving(false);
    }
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
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-3xl font-bold">
          Edit Code Snippet
        </h1>

        <form onSubmit={handleUpdate} className="space-y-6">
          {/* Title */}
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-[#161b22] px-4 py-3"
            required
          />

          {/* Description */}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-md border border-white/10 bg-[#161b22] px-4 py-3"
            required
          />

          {/* Monaco Editor */}
          <div className="overflow-hidden rounded-lg border border-white/10">
            <Editor
              height="320px"
              language="javascript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: "on",
                automaticLayout: true,
              }}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={saving}
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-gray-200 disabled:opacity-50"
          >
            {saving ? "Updating..." : "Update Code"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EditCode;
