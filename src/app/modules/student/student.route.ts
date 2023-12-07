import express from 'express';
import { StudentControllers } from './student.controller';

import { updateStudentValidationSchema } from './student.validation';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();

router.get('/:id', StudentControllers.getSingleStudent);
router.delete('/:id', StudentControllers.deleteStudent);
router.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),
  StudentControllers.updateStudent,
);
router.delete('/:id', StudentControllers.deleteStudent);
router.get('/', StudentControllers.getAllStudents);
export const StudentRoutes = router;
