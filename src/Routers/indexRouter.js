import { Router } from "express";
import testRouter from "./testRouter.js";

const indexRouter = Router()

indexRouter.use(testRouter)

export default indexRouter