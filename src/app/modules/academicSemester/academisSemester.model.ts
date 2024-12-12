import { model, Schema } from 'mongoose';
import { AcademicSemester } from './academicSemester.interface';
import {
  academicSemesterCodeS,
  academicSemesterNameS,
  months,
} from './academic.const';

const AcademicSemesterSchema = new Schema<AcademicSemester>(
  {
    name: { type: String, required: true, enum: academicSemesterNameS },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: academicSemesterCodeS },
    startMonth: {
      type: String,
      required: true,
      enum: months,
    },
    endMonth: { type: String, required: true, enum: months },
  },
  { timestamps: true },
);

AcademicSemesterSchema.pre('save', async function (next) {
  const isSemesterExistes = await AcademicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExistes) {
    throw new Error('this semester already is existes');
  }
  next();
});

export const AcademicSemesterModel = model<AcademicSemester>(
  'academicSemester',
  AcademicSemesterSchema,
);
