import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import GrowthSection from "./components/sections/GrowthSection";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ChatWidget from "./components/common/ChatWidget";
import ContactModal from "./components/common/ContactModal";

function App() {

  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar
        openContact={() => setContactOpen(true)}
      />

      <Hero
        openContact={() => setContactOpen(true)}
      />

      <Services />
      <Process />
      <GrowthSection />
      <FAQ />
      <Contact />
      <Footer />
      <ChatWidget />

      <ContactModal
        open={contactOpen}
        close={() => setContactOpen(false)}
      />
    </>
  );

}

export default App;