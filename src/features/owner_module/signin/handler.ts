import { Request, Response } from "express"
import { validateSchema } from "../../../shared/utility/validateSchema.js"
import { ownerSigninSchema } from "../schema.js"
import { errorResponse } from "../../../shared/global_handlers/response.js"
import { ERR_RESPONSE } from "../../../shared/constants/messages.js"
import { service } from "./service.js"

export const handler = async (req: Request, res: Response) => {
    const signal = AbortSignal.timeout(10000)
    const result = validateSchema(req.body, ownerSigninSchema)

    if (!result.success) return errorResponse(res, 422, ERR_RESPONSE.ERR_INVALID_INPUT)
    const [response, status] = await service(signal, result.data)
    return res.status(status).json(response)
}