import { Router } from "express"
import {
  createUsersController,
  listUsersController,
  updateUsersController,
} from "../controllers/users.controllers"
import checkEmailExistsMiddleware from "../middlewares/checkEmailExists.middleware"
import checkIdExistsMiddleware from "../middlewares/checkIdExists.middleware"

const userRoutes: Router = Router()

userRoutes.post("", checkEmailExistsMiddleware, createUsersController)
userRoutes.get("", listUsersController)
userRoutes.patch("/:id", checkIdExistsMiddleware, updateUsersController)

export default userRoutes
