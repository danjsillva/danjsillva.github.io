import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Highlight from "./components/highlight";
import Skills from "./components/skills";
import Writing from "./components/writing";

function App() {
  return (
    <main className="flex flex-col items-center bg-zinc-950 text-white min-h-screen h-full">
      <Header />

      <Hero />

      <Highlight />

      <Experience />

      <Skills />

      <Writing />

      <Highlight />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
