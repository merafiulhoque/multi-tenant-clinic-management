import z from "zod";

export const validateSchema = <T extends z.ZodType>(
    data: unknown,
    schema: T
) => {
    return schema.safeParse(data)
}