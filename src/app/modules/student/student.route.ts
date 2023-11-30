import express from 'express';
import { StudentControllers } from './student.controller';

import { updateStudentValidationSchema } from './student.validation';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();

router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deleteStudent);
router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);
router.delete('/:studentId', StudentControllers.deleteStudent);
router.get('/', StudentControllers.getAllStudents);
export const StudentRoutes = router;
