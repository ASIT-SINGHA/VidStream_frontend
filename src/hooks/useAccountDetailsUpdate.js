import useAuthStore from '../store/useAuthStore';
import useSubmitForm from './useSubmitForm';
import { updateAccoundDetailsService } from '../services/user';
import { updateAccoundDetailsSchema } from '../utils/validateSchema';

export default function useAccountDetailsUpdate() {
  const setUser = useAuthStore((state) => state.setUser);

  return useSubmitForm(updateAccoundDetailsSchema, updateAccoundDetailsService, async (res) => {
    await setUser(res.data);
    setIsSubmitting(!isSubmitting);
  });
}
