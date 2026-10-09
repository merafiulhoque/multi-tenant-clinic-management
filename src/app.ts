import express from "express"
import morgan from "morgan"
import { AppError, globalErrorHandler } from "./shared/global_handlers/errorHandler.js"
import { router } from "./config/routes.js"




export const app = express()

app.use(morgan("dev"))

app.use(express.json({limit: "500kb"}))
app.use(express.urlencoded({extended: true}))

app.use(router)

app.use(globalErrorHandler)