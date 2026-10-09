import z, { email } from "zod";

export const emailSchema = z.object({
    email: z.email()
})

export const otpVerifySchema = z.object({
    email: z.email(),
    otp: z.string()
})

export type otpVerifyData = z.infer<typeof otpVerifySchema>