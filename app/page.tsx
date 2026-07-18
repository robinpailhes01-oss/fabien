import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import StickyCTA from "@/components/StickyCTA";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import VSL from "@/components/VSL";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Offer from "@/components/Offer";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Ebooks from "@/components/Ebooks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <VSL />
        <Problem />
        <About />
        <Offer />
        <Process />
        <Projects />
        <Testimonials />
        <Ebooks />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
