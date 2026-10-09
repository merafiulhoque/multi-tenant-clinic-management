import { JwtPayload } from "jsonwebtoken"

export interface ApiResponse<T> {
    success: boolean
    message: string
    data?: T
}

export interface OWNER_CLAIMS extends JwtPayload{
    id: number
    email: string
}

export interface JWT_BASE_CLAIM {
    userId: number
    email: string
}