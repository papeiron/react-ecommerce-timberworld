import { Link } from 'react-router-dom';
import Field from './Field';
import { useForm, FormProvider, FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, type SignUpSchemaType } from '../schemas/RegisterSchema';
import { SignInSchema, type SignInSchemaType } from '../schemas/SignInSchema';
import { ZodType } from 'zod';

type FormProps = {
  formType: 'signin' | 'register';
};

export default function Form({ formType }: FormProps) {
  const schemaSelector = (type: string): ZodType<SignUpSchemaType | SignInSchemaType> => {
    if (type === 'signin') {
      return SignInSchema;
    } else if (type === 'register') {
      return RegisterSchema;
    } else {
      throw new Error(`Invalid type: ${type}`);
    }
  };
  const methods = useForm<SignUpSchemaType | SignInSchemaType>({
    resolver: zodResolver(schemaSelector(formType))
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = methods;

  const onSubmit = async (formData: FieldValues) => {
    console.log(formData);

    reset();
  };

  return formType == 'signin' ? (
    <div className='form-container mt-5 relative  bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10'>
      <div className='w-full'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-gray-900'>Sign in</h1>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
            <Field label='Email Address' input='email' />
            <Field label='Password' input='password' />
            <div className='my-6'>
              <button
                disabled={isSubmitting}
                type='submit'
                className={`btn-dark ${isSubmitting && 'cursor-not-allowed'}`}
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
  ) : (
    <div className='form-container mt-5 relative  bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10'>
      <div className='w-full'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-gray-900'>Sign Up</h1>
        </div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
            <Field label='Name' input='name' />
            <Field label='Email' input='email' />
            <Field label='Password' input='password' />
            <Field label='Confirm Password' input='confirmPassword' />
            <div className='my-6'>
              <button
                disabled={isSubmitting}
                type='submit'
                className={`btn-dark ${isSubmitting && 'cursor-not-allowed'}`}
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
}
