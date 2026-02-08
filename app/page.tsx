import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Reasons from "./components/Reasons";
import ValentineQuestion from "./components/ValentineQuestion";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Gallery />
      <Reasons />
      <ValentineQuestion />
    </main>
  );
}
