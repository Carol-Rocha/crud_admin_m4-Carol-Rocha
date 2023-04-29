import { Request, Response } from "express"
import {
  TUpdateUserRequest,
  TUserRequest,
  TUserResponse,
} from "../interfaces/users.interfaces"
import createUsersService from "../services/users/createUsers.service"
import listUsersService from "../services/users/listUsers.service"
import updateUsersService from "../services/users/updateUsers.service"
import getProfileService from "../services/users/getProfile.service"

const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRequest = req.body
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

const getProfileController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const email: string = res.locals.email
  console.log(email)
  const profile = await getProfileService(email)

  return res.json(profile)
}

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = Number(req.params.id)
  const userData: TUpdateUserRequest = req.body
  console.log(userData)
  const updatedUser = await updateUsersService(userId, userData)

  return res.json(updatedUser)
}

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.json("delete")
}

export {
  createUsersController,
  listUsersController,
  updateUsersController,
  getProfileController,
}
