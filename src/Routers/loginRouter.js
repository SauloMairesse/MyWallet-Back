import {Router} from 'express'
import { loginController } from '../Controllers/loginController.js'

const loginRouter = Router()

loginRouter.post('/login', loginController)

export default loginRouter;
