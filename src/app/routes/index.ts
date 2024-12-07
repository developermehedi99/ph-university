import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { studentsRoutes } from '../modules/students/student.router';

const router = Router();

router.use('/users', UserRoutes);
router.use('/create-student', studentsRoutes);

export default router;
