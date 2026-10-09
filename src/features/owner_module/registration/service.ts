import { createJSON } from "../../../shared/global_handlers/response.js";
import { ApiResponse } from "../../../shared/types/index.js";
import { createOwner, createOwnerAccountInAuthService } from "../ownerRepo.js";
import { ownerRegistrationData } from "../schema.js";

export const service = async (signal: AbortSignal, data: ownerRegistrationData): Promise<ApiResponse<number>> => {
    const authServiceResponse = await createOwnerAccountInAuthService(signal, data)
    if (!authServiceResponse.success || !authServiceResponse.data) return authServiceResponse
    
    const ownerId = await createOwner(data.email, authServiceResponse.data)
    return createJSON(true, "owner created", ownerId)
    
}