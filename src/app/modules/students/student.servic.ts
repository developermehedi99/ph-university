import { Student } from './student.interface';
import { studentModel } from './student.schemodel';

const createStudentIntoDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudentsIntoDB = async () => {
  const result = await studentModel.find();
  return result;
};

const getSingleStudentsIntoDB = async (id: string) => {
  const result = await studentModel.findOne({ _id: id });
  return result;
};

const DeleteStudentsIntoDB = async (id: string) => {
  const result = await studentModel.deleteOne({ _id: id });
  return result;
};

export const studentService = {
  createStudentIntoDB,
  getAllStudentsIntoDB,
  getSingleStudentsIntoDB,
  DeleteStudentsIntoDB,
};
