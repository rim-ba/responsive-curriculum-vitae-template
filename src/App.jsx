import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import LandingPage from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import MainLayout from "./MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="/projects" element={<Projects />} />
        <Route path="/work" element={<WorkExperience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
