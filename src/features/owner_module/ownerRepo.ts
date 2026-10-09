import { prisma } from "../../shared/clients/prisma.js";
import { AUTH_SERVICE_ENDPOINTS } from "../../shared/constants/endpoint.js";
import { AppError } from "../../shared/global_handlers/errorHandler.js";
import { ApiResponse } from "../../shared/types/index.js";
import { ownerRegistrationData, ownerSigninData } from "./schema.js";
import { SIGNIN_RESPONSE_DATA } from "./types.js";

export const createOwnerAccountInAuthService = async (
    signal: AbortSignal,
    data: ownerRegistrationData
) => {
    const res = await fetch(
        AUTH_SERVICE_ENDPOINTS.SIGNUP,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
            signal
        }
    )

    const resData: ApiResponse<number> = await res.json()

    return resData
}

export const createOwner = async (
    email: string,
    id: number
): Promise<number> => {
    const { ownerId } = await prisma.owner.create({
        data: {
            ownerId: id,
            email: email
        },
        select: {
            ownerId: true
        }
    })
    return ownerId
}

export const ownerSignin = async (
    signal: AbortSignal,
    data: ownerSigninData
): Promise<[ApiResponse<SIGNIN_RESPONSE_DATA>, number]> => {
    try {
        const res = await fetch(
            AUTH_SERVICE_ENDPOINTS.SIGNIN,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
                signal
            }
        )
        if (res.status === 405){
            throw new AppError(405, "method not allowed")
        }
        return [await res.json(), res.status]
    } catch(err){
        throw err
    }
}
