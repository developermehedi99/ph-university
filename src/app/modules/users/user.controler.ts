import { Request, Response } from 'express';
import { userServices } from './user.servic';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    //data validation zod
    // const zodData = UserValidationZod.parse(studentData);
    const result = userServices.createStudentIntoDB(password, studentData);
    res.status(200).json({
      success: true,
      message: 'student create successfully done',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something is wrong',
      error,
    });
  }
};

export const UserController = {
  createStudent,
};
