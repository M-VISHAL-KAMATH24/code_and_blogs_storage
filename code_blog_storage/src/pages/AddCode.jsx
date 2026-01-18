import { useState } from "react";

const AddCode = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      code,
    };

    console.log(payload);
    // later → send to backend (Express + Mongo)
  };

  return (
    <section className="min-h-screen bg-[#0d1117] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-10 text-3xl font-bold">
          Add New Code Snippet
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Code Title */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Code Title
            </label>
            <input
              type="text"
              placeholder="e.g. Binary Search in JavaScript"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              placeholder="What does this code do?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-md border border-white/10 bg-[#161b22] px-4 py-3 text-sm outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Code Editor */}
          <div>
            <label className="mb-2 block text-sm text-gray-400">
              Code
            </label>

            <div className="relative rounded-lg border border-white/10 bg-[#0d1117]">
              {/* Fake VS Code Header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>
                <span className="ml-4 text-xs text-gray-400">
                  code.js
                </span>
              </div>

              {/* Textarea */}
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={`// Write your code here\n\nfunction example() {\n  console.log("Hello World");\n}`}
                className="h-80 w-full resize-none bg-transparent p-4 font-mono text-sm leading-relaxed text-gray-200 outline-none"
                spellCheck="false"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-gray-200 transition"
          >
            Save Code
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddCode;
