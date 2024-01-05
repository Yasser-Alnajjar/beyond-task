export default function ErrorMessage({ touched, error }) {
  if (error !== "" && touched) {
    return <p className="error-message">{error}</p>;
  }
}
