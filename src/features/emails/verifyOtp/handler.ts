import { Request, Response } from "express";
import { validateSchema } from "../../../shared/utility/validateSchema.js";
import { otpVerifySchema } from "../schema.js";
import { errorResponse } from "../../../shared/global_handlers/response.js";
import { service } from "./service.js";

export const handler = async (req: Request, res: Response) => {
    const signal = AbortSignal.timeout(5000)

    const result = validateSchema(req.body, otpVerifySchema)

    if (!result.success) return errorResponse(res, 422, "invalid input")
    const [response, status] = await service(signal, result.data.email, result.data.otp)
    return res.status(status).json(response)
}