import z from "zod";

export const addressSchema = z.object({
    address_name: z
        .string()
        .min(1, "Please give a name to this address")
        .max(100, "Max 100 characters"),

    address: z
        .string()
        .min(1, "Please give a address")
        .max(255, "Max 255 characters"),

    number: z.
        string().
        min(1, "Please inform the address number").
        max(10, "Max 10 characters"),

    complement: z
        .string()
        .max(255, "Max 255 characters")
        .optional()
        .or(z.literal("")),

    district: z
        .string()
        .min(1, "Please inform the district")
        .max(100, "Max 100 characters"),

    zip_code: z
        .string()
        .regex(/^\d{5}-\d{3}$/, "Invalid post code, Use the format XXXXX-XXX"),

    city: z
        .string()
        .min(1, "Please inform the city")
        .max(100, "Max 100 characters"),

    state: z
        .string()
        .regex(/^[A-Z]{2}$/, "State must have exactely 2 upper case letters")
});

export type AddressFormData = z.infer<typeof addressSchema>;