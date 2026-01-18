import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Blogs Vault
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Add Blog Card */}
          <div className="group relative rounded-2xl overflow-hidden border border-white/10">
            {/* Background Image */}
            <img
              src="/images/blog1.jpg"
              alt="Add Blog"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition"></div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Add Blog
              </h3>
              <p className="text-gray-300 mb-6">
                Write and publish technical blogs, notes, and ideas.
              </p>

              <Link
                to="/add-blog"
                className="inline-block w-max rounded-full bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition"
              >
                Add Blog →
              </Link>
            </div>
          </div>

          {/* View Blogs Card */}
          <div className="group relative rounded-2xl overflow-hidden border border-white/10">
            {/* Background Image */}
            <img
              src="/images/blog2.jpeg"
              alt="View Blogs"
              className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition"></div>

            {/* Content */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-semibold text-white mb-2">
                View Blogs
              </h3>
              <p className="text-gray-300 mb-6">
                Browse, edit, and manage all your written blogs.
              </p>

              <Link
                to="/blogs"
                className="inline-block w-max rounded-full bg-white px-6 py-2 text-sm font-semibold text-black hover:bg-gray-200 transition"
              >
                View Blogs →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
