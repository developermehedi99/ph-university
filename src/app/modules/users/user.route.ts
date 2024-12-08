import express from 'express';
import { UserController } from './user.controler';
import { studentValidations } from '../students/student.validaition';
import validationRequests from '../../middleware/validationRequest';
const router = express.Router();

router.post(
  '/create-student',
  validationRequests(studentValidations.createStudentValidationSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
