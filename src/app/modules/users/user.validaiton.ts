import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'password mus be string' })
    .max(20, { message: 'max 20 character' })
    .optional(),
});

export const UserValidationZod = {
  userValidationSchema,
};
