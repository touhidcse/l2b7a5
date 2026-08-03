// 'use server';

// import { z } from 'zod';

// import { getErrorMessage, isZodError, formatZodErrors } from '@/lib/errorUtils';
// import { loginSchema } from '@/lib/validations/auth.schema';

// export type ValidationResult = {
//     success: boolean;
//     message: string;
//     errors?: Record<string, string[]>;
//     data?: unknown;
// };

// export async function validateLogin(formData: FormData): Promise<ValidationResult> {
//     try {
//         const data = {
//             email: formData.get('email'),
//             password: formData.get('password'),
//         };

//         const validated = loginSchema.parse(data);
//         return {
//             success: true,
//             message: 'Validation successful',
//             data: validated,
//         };
//     } catch (error) {
//         if (isZodError(error)) {
//             return {
//                 success: false,
//                 message: 'Validation failed',
//                 errors: formatZodErrors(error),
//             };
//         }
//         return {
//             success: false,
//             message: getErrorMessage(error),
//         };
//     }
// }

// export async function validateRegistration(formData: FormData): Promise<ValidationResult> {
//     try {
//         const data = {
//             name: formData.get('name'),
//             email: formData.get('email'),
//             password: formData.get('password'),
//             confirmPassword: formData.get('confirmPassword'),
//             role: formData.get('role'),
//         };

//         const validated = registrationSchema.parse(data);
//         return {
//             success: true,
//             message: 'Validation successful',
//             data: validated,
//         };
//     } catch (error) {
//         if (isZodError(error)) {
//             return {
//                 success: false,
//                 message: 'Validation failed',
//                 errors: formatZodErrors(error),
//             };
//         }
//         return {
//             success: false,
//             message: getErrorMessage(error),
//         };
//     }
// }