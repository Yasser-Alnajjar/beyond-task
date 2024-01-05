import { useAnimationControls } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { WiDegrees } from "react-icons/wi";
export default function Sidebar({ isShow, show, isSuccess, data }) {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start(show ? "show" : "hide");
    isShow(!show);
  };
  useEffect(() => {
    controls.start(!show ? "show" : "hide");
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
        <li className="nav-item">
          <a href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a href="#about">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="#contact">CONTACT US</a>
        </li>
      </ul>
      {isSuccess && (
        <div className="d-flex gap-2 weather-info align-items-center">
          <img
            src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt=""
          />
          <div>{data.weather[0].main}</div>
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
