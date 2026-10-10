import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { errorResponse } from "./response.js";
import {PrismaClientKnownRequestError} from "@prisma/client/runtime/client";
import {threadId} from "node:worker_threads";
import {ERR_MSG} from "../constants/messages.js";


export class AppError extends Error{
    constructor(public status: number, message: string){
        super(message)
        this.name = "AppError"
    }
}



export const globalErrorHandler: ErrorRequestHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
    if (err instanceof AppError){
        return errorResponse(
            res,
            err.status,
            err.message
        )
    }

    if (err instanceof PrismaClientKnownRequestError){
        console.error(err.message)
        return errorResponse(
            res,
            409,
            err.message.includes("Unique constraint failed") ? ERR_MSG.USER_EXISTS : ERR_MSG.SOMETHING_WRONG
        )
    }

    if (err instanceof Error){
        return errorResponse(
            res,
            500,
            err.message === "jwt malformed" ? ERR_MSG.BAD_REQUEST: err.message
        )
    }
    return errorResponse(res, 500, "something went wrong")
}