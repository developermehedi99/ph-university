import catchAsync from '../../utils/catchAsync';
import { userServices } from './user.servic';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  const result = await userServices.createStudentIntoDB(password, studentData);
  res.status(200).json({
    success: true,
    message: 'student create successfully done',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
