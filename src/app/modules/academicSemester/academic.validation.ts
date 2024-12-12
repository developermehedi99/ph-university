import {
  academicSemesterCodeS,
  academicSemesterNameS,
  months,
} from './academic.const';
import { z } from 'zod';

const CreateAcademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...academicSemesterNameS] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...academicSemesterCodeS] as [string, ...string[]]),
    startMonth: z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]]),
  }),
});

export const AcademicSemesterValidation = {
  CreateAcademicSemesterValidation,
};
