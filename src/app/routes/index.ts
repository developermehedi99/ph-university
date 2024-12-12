import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { studentsRoutes } from '../modules/students/student.router';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemister.route';

const router = Router();

router.use('/users', UserRoutes);
router.use('/create-student', studentsRoutes);
router.use('/academic-semesters', academicSemesterRouter);

export default router;
