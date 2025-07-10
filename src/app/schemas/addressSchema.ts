import z from "zod";

export const addressSchema = z.object({
    address_name: z
        .string()
        .min(1, "Give a name to this address")
        .max(100, "Max 100 characters"),

    address: z
        .string()
        .min(1, "Inform the street name")
        .max(255, "Max 255 characters"),

    number: z.
        string().
        min(1, "Inform the number").
        max(10, "Max 10 characters"),

    complement: z
        .string()
        .max(255, "Max 255 characters")
        .optional()
        .or(z.literal("")),

    district: z
        .string()
        .min(1, "Inform the district")
        .max(100, "Max 100 characters"),

    zip_code: z
        .string()
        .min(1, "Inform the post code")
        .regex(/^\d{5}-\d{3}$/, "Invalid post code, Use the format XXXXX-XXX"),

    city: z
        .string()
        .min(1, "Inform the city")
        .max(100, "Max 100 characters"),

    state: z
        .string()
        .min(1, "Inform the state")
        .regex(/^[A-Z]{2}$/, "State must have only 2 characters")
});

export type AddressFormData = z.infer<typeof addressSchema>;