import { prisma } from "../../shared/clients/prisma.js";
import { AUTH_SERVICE_ENDPOINTS } from "../../shared/constants/endpoint.js";
import { AppError } from "../../shared/global_handlers/errorHandler.js";
import { ApiResponse, JWT_BASE_CLAIM } from "../../shared/types/index.js";
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

export const createUser = async (
    email: string,
    id: number
): Promise<JWT_BASE_CLAIM> => {
    const newUser = await prisma.user.create({
        data: {
            userId: id,
            email: email
        },
        select: {userId: true, email: true}
    })
    return newUser
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
