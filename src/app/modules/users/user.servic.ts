import config from '../../config';
import { Student } from '../students/student.interface';
import { studentModel } from '../students/student.schemodel';
import { TUser } from './user.interface';
import { userModel } from './user.model';

const createStudentIntoDB = async (password: string, studentData: Student) => {
  // create user object
  const userData: Partial<TUser> = {};
  // if don't give password use default
  userData.password = password || (config.default_pass as string);

  //set student roll
  userData.role = 'student';
  //set manually generated id
  userData.id = '2030100004';

  //create user
  const newUser = await userModel.create(userData);
  // console.log(newUser);
  //create student
  if (Object.keys(newUser).length) {
    //set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await studentModel.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
