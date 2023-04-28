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
import checkTokenIsValidMiddleware from "../middlewares/checkTokenIsValid.middleware"
import checkUserIsAdminMiddleware from "../middlewares/checkUserIsAdmin.middleware"

const userRoutes: Router = Router()

userRoutes.post(
  "",
  checkBodyIsValidMiddleware(userSchemaRequest),
  checkEmailExistsMiddleware,
  createUsersController
)
userRoutes.get(
  "",
  checkTokenIsValidMiddleware,
  checkUserIsAdminMiddleware,
  listUsersController
)
userRoutes.patch(
  "/:id",
  checkTokenIsValidMiddleware,
  checkBodyIsValidMiddleware(updatedUserSchema),
  checkIdExistsMiddleware,
  updateUsersController
)

export default userRoutes
