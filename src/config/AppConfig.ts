import dotenv from "dotenv"
dotenv.config({
    quiet: true,
    debug: true
})


const ENV = process.env

export const AppConfig = {
    READY: false,
    HOST: ENV.HOST ?? "localhost", 
    PORT: ENV.PORT,
    DATABASE_URL: ENV.DATABASE_URL,
    JWT_SECRET: ENV.JWT_SECRET,
    REDIS_URL: ENV.REDIS_URL,
    AUTH_SERVICE_URL: ENV.AUTH_SERVICE_URL,
    RESEND_API_KEY: ENV.RESEND_API_KEY,
    EMAIL_SENDER_DOMAIN: ENV.EMAIL_SENDER_DOMAIN
}

if (
    !AppConfig.PORT || 
    !AppConfig.DATABASE_URL || 
    !AppConfig.JWT_SECRET ||
    !AppConfig.REDIS_URL ||
    !AppConfig.AUTH_SERVICE_URL ||
    !AppConfig.RESEND_API_KEY ||
    !AppConfig.EMAIL_SENDER_DOMAIN
){
    AppConfig.READY = false
} else {
    AppConfig.READY = true
}