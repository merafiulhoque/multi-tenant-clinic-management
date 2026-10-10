import { AppConfig } from "../../config/AppConfig.js"

const API_VERSION = "/api/v1"

export const ENDPOINTS = {
    HOME: API_VERSION + "/",
    HEALTH: API_VERSION + "/health",
    OWNER_REGISTRATION: API_VERSION + `/owners`,
    OWNER_SIGNIN: API_VERSION + "/owners/signin",
    OWNER_EMAIL_SEND_OTP: API_VERSION + "/owner/email/get-otp",
    OWNER_EMAIL_VERIFY_OTP: API_VERSION + "/owner/email/verify-otp",
    CLINIC_CREATE: API_VERSION + "/clinics"
    
} as const

export const AUTH_SERVICE_ENDPOINTS = {
    SIGNUP: AppConfig.AUTH_SERVICE_URL + "/api/v1/auth/signup",
    SIGNIN: AppConfig.AUTH_SERVICE_URL + "/api/v1/auth/signin",
    GET_OTP_VIA_MAIL: AppConfig.AUTH_SERVICE_URL + "/api/v1/auth/send-otp",
    VERIFY_OTP: AppConfig.AUTH_SERVICE_URL + "/api/v1/auth/verify-otp",
    GET_ID: AppConfig.AUTH_SERVICE_URL + "/api/v1/auth/getuserid"
} as const

// const (
// 	version              = "v1"
// 	POST_SIGNUP          = "POST /api/" + version + "/auth/signup"
// 	POST_SIGNIN          = "POST /api/" + version + "/auth/signin"
// 	POST_SIGNOUT         = "POST /api/" + version + "/auth/signout"
// 	POST_SEND_OTP        = "POST /api/" + version + "/auth/send-otp"
// 	POST_VERIFY_OTP      = "POST /api/" + version + "/auth/verify-otp"
// 	GET_REFRESH          = "GET /api/" + version + "/auth/refresh"
// 	POST_RESET_PASSWORD  = "POST /api/" + version + "/auth/reset-password"
// 	POST_UPDATE_PASSWORD = "POST /api/" + version + "/auth/update-password"
// 	GET_ME               = "GET /api/" + version + "/auth/me"
// )