import { Router } from "express";
import registerRouter from "./registerRouter.js";
import testRouter from "./testRouter.js";

const indexRouter = Router()

indexRouter.use(testRouter)
indexRouter.use(registerRouter)

export default indexRouter