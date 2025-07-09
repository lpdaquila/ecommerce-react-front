import z from "zod";

export const profileSchema = z.object({
    name: z
        .string()
        .min(1, "Name cannot be empty")
        .min(3, "Name must have at least 3 characters")
        .max(100, "Max 100 characters"),

    email: z
        .string()
        .min(1, "Email cannot be empty")
        .email("Please give a valid email"),

    document: z
        .string()
        .regex(/^.{11,}$/, "Invalid document format")
        .optional()
        .or(z.literal("")),

    phone: z
        .string()
        .min(10, "Phone must have at least 10 numbers")
        .max(15, "Please give a valid phone")
        .optional()
        .or(z.literal(""))
});

export type ProfileFormData = z.infer<typeof profileSchema>;
