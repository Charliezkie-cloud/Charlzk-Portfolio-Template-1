import { useEffect } from "react";
import "./assets/css/App.css";

import AboutMe from "./Components/App/AboutMe";
import MyProjects from "./Components/App/MyProjects";
import Services from "./Components/App/Services";
import NavBar from "./Components/NavBar";
import Testimonials from "./Components/App/Testimonials";
import Contact from "./Components/App/Contact";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", "light");
    document.title = "Charlzk Portfolio Template 1";
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <AboutMe />
        <Services />
        <MyProjects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
