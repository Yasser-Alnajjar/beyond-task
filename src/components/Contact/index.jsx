import { Col, Container, Row } from "react-bootstrap";
import contact from "../../assets/menu.png";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import ErrorMessage from "../ErrorMessage";
import { toast } from "react-hot-toast";
import { object, string } from "yup";
export default function Contact() {
  const schema = object().shape({
    name: string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is Required"),
    email: string()
      .required("Email address is Required")
      .email("invalid email address"),
    phone: string()
      .min(11, "Too Short!")
      .max(11, "Invalid phone number")
      .required("Phone is Required"),
    budget: string().required("Budget is Required"),
    message: string()
      .min(5, "Too Short!")
      .max(500, "Too Long! max of character is 500")
      .required("Message is Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      budget: "",
      message: "",
      check: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
      toast.success(`Thanks we catch your message 😊`);
    },
  });
  return (
    <div className="contact" id="contact">
      <Container fluid>
        <Row>
          <Col md={4}>
            <motion.div
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
              }}
              transition={{ duration: 1 }}
              className="contact_image"
            >
              <img src={contact} alt="contact" />
              <div className="contact_image_text">
                <h6 className="contact_image_text_title">
                  Ready for a Home at
                </h6>
                <h2 className="contact_image_text_subtitle">Makadi Heights</h2>
              </div>
            </motion.div>
          </Col>
          <Col md={8}>
            <div className="contact-form">
              <p className="contact-form-text">
                Enter your details and our representative will get back to you
                shortly
              </p>
              <form onSubmit={formik.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <motion.div
                      initial={{
                        x: "-100%",
                      }}
                      whileInView={{
                        x: "0%",
                      }}
                      transition={{ duration: 1 }}
                      className="group"
                    >
                      <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Your name"
                      />
                      <ErrorMessage
                        error={formik.errors.name}
                        touched={formik.touched.name}
                      />
                    </motion.div>
                  </Col>
                  <Col sm={12}>
                    <motion.div
                      initial={{
                        x: "100%",
                      }}
                      whileInView={{
                        x: "0%",
                      }}
                      transition={{ duration: 1 }}
                      className="group"
                    >
                      <input
                        type="text"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Email ID"
                      />
                      <ErrorMessage
                        error={formik.errors.email}
                        touched={formik.touched.email}
                      />
                    </motion.div>
                  </Col>
                  <Col sm={12}>
                    <motion.div
                      initial={{
                        x: "-100%",
                      }}
                      whileInView={{
                        x: "0%",
                      }}
                      transition={{ duration: 1 }}
                      className="group"
                    >
                      <input
                        type="text"
                        name="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Phone number"
                      />
                      <ErrorMessage
                        error={formik.errors.phone}
                        touched={formik.touched.phone}
                      />
                    </motion.div>
                  </Col>
                  <Col sm={12}>
                    <motion.div
                      initial={{
                        x: "100%",
                      }}
                      whileInView={{
                        x: "0%",
                      }}
                      transition={{ duration: 1 }}
                      className="group"
                    >
                      <select
                        name="budget"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="">Choose your budget</option>
                        <option value="2000">$2000</option>
                        <option value="3000">$3000</option>
                        <option value="4000">$4000</option>
                        <option value="5000">$5000</option>
                      </select>
                      <ErrorMessage
                        error={formik.errors.budget}
                        touched={formik.touched.budget}
                      />
                    </motion.div>
                  </Col>
                  <Col sm={12}>
                    <motion.div
                      initial={{
                        x: "-100%",
                      }}
                      whileInView={{
                        x: "0%",
                      }}
                      transition={{ duration: 1 }}
                      className="group"
                    >
                      <textarea
                        name="message"
                        rows={1}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Enter you message"
                      />
                      <ErrorMessage
                        error={formik.errors.message}
                        touched={formik.touched.message}
                      />
                    </motion.div>
                  </Col>
                  <Col sm={12}>
                    <div className="d-flex gap-3 mb-4">
                      <input
                        type="checkbox"
                        name="check"
                        id="check"
                        value={formik.values.check[0]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor="check" className="text-muted">
                        I agree to the processing of personal data
                      </label>
                    </div>
                  </Col>
                  <Col sm={12}>
                    <motion.button
                      initial={{
                        scale: 1,
                        rotate: "0deg",
                      }}
                      whileHover={{
                        rotate: "5deg",
                      }}
                      whileTap={{
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="btn-custom"
                      type="submit"
                    >
                      leave a Call request
                    </motion.button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
