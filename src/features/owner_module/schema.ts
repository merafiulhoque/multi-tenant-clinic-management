import z from "zod"

export const ownerRegistrationSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export type ownerRegistrationData = z.infer<typeof ownerRegistrationSchema>;

export const ownerSigninSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export type ownerSigninData = z.infer<typeof ownerSigninSchema>