import { useNavigate } from 'react-router';
import useAuthStore from '../../store/useAuthStore.js';
import { Btn } from '../ComponentExports.js';

function ProfilePictureDialog({ dpTogle }) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };



  return (
    <>
      {dpTogle && (
        <div className="absolute right-0 top-12 z-20 w-72 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] ring-1 ring-black/5">
          <div className="border-b border-stone-200 bg-stone-50 px-4 py-3">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.username || 'User profile'}
                className="h-11 w-11 rounded-full border border-stone-200 object-cover"
              />

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-stone-900">
                  {user.fullName || 'User'}
                </p>
                <p className="truncate text-xs text-stone-500">@{user.username || 'username'}</p>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div className="space-y-1">
              <Btn
                BtnName="View channel"
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-stone-700 transition hover:bg-stone-100"
              />
              <Btn
                BtnName="Settings"
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-stone-700 transition hover:bg-stone-100"
              />
              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 transition hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="border-t border-stone-200 bg-stone-50 px-4 py-3 text-[11px] text-stone-500">
            {user.email || 'No email provided'}
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePictureDialog;
