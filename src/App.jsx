import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import GrowthSection from "./components/sections/GrowthSection";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";


function App(){

 return(
  <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Process/>
    <GrowthSection/>
     <FAQ/>
     <Contact/>
     <Footer/>
  </>
 )

}

export default App;