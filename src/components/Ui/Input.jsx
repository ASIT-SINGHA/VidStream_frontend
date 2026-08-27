import { FormError } from '../ComponentExports.js';
import { useId } from 'react';

export default function Input({
  type = 'text',
  placeholder,
  accept,
  className = '',
  label,
  error = null,
  ref,
  register,
  ...props
}) {
  const id = useId();
  const inputClass =
    type === 'file'
      ? `block w-full cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-900 file:px-3 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-slate-800 ${className}`
      : `w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 ${className}`;

  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <input
        type={type}
        id={id}
        {...register}
        accept={accept || (type === 'file' ? 'image/*' : undefined)}
        className={inputClass}
        placeholder={placeholder}
        {...props}
        ref={ref}
      />

      {error && <FormError message={error.message || error} />}
    </div>
  );
}
