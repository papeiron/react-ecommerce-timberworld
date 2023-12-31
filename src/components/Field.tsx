import { useFormContext } from 'react-hook-form';

type FormFieldProps = {
  label: string;
  input: string;
  err?: any;
};

export default function Field({ label, input, err }: FormFieldProps) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const typeValue = input === 'confirmPassword' ? 'password' : input === 'name' ? 'text' : input;

  return (
    <div className='relative mt-6'>
      <input
        {...register(input)}
        type={typeValue}
        id={input}
        placeholder={input}
        className='peer mt-5 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
        autoComplete='NA'
      />
      {errors[input] ? (
        <p className='text-red-500'>{`${errors[input]?.message}`} </p>
      ) : err ? (
        <p className='text-red-500'>{`${err}`} </p>
      ) : null}
      <label
        htmlFor={input}
        className='label pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800'
      >
        {label}
      </label>
    </div>
  );
}
