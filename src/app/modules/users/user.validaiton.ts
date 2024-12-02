import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20, { message: 'max 20 character' }).optional(),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'blocked']).optional().default('in-progress'),
  isDeleted: z.boolean().optional().default(false),
});

export const UserValidaionZod = {
  userValidationSchema,
};
