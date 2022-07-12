import { Router } from "express";
import { operationsController } from "../Controllers/operationsController";

const operationsRouters = Router()

operationsRouters.use('/operations', operationsController)