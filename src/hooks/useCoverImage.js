import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { updateCoverImageSchema } from '../utils/validateSchema.js';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuthStore from '../store/useAuthStore.js';
import { updateCoverImage } from '../services/user.js';

export function useCoverImage(trackUpload, setTrackUpload) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const setUser = useAuthStore((state) => state.setUser);

  const form = useForm({
    resolver: zodResolver(updateCoverImageSchema),
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setApiError('');

    try {
      const res = await updateCoverImage(formData);
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
