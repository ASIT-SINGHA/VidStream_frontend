export default function FormError({ message }) {
  if (!message) return null;
  return <span className="text-red-500 text-sm">{message}</span>;
}
