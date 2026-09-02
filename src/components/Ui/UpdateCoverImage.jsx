import { Check, Edit } from '@mui/icons-material';
import { useCoverImage } from '../../hooks/useCoverImage.js';
import useAuthStore from '../../store/useAuthStore.js';
import { ApiError, Btn, Input, Container } from '../ComponentExports.js';
import { useEffect, useRef } from 'react';
import { mergeRef } from '../../utils/mergeRefs.js';

export default function UpdateCoverImage() {
  const user = useAuthStore((state) => state.user);
  const coverImageRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
    setIsSubmitting,
    apiError,
  } = useCoverImage();

  useEffect(() => {
    if (isSubmitting) {
      coverImageRef.current?.click();
    }
  }, [isSubmitting]);

  const handleBtnClick = () => {
    if (!isSubmitting) {
      setIsSubmitting(true);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  const { ref: rhfRef, ...coverImageReg } = register('coverImage');

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <img src={user.coverImage} alt="coverImage" />
        <ApiError message={apiError} type="error" />

        {isSubmitting && (
          <div className=" flex">
            <Input
              type="file"
              accept={'image/*'}
              error={errors?.coverImage?.message}
              register={coverImageReg}
              ref={mergeRef(rhfRef, coverImageRef)}
              className="hidden"
            />
          </div>
        )}

        <Btn
          type="button"
          onClick={handleBtnClick}
          // disabled={isSubmitting}
        >
          {isSubmitting ? <Check /> : <Edit />}
        </Btn>
      </form>
    </Container>
  );
}
