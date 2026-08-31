import { Edit } from '@mui/icons-material';
import useAuthStore from '../../store/useAuthStore.js';
import { ApiError, Btn, Input, Container } from '../ComponentExports.js';
import { useState } from 'react';
import { useAvatar } from '../../hooks/useAvatar.js';

export default function UpdateAvatar() {
  const user = useAuthStore((state) => state.user);
  const [trackUpload, setTrackUpload] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
    apiError,
  } = useAvatar(trackUpload, setTrackUpload);
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <img src={user.avatar} alt="avatar" />
        <ApiError message={apiError} type="error" />

        {trackUpload && (
          <div className=" flex">
            <Input
              type="file"
              accept={'image/*'}
              error={errors?.avatar?.message}
              {...register('avatar')}
            />
            <Btn type="submit" BtnName="Done" className="border-2 border-amber-300 p-2" />
          </div>
        )}

        <Btn
          onClick={() => {
            setTrackUpload((trackUpload) => !trackUpload);
          }}
        >
          <Edit />
        </Btn>
      </form>
    </Container>
  );
}
