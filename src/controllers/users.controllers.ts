import { Request, Response } from "express"
import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces"
import createUsersService from "../services/users/createUsers.service"
import listUsersService from "../services/users/listUsers.service"
import updateUsersService from "../services/users/updateUsers.service"
import { userSchemaRequest } from "../schemas/users.schemas"

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = userSchemaRequest.parse(req.body)
  console.log(userData)
  const newUser: TUserResponse = await createUsersService(userData)
  return res.status(201).json(newUser)
}

const listUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await listUsersService()
  return res.json(users)
}

// const checkIdExistsController = async (
//   req: Request,
//   res: Response
// ): Promise<Response> => {
//   const user = await checkIdExistsService(res.locals.user)

//   return res.json(user)
// }

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id)
  const userData: Partial<TUserRequest> = req.body

  const updatedUser = await updateUsersService(userId, userData)

  return res.json(updatedUser)
}

export { createUsersController, listUsersController, updateUsersController }
