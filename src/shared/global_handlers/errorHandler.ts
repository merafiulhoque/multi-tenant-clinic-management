import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { errorResponse } from "./response.js";


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

    if (err instanceof Error){
        return errorResponse(
            res,
            500,
            err.message
        )
    }
    return errorResponse(res, 500, "something went wrong")
}