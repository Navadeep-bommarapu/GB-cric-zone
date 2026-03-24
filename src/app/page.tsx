import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Gallery />
        <div className="section-divider" />
        <Pricing />
        <div className="section-divider" />
        <Reviews />
        <div className="section-divider" />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
