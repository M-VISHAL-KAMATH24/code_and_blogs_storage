import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "@monaco-editor/react";

const AddCode = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("// Write your code here");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/codes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, code }),
      });

      if (!res.ok) {
        throw new Error("Failed to save code");
      }

      setSuccess(true);
      setTitle("");
      setDescription("");
      setCode("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ SUCCESS SCREEN
  if (success) {
    return (
      <section className="min-h-screen bg-[#0d1117] flex items-center justify-center px-4">
        <div className="max-w-md rounded-2xl border border-white/10 bg-[#161b22] p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-green-400">
            Code Saved Successfully 🎉
          </h2>
          <p className="mb-6 text-sm text-gray-400">
            Your code snippet has been securely stored in the database.
          </p>

          <button
            onClick={() => navigate("/")}
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition"
          >
            Go Back Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0d1117] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-3xl font-bold">
          Add New Code Snippet
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Error */}
          {error && (
            <p className="rounded-md border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              {error}
            </p>
          )}

          {/* Title */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Code Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Binary Search in JavaScript"
              className="w-full rounded-md border border-white/10 bg-[#161b22] px-4 py-3 text-sm outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Short Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What does this code do?"
              className="w-full rounded-md border border-white/10 bg-[#161b22] px-4 py-3 text-sm outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Monaco Code Editor */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Code
            </label>

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
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Code"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddCode;
