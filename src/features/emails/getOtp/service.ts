import { ApiResponse } from "../../../shared/types/index.js"
import { sendOtpViaEmail } from "../emailRepo.js"

export const service = async (signal: AbortSignal, email: string) => {
    return await sendOtpViaEmail(signal, email)
}