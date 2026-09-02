import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export default function useSubmitForm(schema, service, onSuccess, formOptions = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');

  const form = useForm({
    resolver: zodResolver(schema),
    ...formOptions,
  });

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    setApiError('');

    try {
      const res = await service(formData);
      if (onSuccess) await onSuccess(res);
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
    setIsSubmitting,
    apiError,
  };
}
