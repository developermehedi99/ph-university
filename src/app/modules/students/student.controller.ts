import { studentService } from './student.servic';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await studentService.getAllStudentsIntoDB();
  res.status(200).json({
    success: true,
    message: 'all students are here',
    data: result,
  });
});

const getSingleStudents = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.getSingleStudentsIntoDB(studentId);
  res.status(200).json({
    success: true,
    message: 'single student are here',
    data: result,
  });
});

const deleteStudents = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentService.DeleteStudentsIntoDB(studentId);
  res.status(200).json({
    success: true,
    message: 'delete is successfully done',
    data: result,
  });
});

export const studentController = {
  getAllStudents,
  getSingleStudents,
  deleteStudents,
};
