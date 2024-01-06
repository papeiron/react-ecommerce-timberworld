import { z } from 'zod';

export type PaymentSchemaType = z.infer<typeof PaymentSchema>;

const creditCardRules =
  /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
const expDateRules = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;

export const PaymentSchema = z.object({
  name: z.string().min(1, { message: 'Enter your name' }),
  creditCard: z
    .string()
    .min(1, { message: 'Enter credit card number.' })
    .refine((value) => creditCardRules.test(value.toString()), {
      message: 'Enter a valid credit card number.'
    }),
  expDate: z
    .string()
    .refine((value) => expDateRules.test(value), {
      message: 'Enter a valid expiration date (MM/YY).'
    })
    .refine(
      (value) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100;
        const currentMonth = currentDate.getMonth() + 1;

        const [month, year] = value.split('/').map(Number);
        return year > currentYear || (year === currentYear && month >= currentMonth);
      },
      {
        message: 'Expiration date must be in the future.'
      }
    ),
  cvv: z
    .string()
    .length(3, { message: 'CVV must be 3 digits long.' })
    .refine((value) => /^\d+$/.test(value), {
      message: 'CVV must be numeric.'
    })
});
