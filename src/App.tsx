import Contents from "./components/contents";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Timeline from "./components/timeline";

function App() {
  return (
    <main className="flex flex-col items-center bg-zinc-950 text-white min-h-screen h-full">
      <Header />

      <Hero />

      <section className="flex flex-col items-center bg-zinc-900 w-full py-8 mt-20 lg:mt-40">
        <p className="font- text-center px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, voluptates, quia quos voluptate quod.
        </p>
      </section>

      <Timeline />

      <Contents />

      <Footer />
    </main>
  );
}

export default App;
