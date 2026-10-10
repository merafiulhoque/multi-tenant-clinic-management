import { JwtPayload } from "jsonwebtoken"

export interface ApiResponse<T> {
    success: boolean
    message: string
    data?: T
}

export interface USER_CLAIM extends JwtPayload{
    id: number
    email: string
}