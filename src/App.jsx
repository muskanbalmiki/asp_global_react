import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Verticals from "./components/Verticals.jsx";
import Products from "./components/Products.jsx";
import Process from "./components/Process.jsx";
import WhyUs from "./components/WhyUs.jsx";
import CTA from "./components/CTA.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Verticals />
        <Products />
        <Process />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}