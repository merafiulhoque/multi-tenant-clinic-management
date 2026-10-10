import {OWNER_CLAIMS} from "./index.js";

declare global{
    namespace Express {
        interface Request {
            user?: OWNER_CLAIMS
        }
    } 
}