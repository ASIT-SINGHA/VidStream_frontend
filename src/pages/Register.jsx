import { Form } from 'react-hook-form';
import { Container, Input, FormError, ApiError,Btn } from '../components/ComponentExports.js';
import { useSignUp } from '../hooks/useSignUp.js';
import { Link } from 'react-router';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
    apiError,
  } = useSignUp();

  return (
    <Container>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">Create Account</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
          <ApiError message={apiError} type="error" />

          <Input
            label="Full Name"
            placeholder="Anik Ghosh"
            error={errors}
            className="outline-none mx-2 p-2 border-2 rounded-2xl"
            {...register('fullName')}
          />

          <Input
            label="Username"
            placeholder="anikghose"
            className="outline-none mx-2 p-2 border-2 rounded-2xl"
            error={errors.username}
            {...register('username')}
          />

          <Input
            label="Email"
            type="email"
            placeholder="anik@example.com"
            className="outline-none mx-2 p-2 border-2 rounded-2xl"
            error={errors.email}
            {...register('email')}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            className="outline-none mx-2 p-2 border-2 rounded-2xl"
            error={errors.password}
            {...register('password')}
          />

          <Input
            type="file"
            label="Profile Picture"
            className="outline-none mx-2 p-2 border-2 rounded-2xl"
            error={errors.avatar}
            {...register('avatar')}
          />

          <Input
            type="file"
            label="Cover Image"
            error={errors.coverImage}
            className="outline-none mx-2 p-2 border-2 rounded-2xl"
            {...register('coverImage')}
          />

          <div className="pt-2">
            <Btn
              BtnName="Submit"
              type="submit"
              isLoading={isSubmitting}
              className="mx-2 p-2 rounded-2xl bg-green-400 border-2 "
            />
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </Container>
  );
}
