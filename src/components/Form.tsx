import { Link } from 'react-router-dom';
import Field from './Field';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, type SignUpSchemaType } from '../schemas/RegisterSchema';
import { SignInSchema, type SignInSchemaType } from '../schemas/SignInSchema';
import { ZodType } from 'zod';
import { useLogin } from '../services/useLogin';
import { useRegister } from '../services/useRegister';
import { PaymentSchema, PaymentSchemaType } from '../schemas/PaymentSchema';
import Button from './Button';

type FormProps = {
  formType: 'signin' | 'register' | 'payment';
};

export default function Form({ formType }: FormProps) {
  const schemaSelector = (
    type: string
  ): ZodType<SignUpSchemaType | SignInSchemaType | PaymentSchemaType> => {
    if (type === 'signin') {
      return SignInSchema;
    } else if (type === 'register') {
      return RegisterSchema;
    } else if (type === 'payment') {
      return PaymentSchema;
    } else {
      throw new Error(`Invalid type: ${type}`);
    }
  };
  const methods = useForm<SignUpSchemaType | SignInSchemaType | PaymentSchemaType>({
    resolver: zodResolver(schemaSelector(formType))
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = methods;

  const { register, isPending } = useRegister();
  const { login, error, isPending: isLoginPending } = useLogin();
  const onSubmit = (formData: FieldValues) => {
    if (formType === 'signin') {
      login({ email: formData.email, password: formData.password });
    } else if (formType === 'register') {
      register({ fullName: formData.fullName, email: formData.email, password: formData.password });
    } else if (formType === 'payment') {
      console.log(formData);
    }

    reset();
  };

  if (formType == 'signin') {
    return (
      <div className='form-container mt-5 relative  bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10'>
        <div className='w-full'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold text-gray-900'>Sign in</h1>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
              <Field
                pending={isLoginPending}
                loginErr={error}
                label='Email Address'
                name='email'
                type='email'
              />
              <Field
                pending={isLoginPending}
                loginErr={error}
                label='Password'
                name='password'
                type='password'
              />
              <div className='my-6'>
                <button
                  disabled={isSubmitting || isLoginPending}
                  type='submit'
                  className={`btn-dark ${isSubmitting || (isLoginPending && 'cursor-not-allowed')}`}
                >
                  Sign in
                </button>
              </div>
              <p className='text-center text-sm text-gray-500'>
                Don't have an account yet?
                <Link
                  to='/register'
                  className='ml-2 font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none'
                >
                  Sign up
                </Link>
              </p>
            </form>
          </FormProvider>
        </div>
      </div>
    );
  } else if (formType == 'register') {
    return (
      <div className='form-container mt-5 relative  bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10'>
        <div className='w-full'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold text-gray-900'>Sign Up</h1>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
              <Field pending={isPending} label='Name' name='name' type='text' />
              <Field pending={isPending} label='Email' name='email' type='email' />
              <Field pending={isPending} label='Password' name='password' type='password' />
              <Field
                pending={isPending}
                label='Confirm Password'
                name='confirmPassword'
                type='password'
              />
              <div className='my-6'>
                <button
                  disabled={isSubmitting || isPending}
                  type='submit'
                  className={`btn-dark ${isSubmitting || (isPending && 'cursor-not-allowed')}`}
                >
                  Sign up
                </button>
              </div>
              <p className='text-center text-sm text-gray-500'>
                You already have a account ?
                <Link
                  to='/signin'
                  className='ml-2 font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none'
                >
                  Sign in
                </Link>
              </p>
            </form>
          </FormProvider>
        </div>
      </div>
    );
  } else if (formType == 'payment') {
    return (
      <div className='form-container mt-5 relative  bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10'>
        <div className='w-full'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold text-gray-900 secondary-heading'>Payment</h1>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
              <Field label='Name' type='text' name='name' />
              <Field label='Credit card number' type='text' name='creditCard' />
              <div className='credit-info'>
                <Field label='MM/YY' type='text' name='expDate' />
                <Field label='CVV' type='text' name='cvv' />
              </div>
              <div className='my-6'>
                <Button classNames='btn-dark' content='Pay' />
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    );
  }
}
