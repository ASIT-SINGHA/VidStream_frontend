import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuth: false,

      login: (user, accessToken) => set({ user, accessToken, isAuth: true }),
      logout: () => set({ user: null, accessToken: null, isAuth: false }),
    }),
    {
      name: 'vidstream-auth',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        isAuth: state.isAuth,
      }),
    },
  ),
);
export default useAuthStore;
