import { About } from "./components/About";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Platform } from "./components/Platform";
import { Pricing } from "./components/Pricing";
import { Service } from "./components/Service";

function App() {
  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Service />
     <Platform />
     <Pricing />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
