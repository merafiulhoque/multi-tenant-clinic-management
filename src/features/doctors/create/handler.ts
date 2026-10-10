import {validateSchema} from "../../../shared/utility/validateSchema.js";
import {doctorCreateSchema} from "../schema.js";
import {errorResponse, successResponse} from "../../../shared/global_handlers/response.js";
import {ERR_MSG, RES_UNAUTHORIZED} from "../../../shared/constants/messages.js";
import {Request, Response} from "express";
import {doctorCreateService} from "./service.js";

export const doctorCreateHandler = async (
    req: Request,
    res: Response
) => {
    const user = req.user;

    if (!user){
        return res.status(401).json(RES_UNAUTHORIZED)
    }

    const result = validateSchema(req.body, doctorCreateSchema)

    if (!result.success){
        return errorResponse(res, 422, ERR_MSG.INVALID_INPUT)
    }
    const newDoctorId = await doctorCreateService(result.data, user.id)
    return successResponse(res, 201, ERR_MSG.DOCTOR_CREATED,newDoctorId)
}