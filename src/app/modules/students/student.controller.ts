import { Request, Response } from 'express';
import { studentService } from './student.servic';

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

const deleteStudents = (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = studentService.DeleteStudentsIntoDB(studentId);
    res.status(200).json({
      success: true,
      message: 'delete is successfully done',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'somethings is wrong',
      error: err,
    });
  }
};

export const studentController = {
  getAllStudents,
  getSingleStudents,
  deleteStudents,
};
