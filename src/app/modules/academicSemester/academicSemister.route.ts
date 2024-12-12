import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
import validationRequests from '../../middleware/validationRequest';
import { AcademicSemesterValidation } from './academic.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validationRequests(
    AcademicSemesterValidation.CreateAcademicSemesterValidation,
  ),
  academicSemesterController.createAcademicSemester,
);

export const academicSemesterRouter = router;
