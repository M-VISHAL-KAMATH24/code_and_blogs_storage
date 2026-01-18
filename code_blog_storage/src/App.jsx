import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import CodeSection from "./components/CodeSection";
import AddCode from "./pages/AddCode";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <CodeSection />
          </>
        }
      />
      <Route path="/add-code" element={<AddCode />} />
      <Route path="/codes" element={<h1>View Codes</h1>} />
    </Routes>
  );
};

export default App;
