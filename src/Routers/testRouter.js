import {Router} from 'express'
import { findTestController, insertTestController } from '../Controllers/testController.js'

const testRouter = Router()

testRouter.get('/insert', insertTestController)
testRouter.get('/find', findTestController)

export default testRouter;
