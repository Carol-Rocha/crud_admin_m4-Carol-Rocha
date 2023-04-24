import { Router } from "express"
import {
  createUsersController,
  listUsersController,
} from "../controllers/users.controllers"
import checkEmailExistsMiddleware from "../middlewares/checkEmailExists.middleware"

const userRoutes: Router = Router()

userRoutes.post("", checkEmailExistsMiddleware, createUsersController)
userRoutes.get("", listUsersController)

export default userRoutes
