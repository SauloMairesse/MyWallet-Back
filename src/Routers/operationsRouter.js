import { Router } from "express";
import { ListCollectionsCursor } from "mongodb";
import { listOpController } from "../Controllers/listOpControllers";
import { operationsController } from "../Controllers/operationsController";

const operationsRouters = Router()

operationsRouters.post('/operations', operationsController)
operationsRouters.get('/listOperations', listOpController)