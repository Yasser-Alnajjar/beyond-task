import { useAnimationControls, AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiDegrees } from "react-icons/wi";
export default function Sidebar({ isShow, show, isSuccess, data }) {
  const controls = useAnimationControls();

  const handleClick = () => {
    isShow(!show);
    controls.start(show ? "show" : "hide");
  };
  useEffect(() => {
    controls.start(show ? "show" : "hide");
  }, [show]);
  return (
    <motion.div
      className="sidebar"
      animate={controls}
      variants={{
        show: {
          translateX: "-100%",
        },
        hide: {
          translateX: "0%",
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <ul className="nav">
        <li
          onClick={handleClick}
          style={{
            textAlign: "end",
            cursor: "pointer",
          }}
        >
          <IoMdClose
            style={{
              border: "1px dotted #1a3143",
              borderRadius: 6,
              margin: "10px",
            }}
          />
        </li>
        <li className="nav-item">HOME</li>
        <li className="nav-item">ABOUT</li>
        <li className="nav-item">CONTACT US</li>
      </ul>
      {isSuccess && (
        <div className="d-flex gap-2 weather-info">
          <TiWeatherPartlySunny size={30} />
          <div className="position-relative">
            <span style={{ position: "absolute", top: "-10px" }}>
              <WiDegrees size={50} />
            </span>
            {Math.floor(data.main.temp - 273.15)}
          </div>
        </div>
      )}
    </motion.div>
  );
}
