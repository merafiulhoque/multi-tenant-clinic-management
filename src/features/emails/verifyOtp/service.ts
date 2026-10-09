import { sendEmail } from "../../../shared/clients/resend.js"
import { ApiResponse } from "../../../shared/types/index.js"
import { verifyOtp } from "./repo.js"

export const service = async (
    signal: AbortSignal, 
    email: string, 
    otp: string
): Promise<[ApiResponse<never>, number]> => {
    const [response, status] = await  verifyOtp(signal, email, otp)
    if (response.success){
        sendEmail(
            email,
            "Welcome Onboard"
        )
    }
    return [response, status]
    
}