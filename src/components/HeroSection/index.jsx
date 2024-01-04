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
                transform: "translateX(-150%)",
              }}
              animate={{
                transform: "translateX(0)",
              }}
              transition={{
                duration: 1,
              }}
              className="image"
            >
              <motion.img
                whileHover={{
                  scale: 0.98,
                  rotate: "-5deg",
                  borderRadius: 6,
                }}
                src={heroSectionImage}
                alt="DSC"
              />
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              style={{}}
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
              <h5 className="main-title">The place</h5>
              <h2 className="sub-title">we call home</h2>
              <p className="text">
                Makadi Heights is a town built over 3.4 million square meters
                planned for development, with an elevation reaching 78 meters
                above sea level guaranteeing magnificent panoramic sea views
                residential units. Envisioned as a comprehensive town.
              </p>
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
