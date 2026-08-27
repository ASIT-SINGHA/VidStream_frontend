import { Container, FormError } from '../ComponentExports.js';
import { useId } from 'react';

export default function Input({
  type = 'text',
  placeholder,
  accept,
  className = '',
  label,
  error=null,
  ref,
  register,
  ...props
}) {
  const id = useId();
  let ifFile = false;
  if (type == 'file') ifFile = true;
  return (
    <Container>
      <div>
        {label && <label htmlFor={id}>{label}:</label>}
        
        </div>
      <input
        type={type}
        id={id}
        {...register}
        accept={accept || ifFile ? 'image/*' : undefined}
        className={className}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />
      {error && <FormError message={error.message || error} />}
    </Container>
  );
}
