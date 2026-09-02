import { useNavigate } from 'react-router';
import useSubmitForm from './useSubmitForm';
import { loginSchema } from '../utils/validateSchema.js';
import useAuthStore from '../store/useAuthStore.js';
import { loginUser } from '../services/user.js';

export function useLogin() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  return useSubmitForm(loginSchema, loginUser, (res) => {
    login(res.data.user, res.data.accessToken);
    navigate('/');
  });
}