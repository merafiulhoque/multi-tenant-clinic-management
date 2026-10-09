import { Resend } from "resend"
import { AppConfig } from "../../config/AppConfig.js"

export const resend = new Resend(AppConfig.RESEND_API_KEY!)

export type EMAILTYPE = "ONBOARDING" | "EMAIL_VERIFY"




export const generateWelcomeEmailText = (): string => {
    return `
            <h1>Welcome to Clinic Management 🎉</h1>

            <h2>Welcome aboard!</h2>

            <p>
                We’re excited to have you with us. Your account has been
                successfully created, and you’re ready to get started.
            </p>

            <p>
                You can now set up your clinic, manage your team, organize
                doctors and patients, and streamline your day-to-day
                clinic operations from one place.
            </p>

            <p>
                If you have any questions or need help getting started,
                we’re here to help.
            </p>

            <p>
                <strong>Welcome aboard, and thank you for choosing us!</strong>
            </p>

            <p>
                — <strong>The Clinic Management Team</strong>
            </p>
        `
};

export const sendEmail =  (
    email: string,
    subject: string
) => {
    resend.emails.send({
        from: AppConfig.EMAIL_SENDER_DOMAIN!,
        to: [email],
        subject: subject,
        html: generateWelcomeEmailText()
    })
}