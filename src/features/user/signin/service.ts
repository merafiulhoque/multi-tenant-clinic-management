import { ownerSignin } from "../userRepo.js";
import { ownerSigninData } from "../schema.js";

export const service = async (signal: AbortSignal, data: ownerSigninData) => {
    return await ownerSignin(signal, data)
}