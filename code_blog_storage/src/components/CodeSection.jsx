import { Link } from "react-router-dom";

const CodeSection = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Code Vault
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Add Code Card */}
          <div className="group relative rounded-2xl overflow-hidden border border-white/10">
            {/* Background Image */}
            <img
              src="/images/add-code.jpg"
              alt="Add Code"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition"></div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Add Code
              </h3>
              <p className="text-gray-300 mb-6">
                Store your code snippets securely and access them anytime.
              </p>

              <Link
                to="/add-code"
                className="inline-block w-max rounded-full bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition"
              >
                Add Code →
              </Link>
            </div>
          </div>

          {/* View Codes Card */}
          <div className="group relative rounded-2xl overflow-hidden border border-white/10">
            {/* Background Image */}
            <img
              src="/images/view-code.jpg"
              alt="View Codes"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition"></div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-2">
                View Codes
              </h3>
              <p className="text-gray-300 mb-6">
                Browse, search, and manage all your saved code snippets.
              </p>

              <Link
                to="/codes"
                className="inline-block w-max rounded-full bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition"
              >
                View Codes →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
