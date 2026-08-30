import { useNavigate } from 'react-router';
import useAuthStore from '../../store/useAuthStore.js';
import { Btn } from '../ComponentExports.js';
import { logoutUser } from '../../services/user.js';

function ProfilePictureDialog({ dpTogle }) {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  if (!user) return null;

  const profileImage =
    user?.avatar ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.fullName || user?.username || 'User')}`;

  const handleLogout = async () => {
    try {
      if (user?.email) {
        await logoutUser({ email: user.email });
      }
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      await logout();
      navigate('/login');
    }
  };

  return (
    <>
      {dpTogle && (
        <div className="absolute right-0 top-12 z-20 w-[calc(100vw-2rem)] max-w-[18rem] overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)] ring-1 ring-black/5 sm:w-72">
          <div className="border-b border-stone-200 bg-stone-50 px-3 py-3 sm:px-4">
            <div className="flex items-center gap-3">
              <img
                src={profileImage}
                alt={user?.username || 'User profile'}
                className="h-11 w-11 rounded-full border border-stone-200 object-cover shadow-sm"
              />

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-stone-900">
                  {user?.fullName || 'User'}
                </p>
                <p className="truncate text-xs text-stone-500">@{user?.username || 'username'}</p>
              </div>
            </div>
          </div>

          <div className="px-2 py-2">
            <div className="space-y-1">
              <Btn
                BtnName="View channel"
                className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-stone-700 transition hover:bg-stone-100"
              />
              <Btn
                BtnName="Go to profile"
                className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-stone-700 transition hover:bg-stone-100"
              />

              <button
                type="button"
                onClick={handleLogout}
                className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          </div>

          <div className="border-t border-stone-200 bg-stone-50 px-3 py-3 text-[11px] text-stone-500 sm:px-4">
            {user?.email || 'No email provided'}
          </div>
        </div>
      )}
    </>
  );
}

export default ProfilePictureDialog;
