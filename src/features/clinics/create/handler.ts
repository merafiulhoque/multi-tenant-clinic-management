import { Request, Response } from "express"
import {validateSchema} from "../../../shared/utility/validateSchema.js";
import {Clinic, clinicCreationSchema} from "../schema.js";
import {errorResponse, successResponse} from "../../../shared/global_handlers/response.js";
import {ERR_MSG, RES_UNAUTHORIZED} from "../../../shared/constants/messages.js";
import {clinicCreateService} from "./service.js";

export const clinicCreateHandler = async (req: Request, res: Response) => {
    const user = req.user;

    if (!user){
        return res.status(401).json(RES_UNAUTHORIZED)
    }

    const result =  validateSchema(req.body, clinicCreationSchema)

    if (!result.success) {
        return errorResponse(res, 422, ERR_MSG.INVALID_INPUT)
    }
    const clinic = await clinicCreateService(user.id, result.data)
    return successResponse<Clinic>(res, 201, "clinic created",clinic)
}