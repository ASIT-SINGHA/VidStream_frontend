import { Link } from 'react-router';
import { Menu, Add, Person, Notifications } from '@mui/icons-material';
import { Btn, Container, ProfilePictureDialog, SearchBar, SideBar } from '../ComponentExports';
import useAuthStore from '../../store/useAuthStore.js';
import { useState } from 'react';

function Navbar({ setIsSidebarOpen, isSidebarOpen }) {
  const isAuth = useAuthStore((state) => state.isAuth);
  const user = useAuthStore((state) => state.user);
  const [dpTogle, setdpTogle] = useState(false);

  function handleDPTogle() {
    setdpTogle(!dpTogle);
  }

  return (
    <Container>
      <header className="border-b border-stone-200 bg-white/90 backdrop-blur-sm">
        <nav className="flex items-center justify-between gap-4 py-1">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition hover:bg-stone-100 hover:text-stone-900"
              aria-label="Toggle navigation menu"
            >
              <Menu />
            </button>

            <Link to="/" className="flex items-center">
              <img
                className="h-9 w-auto"
                src="https://res.cloudinary.com/fmvhynvl/image/upload/v1786964410/vid_logo.jpg"
                alt="vidStream-logo"
              />
            </Link>
          </div>

          <div className="hidden flex-1 justify-center md:flex">
            <SearchBar />
          </div>

          <div className="flex items-center gap-2">
            <Btn className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-100 px-3 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-200">
              <Add className="h-4 w-4" />
              <span>Create</span>
            </Btn>
            <Btn className="flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition hover:bg-stone-100 hover:text-stone-900">
              <Notifications className="h-5 w-5" />
            </Btn>

            <div className="relative px-4">
              <Btn
                onClick={handleDPTogle}
                className="flex h-10 w-10  items-center justify-center rounded-full bg-stone-900 text-white transition hover:bg-stone-700"
              >
                {isAuth ? <img src={user.avatar} /> : <Person className="h-5 w-5" />}
              </Btn>

              {dpTogle && <ProfilePictureDialog dpTogle={dpTogle} />}
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
}

export default Navbar;
