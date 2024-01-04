import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import NavbarFC from "./components/Navbar";
import Loader from "./components/Loader";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [show, isShow] = useState(false);
  return (
    <>
      <motion.div
        initial={{ display: "block" }}
        animate={{ display: "none" }}
        transition={{
          delay: 2,
          ease: "backInOut",
        }}
      >
        <Loader />
      </motion.div>
      <header>
        <NavbarFC />
      </header>
      <main>
        <HeroSection />
        {/* <Carousel/> */}
      </main>
    </>
  );
}

export default App;
