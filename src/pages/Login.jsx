import { Link } from 'react-router';
import { ApiError, Btn, Container, Input } from '../components/ComponentExports';
import { useLogin } from '../hooks/useLogin.js';
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isSubmitting,
    apiError,
  } = useLogin();

  return (
    <Container>
      <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
        <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-blue-600">Welcome</p>
            <h1 className="mt-2 text-2xl font-bold text-slate-900">Login</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <ApiError message={apiError} type="error" />

            <div className="space-y-4">
              <Input
                label="Email"
                type="email"
                placeholder="anik@example.com"
                error={errors?.email?.message}
                {...register('email')}
              />

              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                error={errors?.password?.message}
                {...register('password')}
              />

            </div>

            <div className="pt-2">
              <Btn
                BtnName="Submit"
                type="submit"
                isLoading={isSubmitting}
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
              />
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Create a Account{' '}
            <Link to="/register" className="font-medium text-blue-600 transition hover:text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
