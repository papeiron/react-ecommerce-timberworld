import { z } from 'zod';

export type SignInSchemaType = z.infer<typeof SignInSchema>;

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Enter your email' }) // if empty
    .email({ message: 'Enter a valid email' }), // if invalid
  password: z.string().min(1, { message: 'Enter your password' })
});
