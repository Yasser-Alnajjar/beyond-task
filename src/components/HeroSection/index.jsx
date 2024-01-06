import { Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";

import "./HeroSection.scss";
import heroSectionImage from "../../assets/DSC.png";

export default function HeroSection() {
  return (
    <section className="hero_section">
      <div style={{ height: 93 }} />

      <Container>
        <Row>
          <Col md={6}>
            <motion.div
              initial={{
                scale: 0,
                rotate: "0deg",
              }}
              whileInView={{
                scale: 1,
                rotate: "360deg",
              }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
              className="image"
            >
              <motion.img
                whileHover={{
                  scale: 0.98,
                  rotate: "-5deg",
                }}
                src={heroSectionImage}
                alt="DSC"
              />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{
                transform: "translateX(150%)",
              }}
              animate={{
                transform: "translateX(0)",
              }}
              transition={{
                duration: 1,
              }}
              className="info"
            >
              <motion.h5
                initial={{
                  x: 0,
                }}
                whileInView={{
                  x: [30, 0, -30, 0],
                }}
                transition={{
                  duration: 2,
                  staggerChildren: 0.1,
                }}
                className="main-title"
              >
                The place
              </motion.h5>
              <motion.h2
                initial="hidden"
                whileInView="show"
                transition={{
                  staggerChildren: 0.1,
                }}
                className="sub-title"
              ></motion.h2>
              <motion.h2
                initial="hidden"
                whileInView="show"
                transition={{
                  staggerChildren: 0.1,
                }}
                className="sub-title"
              >
                {"we call home".split(" ").map((word) => (
                  <span
                    key={word + "word"}
                    style={{
                      display: "inline-block",
                    }}
                  >
                    {word.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        style={{
                          display: "inline-block",
                        }}
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 20,
                          },
                          show: {
                            opacity: 1,
                            y: 0,
                          },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    <span
                      style={{
                        display: "inline-block",
                      }}
                    >
                      &nbsp;
                    </span>
                  </span>
                ))}
              </motion.h2>
              <motion.p
                initial={{
                  rotate: "0deg",
                }}
                whileHover={{
                  rotate: "2deg",
                }}
                transition={{
                  ease: "backInOut",
                }}
                className="text"
              >
                Makadi Heights is a town built over 3.4 million square meters
                planned for development, with an elevation reaching 78 meters
                above sea level guaranteeing magnificent panoramic sea views
                residential units. Envisioned as a comprehensive town.
              </motion.p>
              <div className="d-flex gap-4 flex-wrap">
                <motion.button
                  whileHover={{
                    scale: 0.98,
                    rotate: "5deg",
                  }}
                  transition={{
                    ease: "backInOut",
                  }}
                  className="btn btn-custom"
                >
                  Download Brochure
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 0.98,
                    rotate: "5deg",
                  }}
                  transition={{
                    ease: "backInOut",
                  }}
                  className="btn btn-custom"
                >
                  Show Master plan
                </motion.button>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
