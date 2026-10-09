import { createClient } from "redis";
import { AppConfig } from "../../config/AppConfig.js";

export const redis = createClient({
    url: AppConfig.REDIS_URL!
})

redis.on("error", (error) => {
    console.error("REDIS: error , ", error)
})

const connectRedis = async () => {
    await redis.connect()
    console.log("REDIS: connected")
}