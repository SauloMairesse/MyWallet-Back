import { Router } from "express";
import { debitsController } from "../Controllers/debitsController";
import { depositeController } from "../Controllers/depositeController";

const operationsRouters = Router()

operationsRouters.use('/deposit', depositeController)
operationsRouters.use('/debits', debitsController)