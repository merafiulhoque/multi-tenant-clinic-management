import z from "zod";

export const clinicCreationSchema = z.object({
    name: z.string(),
    location: z.string()
})

export type ClinicCreationData = z.infer<typeof clinicCreationSchema>


export interface Clinic {
    name: string
    location: string
}