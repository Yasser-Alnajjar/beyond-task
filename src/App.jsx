import Carousel from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import NavbarFC from "./components/Navbar";
import Loader from "./components/Loader";
import { motion } from "framer-motion";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { useQuery } from "react-query";
import About from "./components/About";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
const fetchWeather = async () => {
  const res = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578"
  );
  const data = await res.json();
  return data;
};
function App() {
  const [show, isShow] = useState(false);
  const { data, isSuccess } = useQuery({
    queryKey: "Weather",
    queryFn: fetchWeather,
  });

  return (
    <>
      <Toaster position="top right" reverseOrder={false} />
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

      <Sidebar isShow={isShow} show={show} isSuccess={isSuccess} data={data} />
      <header>
        <NavbarFC
          isShow={isShow}
          show={show}
          isSuccess={isSuccess}
          data={data}
        />
      </header>
      <main>
        <HeroSection />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
