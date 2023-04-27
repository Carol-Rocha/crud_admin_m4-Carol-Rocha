import { Router } from "express"
import {
  createUsersController,
  listUsersController,
  updateUsersController,
} from "../controllers/users.controllers"
import checkEmailExistsMiddleware from "../middlewares/checkEmailExists.middleware"
import checkIdExistsMiddleware from "../middlewares/checkIdExists.middleware"
import checkBodyIsValidMiddleware from "../middlewares/checkBodyIsValid.middleware"
import { updatedUserSchema, userSchemaRequest } from "../schemas/users.schemas"

const userRoutes: Router = Router()

userRoutes.post(
  "",
  checkBodyIsValidMiddleware(userSchemaRequest),
  checkEmailExistsMiddleware,
  createUsersController
)
userRoutes.get("", listUsersController)
userRoutes.patch(
  "/:id",
  checkBodyIsValidMiddleware(updatedUserSchema),
  checkIdExistsMiddleware,
  updateUsersController
)

export default userRoutes
