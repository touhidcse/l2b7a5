import { z } from "zod";


export const loginSchema = z.object({

    email: z
        .string()
        .email("Invalid email address"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
})

export type LoginFormData = z.infer<typeof loginSchema>



export const registrationSchema = z.object({

    name: z
        .string()
        .min(3, "Name must be at least 3 characters"),


    email: z
        .string()
        .email("Invalid email"),


    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),

    confirmPassword: z
        .string(),

    role: z.enum(["CUSTOMER", "TECHNICIAN"])
})
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Passwords don't match",
            path: ["confirmPassword"]
        }
    );


export type RegistrationFormData = z.infer<typeof registrationSchema>;