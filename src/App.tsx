import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
import Experiences from "./pages/Experiences";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experiences />
      </div>
      <div>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
