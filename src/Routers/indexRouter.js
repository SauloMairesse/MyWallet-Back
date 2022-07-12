import { Router } from "express";
import loginRouter from "./loginRouter.js";
import logoutRouter from "./logoutRouter.js";
import registerRouter from "./registerRouter.js";
import testRouter from "./testRouter.js";

const indexRouter = Router()

indexRouter.use(testRouter)
indexRouter.use(registerRouter)
indexRouter.use(loginRouter)
indexRouter.use(logoutRouter)

export default indexRouter