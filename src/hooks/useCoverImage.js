import useAuthStore from '../store/useAuthStore.js';
import useSubmitForm from './useSubmitForm';
import { updateCoverImageSchema } from '../utils/validateSchema.js';
import { updateCoverImage } from '../services/user.js';

export function useCoverImage() {
  const setUser = useAuthStore((state) => state.setUser);

  return useSubmitForm(updateCoverImageSchema, updateCoverImage, async (res) => {
    await setUser(res.data);
  });
}
