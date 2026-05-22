import { Navbar } from "../component/Navbar";
import { Hero } from "../component/Hero";
import { Features } from "../component/Features";
import { YieldSection } from "../component/YieldSection";
import { Footer } from "../component/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <YieldSection />
      </main>
      <Footer />
    </>
  );
}
