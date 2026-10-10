import z from "zod";

export const doctorCreateSchema = z.object({
    firstName: z.string(),
    middleName: z.string().optional(),
    lastName: z.string().optional(),
    displayName: z.string().optional(),
    email: z.string().email(),
    fees: z.number(),
    clinicId: z.number(),
    specialization: z.string().optional(),
    qualification: z.string().optional(),
    registrationNumber: z.string().optional(),
    experienceYear: z.string().optional(),
    bio: z.string().optional()
})

export type DoctorCreateData = z.infer<typeof doctorCreateSchema>