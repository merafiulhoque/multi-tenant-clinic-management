import { Router } from "express";
import { ENDPOINTS } from "../shared/constants/endpoint.js";
import { asyncHandler } from "../shared/global_handlers/asyncHandler.js";
import { ownerRegistration } from "../features/user/registration/handler.js";
import { handler as GetOTP } from "../features/emails/getOtp/handler.js";
import { handler as VerifyOTP } from "../features/emails/verifyOtp/handler.js";
import { handler as ownerLogin} from "../features/user/signin/handler.js";

export const router = Router()

//home router
router.get(
    ENDPOINTS.HOME,
    (_req, res) => {
        return res.status(200).send("Welcome to CLINIC MANAGEMENT")
    }
)

// owner registration
router.post(
    ENDPOINTS.OWNER_REGISTRATION, 
    asyncHandler(ownerRegistration)
)

//owner email get otp
router.post(
    ENDPOINTS.OWNER_EMAIL_SEND_OTP,
    asyncHandler(GetOTP)
)

//owner email verify
router.post(
    ENDPOINTS.OWNER_EMAIL_VERIFY_OTP,
    asyncHandler(VerifyOTP)
)

//owner login
router.post(
    ENDPOINTS.OWNER_SIGNIN,
    asyncHandler(ownerLogin)
)