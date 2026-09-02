//
import { useNavigate } from 'react-router';
import { changePasswordService } from '../services/user';
import { changePasswordSchema } from '../utils/validateSchema';
import useSubmitForm from './useSubmitForm';

export function usePasswordChange() {
  const navigate = useNavigate();

  return useSubmitForm(changePasswordSchema, changePasswordService, async () => {
    navigate('/login');
  });
}
