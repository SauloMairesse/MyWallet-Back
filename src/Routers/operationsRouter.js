import { Router } from "express";
import { deleteController } from "../Controllers/deleteController";
import { listOpController } from "../Controllers/listOpControllers";
import { operationsController } from "../Controllers/operationsController";

const operationsRouters = Router()

operationsRouters.post('/operations', operationsController)
operationsRouters.get('/listOperations', listOpController)
operationsRouters.post('/delete', deleteController)

export default operationsRouters
