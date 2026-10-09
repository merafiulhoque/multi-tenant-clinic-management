import { AUTH_SERVICE_ENDPOINTS } from "../../../shared/constants/endpoint.js"
import { ApiResponse } from "../../../shared/types/index.js"

export const verifyOtp = async (
    signal: AbortSignal, 
    email: string, 
    otp: string
): Promise<[ApiResponse<never>, number]> => {
    const res = await fetch(
        AUTH_SERVICE_ENDPOINTS.VERIFY_OTP,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            signal, 
            body: JSON.stringify({email, otp})
        }
    )

    const response: ApiResponse<never> = await res.json()

    return [response, res.status]
}