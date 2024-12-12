import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
  TacademicSemesterNameCode,
} from './academicSemester.interface';

export const academicSemesterNameS: AcademicSemesterName[] = [
  'autumn',
  'summer',
  'fall',
];
export const months: Months[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const academicSemesterNameCodeMapper: TacademicSemesterNameCode = {
  autumn: '01',
  summer: '02',
  fall: '03',
};
export const academicSemesterCodeS: AcademicSemesterCode[] = ['01', '02', '03'];
