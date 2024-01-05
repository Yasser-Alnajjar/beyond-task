import { motion } from "framer-motion";

export default function ServiceCard({
  icon,
  title,
  text,
  subtext,
  active,
  ...props
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: "-100%",
      }}
      whileInView={{
        opacity: 1,
        translateX: "0%",
      }}
      className={`service_card ${active ? "active" : ""}`}
      {...props}
    >
      {icon}
      <h5 className="service_card_title"> {title}</h5>
      <p className="service_card_text">{text}</p>
      <p className="service_card_subtext"> {subtext}</p>
    </motion.div>
  );
}
