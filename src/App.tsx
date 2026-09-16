import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import ProjectsGrid from "./components/Projects/ProjectsGrid";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-graphite text-chalk">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsGrid />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
