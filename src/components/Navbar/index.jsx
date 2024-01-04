import { Container } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { WiDegrees } from "react-icons/wi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar({ isShow, show, isSuccess, data }) {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 20],
    ["transparent", "#1a3143"]
  );

  return (
    <motion.nav
      className="navbar-custom"
      style={{
        backgroundColor,
        transition: ".5s background-color",
      }}
    >
      <Container>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="nav">
          {isSuccess && (
            <li className="d-none d-md-flex nav-item d-flex gap-3">
              <TiWeatherPartlySunny size={30} />
              <div className="position-relative">
                <span style={{ position: "absolute", top: "-10px" }}>
                  <WiDegrees size={50} />
                </span>
                {Math.floor(data.main.temp - 273.15)}
              </div>
            </li>
          )}
          <li className="d-none d-md-block nav-item">
            <button className="btn-outlined">
              <FaPhoneAlt />
            </button>
          </li>
          <li className="d-none d-md-block nav-item">
            <button className="btn btn-custom">Book Now</button>
          </li>
          <li className="d-none d-md-block nav-item">MENU</li>
          <li
            className="nav-item"
            onClick={() => {
              isShow(!show);
            }}
          >
            <div className="menu">
              <IoMdMenu size={30} />
            </div>
          </li>
        </ul>
      </Container>
    </motion.nav>
  );
}
