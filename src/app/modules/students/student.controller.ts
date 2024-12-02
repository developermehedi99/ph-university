import { Request, Response } from 'express';
import { studentService } from './student.servic';
import studentValidationSchema from './student.validaition';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //data validation using zod
    const zodData = studentValidationSchema.parse(studentData);

    const result = await studentService.createStudentIntoDB(zodData);
    res.status(200).json({
      success: true,
      message: 'student create successfully done',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something is wrong',
      error: err,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getAllStudentsIntoDB();
    res.status(200).json({
      success: true,
      message: 'all students are here',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something is wrong',
      error: err,
    });
  }
};

const getSingleStudents = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentsIntoDB(studentId);
    res.status(200).json({
      success: true,
      message: 'single student are here',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something is wrong',
      error: err,
    });
  }
};

export const studentController = {
  createStudent,
  getAllStudents,
  getSingleStudents,
};
