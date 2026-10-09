import { AppError } from "../../../shared/global_handlers/errorHandler.js";
import { createJSON } from "../../../shared/global_handlers/response.js";
import { ApiResponse, JWT_BASE_CLAIM } from "../../../shared/types/index.js";
import { createUser, createOwnerAccountInAuthService } from "../ownerRepo.js";
import { ownerRegistrationData } from "../schema.js";

export const service = async (signal: AbortSignal, data: ownerRegistrationData): Promise<ApiResponse<JWT_BASE_CLAIM>> => {
    const authServiceResponse = await createOwnerAccountInAuthService(signal, data)
    if (!authServiceResponse.success || !authServiceResponse.data){
        throw new AppError(500, authServiceResponse.message)
    }
    
    const newUser = await createUser(data.email, authServiceResponse.data)
    return createJSON(true, "user created", newUser)
    
}