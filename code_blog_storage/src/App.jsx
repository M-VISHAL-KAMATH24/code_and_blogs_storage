import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import CodeSection from "./components/CodeSection";
import AddCode from "./pages/AddCode";
import ViewCode from "./pages/ViewCode";
import EditCode from "./pages/EditCode";
import ViewSingleCode from "./pages/ViewSingleCode";



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
      <Route path="/codes" element={<ViewCode />} />
      <Route path="/edit-code/:id" element={<EditCode />} />
      <Route path="/code/:id" element={<ViewSingleCode />} />


    </Routes>
  );
};

export default App;
