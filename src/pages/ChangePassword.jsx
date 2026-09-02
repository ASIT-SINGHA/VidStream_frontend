import { usePasswordChange } from '../hooks/usePasswordChange.js';
import { ApiError, Btn, Container, Input } from '../components/ComponentExports.js';
import { Check, Edit } from '@mui/icons-material';

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
    setIsSubmitting,
    apiError,
  } = usePasswordChange();

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ApiError message={apiError} type="error" />
        <Input
          label=" Old Password"
          type="password"
          error={errors?.oldPassword?.message}
          {...register('oldPassword')}
        />

        <Input
          label="New Password"
          type="password"
          error={errors?.newPassword?.message}
          {...register('newPassword')}
        />

        <Input
          label="Confirm Password"
          type="password"
          error={errors?.confirmPassword?.message}
          {...register('confirmPassword')}
          
        />

        <Btn type="submit" BtnName="Change Now"></Btn>
      </form>
    </Container>
  );
}
