import { useState, useRef } from 'react';
import useAccountDetailsUpdate from '../../hooks/useAccountDetailsUpdate.js';
import useAuthStore from '../../store/useAuthStore.js';
import { Btn, Container, Input } from '../ComponentExports.js';
import { Edit, Check } from '@mui/icons-material';

export default function AccountDetailsUpdate() {
  const user = useAuthStore((state) => state.user);

  const [trackUpload, setTrackUpload] = useState(false);
  const [editName, setEditName] = useState(true);
  const [editEmail, setEditEmail] = useState(true);
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
    setIsSubmitting,
    apiError,
  } = useAccountDetailsUpdate();
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            label="Full Name"
            ref={fullNameRef}
            {...register('fullName', { value: user.fullName })}
            error={errors?.fullName?.message}
            readOnly={editName}
            className="outline-none border-none"
          />
          <Btn
            type={editName ? 'button' : 'submit'}
            onClick={() => {
              if (editName) {
                setEditName(false);
              } else {
                handleSubmit(onSubmit)();
                setEditName(true);
              }
            }}
          >
            {editName ? <Edit /> : <Check />}
          </Btn>
        </div>
        <div>
          <Input
            label="email"
            ref={emailRef}
            {...register('email', { value: user.email })}
            error={errors?.email?.message}
            readOnly={editEmail}
            className="outline-none "
          />
          <Btn
            type={editEmail ? 'button' : 'submit'}
            onClick={() => {
              if (editEmail) {
                setEditEmail(false);
              } else {
                handleSubmit(onSubmit)();
                setEditEmail(true);
              }
            }}
          >
            {editEmail ? <Edit /> : <Check />}
          </Btn>
        </div>
        <Input
          label="User Name:"
          disabled
          value={user.username}
          className="outline-none border-none"
        />
        <Input
          label="Account Created:"
          disabled
          value={new Date(user.createdAt).toLocaleDateString()}
          className="outline-none border-none"
        />
      </form>
    </Container>
  );
}
