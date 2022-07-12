import {Router} from 'express'
import { registerController } from '../Controllers/registerController.js'

const registerRouter = Router()

registerRouter.post('/register', registerController)

export default registerRouter;
