export default function ErrorMessage({ name }) {
  return name !== "" && <p className="error-message">{name}</p>;
}
