import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'First name is required' }),
  middleName: z.string().optional(),
  lastName: z.string().trim().min(1, { message: 'Last name is required' }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: "Father's name is required" }),
  fatherOccupation: z
    .string()
    .min(1, { message: "Father's occupation is required" }),
  fatherContactNo: z
    .string()
    .min(1, { message: "Father's contact number is required" }),
  motherName: z.string().min(1, { message: "Mother's name is required" }),
  motherOccupation: z
    .string()
    .min(1, { message: "Mother's occupation is required" }),
  motherContactNo: z
    .string()
    .min(1, { message: "Mother's contact number is required" }),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local guardian name is required' }),
  occupation: z
    .string()
    .min(1, { message: 'Local guardian occupation is required' }),
  contactNo: z
    .string()
    .min(1, { message: 'Local guardian contact number is required' }),
  address: z.string().min(1, { message: 'Local guardian address is required' }),
});

const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().min(4, { message: 'password is required' }),
    student: z.object({
      name: userNameValidationSchema,
      gender: z
        .enum(['male', 'female', 'others'], {
          invalid_type_error: "Gender must be 'male', 'female', or 'others'",
        })
        .refine((val) => ['male', 'female', 'others'].includes(val), {
          message: 'Invalid gender value',
        }),
      dateOfBirth: z.string().min(1, { message: 'Date of birth is required' }),
      email: z
        .string()
        .trim()
        .email({ message: 'Email format is invalid' })
        .min(1, { message: 'Email is required' }),
      contactNo: z
        .string()
        .regex(/^\d{10}$/, { message: 'Contact number must be 10 digits' }),
      emergencyContactNo: z.string().regex(/^\d{10}$/, {
        message: 'Emergency contact number must be 10 digits',
      }),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
          invalid_type_error: 'Invalid blood group',
        })
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present address is required' }),
      permanentAddres: z
        .string()
        .min(1, { message: 'Permanent address is required' }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
};
