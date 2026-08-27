export default function FormError({ message }) {
  if (!message) return null;
    const errorMessage = typeof message === 'object' ? message.message : message;
  return <p className="text-red-500 text-sm">{errorMessage}</p>;
}
