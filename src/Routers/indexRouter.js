import { Router } from "express";
import loginRouter from "./loginRouter.js";
import logoutRouter from "./logoutRouter.js";
import operationsRouters from "./operationsRouter.js";
import registerRouter from "./registerRouter.js";
import testRouter from "./testRouter.js";

const indexRouter = Router()

indexRouter.use(testRouter)
indexRouter.use(registerRouter)
indexRouter.use(loginRouter)
indexRouter.use(logoutRouter)
indexRouter.use(operationsRouters)

export default indexRouter