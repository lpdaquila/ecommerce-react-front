import z from "zod";

export const signupSchema = z.object({
    name: z
        .string()
        .min(1, "Please enter your name")
        .min(3, "Name must have at least 3 characters")
        .max(100, "Max 100 characters"),

    email: z
        .string()
        .min(1, "Please enter your email")
        .email("Please give a valid email"),

    password: z
        .string()
        .min(1, "Please give a password")
        .regex(/^.{8,}$/, "Password must have at least 8 characters"),

    confirm: z
        .string()
        .min(1, "Confirm your password"),
})
    .refine((data) => data.password === data.confirm, {
        message: "Passwords don't match",
        path: ["confirm"],
    });

export type SignUpFormData = z.infer<typeof signupSchema>;