import { app } from "./app.js";
import { AppConfig } from "./config/AppConfig.js";

const startServer = () => {
    const { READY } = AppConfig

    if (!READY) {
        console.log("No configs found, Terminating...")
        process.exit(1)
    }

    app.listen(Number(AppConfig.PORT), () => {
        console.log(`SERVER: running at ${AppConfig.HOST}:${AppConfig.PORT}`)
    })
}

startServer()