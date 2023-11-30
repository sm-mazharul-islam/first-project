import express from 'express';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();

router.post(
  '/create-academic-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.createAcademicDepartment,
);

router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment,
);

router.patch(
  '/:departmentId',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,
  ),
  AcademicDepartmentControllers.updateAcademicDepartment,
);

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartments);

// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteStudent);
// router.get('/', StudentControllers.getAllStudents);
export const AcademicDepartmentRoutes = router;
