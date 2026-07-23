import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import GrowthSection from "./components/sections/GrowthSection";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

import CursorGlow from "./components/common/CursorGlow";
import AnimatedBackground from "./components/common/AnimatedBackground";
import ChatWidget from "./components/common/ChatWidget";
import ContactModal from "./components/common/ContactModal";


function App() {

  const [contactOpen, setContactOpen] = useState(false);


  useEffect(() => {

    const alreadyShown = sessionStorage.getItem(
      "contactPopupShown"
    );


    if (!alreadyShown) {

      const timer = setTimeout(() => {

        setContactOpen(true);

        sessionStorage.setItem(
          "contactPopupShown",
          "true"
        );

      }, 3000);


      return () => clearTimeout(timer);

    }

  }, []);



  const openContact = () => {
    setContactOpen(true);
  };


  const closeContact = () => {
    setContactOpen(false);
  };



  return (

    <>

      {/* Background Animation */}
      <AnimatedBackground />


      {/* Cursor Effect */}
      <CursorGlow />


      <main className="relative z-10 min-h-screen">

        <Navbar 
          openContact={openContact}
        />


        <Hero 
          openContact={openContact}
        />


        <Services />


        <Process />


        <GrowthSection
          openContact={openContact}
        />


        <FAQ
          openContact={openContact}
        />


        <Contact
          openContact={openContact}
        />


        <Footer />


        <ChatWidget />

      </main>


      <ContactModal
        open={contactOpen}
        close={closeContact}
      />

    </>

  );

}


export default App;