import useAuthStore from '../store/useAuthStore.js';
import useSubmitForm from './useSubmitForm';
import { updateAvatarSchema } from '../utils/validateSchema.js';
import { updateAvatar } from '../services/user.js';

export function useAvatar() {
  const setUser = useAuthStore((state) => state.setUser);

  return useSubmitForm(updateAvatarSchema, updateAvatar, async (res) => {
    await setUser(res.data);
  });
}
