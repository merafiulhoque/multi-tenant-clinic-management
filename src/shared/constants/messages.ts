export const ERR_MSG = {
    INVALID_INPUT: "invalid input",
    UNAUTHORIZED: "unauthorized",
    BAD_REQUEST: "bad request",
    USER_EXISTS: "err user exists",
    SOMETHING_WRONG: "something went wrong"
} as const

export const RES_UNAUTHORIZED = {
    success: false,
    message: ERR_MSG.UNAUTHORIZED
} as const