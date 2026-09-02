import { useNavigate } from 'react-router';
import useSubmitForm from './useSubmitForm';
import { signUpSchema } from '../utils/validateSchema.js';
import { registerUser } from '../services/user.js';

export function useSignUp() {
  const navigate = useNavigate();

  return useSubmitForm(signUpSchema, registerUser, () => {
    navigate('/login');
  });
}