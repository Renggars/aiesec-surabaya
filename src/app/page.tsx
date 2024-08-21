import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
