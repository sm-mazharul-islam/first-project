import { z } from 'zod';

const createUserNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(20, { message: 'First Name cannot be more than 20 characters' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
});

const createGuardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father Contact No is required' }),
  motherName: z.string().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother Contact No is required' }),
});

const createLocalGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  occupation: z.string().min(1, { message: 'Occupation is required' }),
  contactNo: z.string().min(1, { message: 'Contact No is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
});

export const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: createUserNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email({ message: 'Email is not a valid email type' }),
      contactNo: z.string().min(1, { message: 'Contact No is required' }),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency Contact No is required' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present Address is required' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent Address is required' }),
      guardian: createGuardianValidationSchema,
      localGuardian: createLocalGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

const updateUserNameValidationSchema = z.object({
  firstName: z.string().min(1).max(20).optional(),
  middleName: z.string().optional(),
  lastName: z.string().min(1).optional(),
});

const updateGuardianValidationSchema = z.object({
  fatherName: z.string().min(1).optional(),
  fatherOccupation: z.string().optional(),
  fatherContactNo: z.string().min(1).optional(),
  motherName: z.string().min(1).optional(),
  motherOccupation: z.string().min(1).optional(),
  motherContactNo: z.string().min(1).optional(),
});

const updateLocalGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }).optional(),
  occupation: z
    .string()
    .min(1, { message: 'Occupation is required' })
    .optional(),
  contactNo: z
    .string()
    .min(1, { message: 'Contact No is required' })
    .optional(),
  address: z.string().min(1, { message: 'Address is required' }).optional(),
});

export const updateStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    student: z.object({
      name: updateUserNameValidationSchema.optional(),
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z
        .string()
        .email({ message: 'Email is not a valid email type' })
        .optional(),
      contactNo: z
        .string()
        .min(1, { message: 'Contact No is required' })
        .optional(),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency Contact No is required' })
        .optional(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present Address is required' })
        .optional(),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent Address is required' })
        .optional(),
      guardian: updateGuardianValidationSchema.optional(),
      localGuardian: updateLocalGuardianValidationSchema.optional(),
      admissionSemester: z.string().optional(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  createStudentValidationSchema,
  updateStudentValidationSchema,
};
