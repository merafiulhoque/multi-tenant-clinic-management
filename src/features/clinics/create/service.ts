import {ClinicCreationData} from "../schema.js";
import {createClinic, doesClinicExists} from "../clinicRepo.js";
import {AppError} from "../../../shared/global_handlers/errorHandler.js";

export  const clinicCreateService = async (
    ownerId: number,
    data: ClinicCreationData
) => {
    const exists = await doesClinicExists(ownerId, data);
    if (exists){
        throw new AppError(409, `Clinic already exists`);
    }
    return createClinic(ownerId, data)
}