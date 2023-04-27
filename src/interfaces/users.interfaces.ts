import { z } from "zod"
import {
  updatedUserSchema,
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
} from "../schemas/users.schemas"

type IUser = z.infer<typeof userSchema>

// interface IUser {
//   id: number
//   name: string
//   email: string
//   password: string
//   admin: boolean
//   active: boolean
// }

// type TUserRequest = Omit<IUser, "id">

type TUserRequest = z.infer<typeof userSchemaRequest>

type TUserResponse = z.infer<typeof userSchemaResponse>

type TUpdateUserRequest = z.infer<typeof updatedUserSchema>

export { IUser, TUserRequest, TUserResponse, TUpdateUserRequest }
