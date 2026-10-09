import jwt from "jsonwebtoken"
import { AppConfig } from "../../config/AppConfig.js"
import { OWNER_CLAIMS } from "../types/index.js"
import { AppError } from "../global_handlers/errorHandler.js"
import { ERR_MSG } from "../constants/messages.js"

export const VerifyToken = (token: string): OWNER_CLAIMS => {
    const claims = jwt.verify(
        token, 
        AppConfig.JWT_SECRET!
    )

    if (typeof claims === "string"){
        throw new AppError(401, ERR_MSG.UNAUTHORIZED)
    }
    console.log(token, claims)
    return claims as OWNER_CLAIMS
}