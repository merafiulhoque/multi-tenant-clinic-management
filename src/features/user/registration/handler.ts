import { Request, Response } from "express";
import { validateSchema } from "../../../shared/utility/validateSchema.js";
import { ownerRegistrationSchema } from "../schema.js";
import { errorResponse } from "../../../shared/global_handlers/response.js";
import { service } from "./service.js";

export const ownerRegistration = async (req: Request, res: Response) => {
    const signal = AbortSignal.timeout(5000)
    const result = validateSchema( req.body, ownerRegistrationSchema)
    if (!result.success){
        return errorResponse(res, 422, "invalid input")
    }
    const response = await service(signal, result.data)
    return res
            .status(response.success ? 201 : 400)
            .json(response)

}

