import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.js";
import { AppConfig } from "../../config/AppConfig.js";


const adapter = new PrismaPg({
    connectionString: AppConfig.DATABASE_URL!
})

export const prisma = new PrismaClient({
    adapter
})