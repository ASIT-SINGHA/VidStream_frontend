export default function ApiError({ error }) {
  if (!error) return null;
  
  // Handle Axios error structure
  const message = error.response?.data?.message || "An unexpected error occurred.";
  
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <strong>Error:</strong> {message}
    </div>
  );
}
