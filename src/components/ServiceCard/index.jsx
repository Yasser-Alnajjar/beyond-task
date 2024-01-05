export default function ServiceCard({
  icon,
  title,
  text,
  subtext,
  active,
  ...props
}) {
  return (
    <div className={`service_card ${active ? "active" : ""}`} {...props}>
      {icon}
      <h5 className="service_card_title"> {title}</h5>
      <p className="service_card_text">{text}</p>
      <p className="service_card_subtext"> {subtext}</p>
    </div>
  );
}
