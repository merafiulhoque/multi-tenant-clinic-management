import { JwtPayload } from "jsonwebtoken"

export interface ApiResponse<T> {
    success: boolean
    message: string
    data?: T
}

export interface OWNER_CLAIMS extends JwtPayload{
    ownerId: number
    email: string
}