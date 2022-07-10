import {Router} from 'express'
import { registerController } from '../Controllers/registerController.js'

const registerRouter = Router()

testRouter.get('/register', registerController)

export default registerRouter;
