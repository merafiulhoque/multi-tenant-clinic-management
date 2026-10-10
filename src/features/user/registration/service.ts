import { ERR_MSG } from "../../../shared/constants/messages.js";
import { AppError } from "../../../shared/global_handlers/errorHandler.js";
import { createJSON } from "../../../shared/global_handlers/response.js";
import { ApiResponse, JWT_BASE_CLAIM } from "../../../shared/types/index.js";
import {createUser, createOwnerAccountInAuthService, getAuthServiceUserId} from "../userRepo.js";
import { ownerRegistrationData } from "../schema.js";

export const service = async (signal: AbortSignal, data: ownerRegistrationData): Promise<ApiResponse<JWT_BASE_CLAIM>> => {
    const authServiceResponse = await createOwnerAccountInAuthService(signal, data)
    if (!authServiceResponse.success || !authServiceResponse.data){
        if(authServiceResponse.message === ERR_MSG.USER_EXISTS){
            const response = await getAuthServiceUserId(signal, data.email)
            if (!response.success || !response.data || (typeof response.data !== "number")){
                throw new AppError(500, "something went wrong")
            }
            const newUser = await createUser(data.email, response.data)
            return createJSON(true, "user created", newUser)
        }
        throw new AppError(500, authServiceResponse.message)
    }
    
    const newUser = await createUser(data.email, authServiceResponse.data)
    return createJSON(true, "user created", newUser)
    
}