import Contact from "./components/contact";
import Contents from "./components/contents";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Highlight from "./components/highlight";
import Timeline from "./components/timeline";

function App() {
  return (
    <main className="flex flex-col items-center bg-zinc-950 text-white min-h-screen h-full">
      <Header />

      <Hero />

      <Highlight />

      <Timeline />

      <Contents />

      <Highlight />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
