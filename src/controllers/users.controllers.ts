import { Request, Response } from "express"
import { TUserRequest, TUserResponse } from "../interfaces/users.interfaces"
import createUsersService from "../services/users/createUsers.service"
import listUsersService from "../services/users/listUsers.service"
import updateUsersService from "../services/users/updateUsers.service"

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const userData: TUserRequest = req.body
    const newUser: TUserResponse = await createUsersService(userData)
    return res.status(201).json(newUser)
  } catch (error: any) {
    console.log(error)
    return res.status(400).json({
      message: error.message,
    })
  }
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
