import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";

const ViewSingleCode = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchCode = async () => {
      const res = await fetch(`http://localhost:5000/api/codes/${id}`);
      const result = await res.json();
      setData(result);
    };

    fetchCode();
  }, [id]);

  useEffect(() => {
    Prism.highlightAll();
  }, [data]);

  const copyCode = async () => {
    await navigator.clipboard.writeText(data.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0d1117] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <button
          onClick={() => navigate("/codes")}
          className="mb-6 text-sm text-gray-400 hover:text-white"
        >
          ← Back
        </button>

        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-400 mb-6">{data.description}</p>

        <div className="relative">
          <button
            onClick={copyCode}
            className="absolute right-3 top-3 rounded-md bg-white px-3 py-1 text-xs font-semibold text-black hover:bg-gray-200"
          >
            {copied ? "Copied!" : "Copy"}
          </button>

          <pre className="rounded-lg bg-[#0d1117] p-4 overflow-auto">
            <code className="language-javascript">
              {data.code}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default ViewSingleCode;
