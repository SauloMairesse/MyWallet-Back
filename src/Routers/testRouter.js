import {Router} from 'express'
import { criarbanco } from '../Controllers/criarbanco.js'
import { findTestController, insertTestController } from '../Controllers/testController.js'

const testRouter = Router()

testRouter.get('/insert', insertTestController)
testRouter.get('/find', findTestController)
testRouter.get('/', criarbanco)
export default testRouter;
