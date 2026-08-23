import { Outlet, Navigate } from 'react-router';
import useAuthStore from '../../store/useAuthStore.js';

export default function ProtectedLayout() {
  const token = useAuthStore((state) => state.accessToken);
  if (!token) return <Navigate to="/login" replace />;
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 m-1">
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
