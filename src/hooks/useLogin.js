import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { loginSchema } from '../utils/validateSchema.js';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuthStore from '../store/useAuthStore.js';
import { loginUser } from '../services/user.js';
export function useLogin() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setApiError('');

    try {
      const res = await loginUser(formData);
      login(res.data.user, res.data.accessToken);
      navigate('/');
    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    ...form,
    onSubmit,
    isSubmitting,
    apiError,
  };
}
