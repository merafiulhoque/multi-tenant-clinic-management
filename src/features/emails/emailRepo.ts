import { AUTH_SERVICE_ENDPOINTS } from "../../shared/constants/endpoint.js"
import { ApiResponse } from "../../shared/types/index.js"

export const sendOtpViaEmail = async (
    signal: AbortSignal, 
    email: string
): Promise<[ApiResponse<never>, number]> => {
    console.log(AUTH_SERVICE_ENDPOINTS.GET_OTP_VIA_MAIL)

    const res = await fetch(
        AUTH_SERVICE_ENDPOINTS.GET_OTP_VIA_MAIL,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email}),
            signal
        }
    )

    const response: ApiResponse<never> = await res.json()
    return [response, res.status]
}