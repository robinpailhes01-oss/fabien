import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import StickyCTA from "@/components/StickyCTA";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import About from "@/components/About";
import Offer from "@/components/Offer";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import VSL from "@/components/VSL";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <About />
        <Offer />
        <Process />
        <Projects />
        <VSL />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}
