import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { signUpSchema } from '../utils/validateSchema.js';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '../services/user.js';

export function useSignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setApiError('');

    try {
      console.log(formData)
      await registerUser(formData);
      navigate('/login');
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
