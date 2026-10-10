import {DoctorCreateData} from "../schema.js";
import {createDoctor, doctorExists} from "../doctorRepo.js";
import { getClinicById} from "../../clinics/clinicRepo.js";
import {ERR_MSG} from "../../../shared/constants/messages.js";
import {AppError} from "../../../shared/global_handlers/errorHandler.js";

export const doctorCreateService = async (
    data: DoctorCreateData,
    ownerId: number
) => {

    const clinicExist = await  getClinicById(data.clinicId, ownerId)

    if(!clinicExist){
       throw new AppError(
           400,
           ERR_MSG.CLINIC_DOES_NOT_EXIST
       )
    }

    const doctorExist = await doctorExists(data)
    if(doctorExist){
        throw new AppError(409, ERR_MSG.DOCTOR_EXIST)
    }

    return await createDoctor(data)
}