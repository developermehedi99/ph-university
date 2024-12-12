export type AcademicSemesterName = 'autumn' | 'summer' | 'fall';
export type AcademicSemesterCode = '01' | '02' | '03';
export type Months =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type AcademicSemester = {
  name: AcademicSemesterName;
  year: string;
  code: AcademicSemesterCode;
  startMonth: Months;
  endMonth: Months;
};

export type TacademicSemesterNameCode = {
  [keys: string]: string;
};
