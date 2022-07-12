import { Router } from "express";
import { logoutController } from "../Controllers/logoutController.js";

const logoutRouter = Router()

logoutRouter.post('/logout', logoutController)
 
export default logoutRouter