import {  Response } from "express";

const sendResponse = <T>(res: Response, status: number, success: boolean, message: string, data?: T) => {
    return res.status(status).json(
        ((data !== undefined) && data) ? {success, message, data} : {success, message}
    )
}

export const successResponse = <T>(res: Response, status: number, message: string, data?: T) => {
    return sendResponse(res, status,true, message, data)
}

export const errorResponse = (res: Response, status: number,  message: string) => {
    return sendResponse(res, status, false, message)
}

export const createJSON = <T>(success: boolean, message: string, data?: T) => {
    return (data !== undefined && data) ? {success, message, data} : {success, message}
}