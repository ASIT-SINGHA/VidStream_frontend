import {
  Home,
  History,
  WatchLater,
  ThumbUp,
  SmartDisplay,
  Portrait,
  PlaylistPlay,
  Slideshow,
} from '@mui/icons-material';

const primaryLinks = [
  { label: 'Home', icon: Home },
  { label: 'Subscriptions', icon: SmartDisplay },
];

const secondaryLinks = [
  { label: 'Your channel', icon: Portrait },
  { label: 'History', icon: History },
  { label: 'Playlist', icon: PlaylistPlay },
  { label: 'Watch later', icon: WatchLater },
  { label: 'Liked videos', icon: ThumbUp },
  { label: 'Your video', icon: Slideshow },
];

function SideBar({ isSidebarOpen }) {
  return (
    <aside className="w-fit h-dvh border-r border-stone-200 bg-white shadow-sm">
      <div className="space-y-2 p-3">
        <div className="space-y-1">
          {primaryLinks.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 hover:text-stone-900"
            >
              <Icon className="h-5 w-5" />
              {isSidebarOpen && <span>{label}</span>}
            </button>
          ))}
        </div>

        <div className="border-t border-stone-200 pt-3">
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
            You
          </p>
          <div className="space-y-1">
            {secondaryLinks.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-stone-700 transition hover:bg-stone-100 hover:text-stone-900"
              >
                <Icon className="h-5 w-5" />
                {isSidebarOpen && <span>{label}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
