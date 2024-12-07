import { NextFunction, Request, Response } from 'express';
import { studentService } from './student.servic';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentService.getAllStudentsIntoDB();
    res.status(200).json({
      success: true,
      message: 'all students are here',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSingleStudentsIntoDB(studentId);
    res.status(200).json({
      success: true,
      message: 'single student are here',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudents = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = studentService.DeleteStudentsIntoDB(studentId);
    res.status(200).json({
      success: true,
      message: 'delete is successfully done',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudents,
  deleteStudents,
};
