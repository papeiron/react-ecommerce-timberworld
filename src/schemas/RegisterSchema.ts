import { z } from 'zod';

export type SignUpSchemaType = z.infer<typeof RegisterSchema>;

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
export const RegisterSchema = z
  .object({
    name: z.string().min(1, { message: 'Enter your name' }).max(255),
    email: z
      .string()
      .min(1, { message: 'Enter your email' }) // if empty
      .email({ message: 'Enter a valid email' }), // if invalid
    password: z
      .string()
      .min(8, { message: 'Minimum 8 characters required' })
      .refine((value) => passwordRules.test(value), {
        message: 'Password must contain at least 1 digit, and 1 uppercase letter.'
      }),
    confirmPassword: z.string().min(1, { message: 'Type your password again' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword']
  });
