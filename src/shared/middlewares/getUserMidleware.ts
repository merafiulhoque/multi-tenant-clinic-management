import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../global_handlers/response.js";
import { ERR_MSG } from "../constants/messages.js";
import { VerifyToken } from "../utility/jwt.js";

export const getUserMidleware = (req: Request, res: Response, next: NextFunction)=> {
    const authHeader = req.headers.authorization

    if (!authHeader || (typeof authHeader !== "string")){
        return errorResponse(res, 400, ERR_MSG.BAD_REQUEST)
    }
    
    const parts = authHeader.split(" ")

    if (
        parts[0] !== "Bearer" ||
        parts.length !== 2
    ) return errorResponse(res, 400, ERR_MSG.BAD_REQUEST)
    const claims = VerifyToken(parts[1])
    // req.user = claims
}