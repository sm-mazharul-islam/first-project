import express from 'express';
import { createStudentValidationSchema } from '../student/student.validation';
import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
import { UserControllers } from './user.controller';
import { createAdminValidationSchema } from '../Admin/admin.validation';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

router.post(
  '/create-faculty',
  validateRequest(createFacultyValidationSchema),
  UserControllers.createFaculty,
);

router.post(
  '/create-admin',
  validateRequest(createAdminValidationSchema),
  UserControllers.createAdmin,
);
export const UserRoutes = router;
