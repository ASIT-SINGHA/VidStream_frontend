import { Check, Edit } from '@mui/icons-material';
import useAuthStore from '../../store/useAuthStore.js';
import { ApiError, Btn, Input, Container } from '../ComponentExports.js';
import { useRef, useEffect } from 'react';
import { useAvatar } from '../../hooks/useAvatar.js';
import { mergeRef } from '../../utils/mergeRefs.js';

export default function UpdateAvatar() {
  const user = useAuthStore((state) => state.user);
  // const [trackUpload, setTrackUpload] = useState(false);
  const avatarRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
    setIsSubmitting,
    apiError,
  } = useAvatar();
  const { ref: rhfRef, ...avatarReg } = register('avatar');

  useEffect(() => {
    if (isSubmitting) {
      avatarRef.current.click();
    }
  }, [isSubmitting]);

  function handleBtnClick() {
    if (!isSubmitting) {
      setIsSubmitting(true);
    } else {
      handleSubmit(onSubmit)();
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <img src={user.avatar} alt="avatar" />
        <ApiError message={apiError} type="error" />

        {isSubmitting && (
          <div className=" flex">
            <Input
              type="file"
              accept={'image/*'}
              error={errors?.avatar?.message}
              register={avatarReg}
              ref={mergeRef(rhfRef, avatarRef)}
              className="hidden"
            />
          </div>
        )}

        <Btn onClick={handleBtnClick}>{isSubmitting ? <Check /> : <Edit />}</Btn>
      </form>
    </Container>
  );
}
