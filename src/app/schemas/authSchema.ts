import z from "zod";

export const authSchema = z.object({
    email: z.string().min(1, "Please enter your email").email("Please give a valid email"),
    password: z.string().min(1, "Please enter your password")
});

export type AuthFormData = z.infer<typeof authSchema>;