import { Router } from "express"
import { loginController } from "../controllers/login.controllers"

const loginRouter: Router = Router()

loginRouter.post("", loginController)

export default loginRouter
