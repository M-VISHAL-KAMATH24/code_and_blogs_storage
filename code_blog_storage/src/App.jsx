import { Routes, Route } from "react-router-dom";

// Home sections
import Hero from "./components/Hero";
import CodeSection from "./components/CodeSection";
import BlogSection from "./components/BlogSection";

// Code pages
import AddCode from "./pages/AddCode";
import ViewCode from "./pages/ViewCode";
import EditCode from "./pages/EditCode";
import ViewSingleCode from "./pages/ViewSingleCode";

// Blog pages
import AddBlog from "./pages/AddBlog";
import ViewBlogs from "./pages/ViewBlogs";
import EditBlog from "./pages/EditBlog";
import ViewSingleBlog from "./pages/ViewSingleBlog";

const App = () => {
  return (
    <Routes>
      {/* HOME */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <CodeSection />
            <BlogSection />
          </>
        }
      />

      {/* CODE ROUTES */}
      <Route path="/add-code" element={<AddCode />} />
      <Route path="/codes" element={<ViewCode />} />
      <Route path="/code/:id" element={<ViewSingleCode />} />
      <Route path="/edit-code/:id" element={<EditCode />} />

      {/* BLOG ROUTES */}
      <Route path="/add-blog" element={<AddBlog />} />
      <Route path="/blogs" element={<ViewBlogs />} />
      <Route path="/blog/:id" element={<ViewSingleBlog />} />
      <Route path="/edit-blog/:id" element={<EditBlog />} />
    </Routes>
  );
};

export default App;
