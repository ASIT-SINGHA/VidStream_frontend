import { Outlet, Navigate, useSearchParams } from 'react-router';
import useAuthStore from '../../store/useAuthStore.js';
import { Navbar, SideBar } from '../ComponentExports.js';
import { useState } from 'react';

export default function ProtectedLayout() {
  const token = useAuthStore((state) => state.accessToken);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  if (!token) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 m-1">
      <Navbar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
      <main className="flex w-fit">
        <SideBar isSidebarOpen={isSidebarOpen} />
        <Outlet />
      </main>
    </div>
  );
}
