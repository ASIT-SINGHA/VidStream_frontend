import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useAuthStore = create(
  persist((set) => ({
    user: null,
    accessToken: null,
    isAuth: null,

    login: (user, accessToken) => set({ user, accessToken, isAuth: true }),
    logout: () => set({ user: null, accessToken: null, isAuth: null }),
  })),
  {
    name: 'vidstream-auth',
    Storage: createJSONStorage(() => sessionStorage),
    partialize: (state) => ({
      user: state.user,
      accessToken: state.accessToken,
      isAuth: state.isAuth,
    }),
  },
);
export default useAuthStore;
