import { academicSemesterNameCodeMapper } from './academic.const';
import { AcademicSemester } from './academicSemester.interface';
import { AcademicSemesterModel } from './academisSemester.model';

const createAcademicSemesterIntoDB = async (payload: AcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('invalid code');
  }

  const result = await AcademicSemesterModel.create(payload);
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
};
