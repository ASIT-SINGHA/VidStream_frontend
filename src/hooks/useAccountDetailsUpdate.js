import { useState } from 'react';
import useAuthStore from '../store/useAuthStore';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateAccoundDetailsService } from '../services/user';
import { updateAccoundDetailsSchema } from '../utils/validateSchema';

export default function useAccountDetailsUpdate(trackUpload, setTrackUpload) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const setUser = useAuthStore((state) => state.setUser);

  const form = useForm({
    resolver: zodResolver(updateAccoundDetailsSchema),
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setApiError('');    
    try {
      const res = await updateAccoundDetailsService(formData);
      await setUser(res.data);
      setTrackUpload((trackUpload) => !trackUpload);
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
