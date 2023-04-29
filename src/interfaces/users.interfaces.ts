import { z } from "zod"
import {
  updateStatusActiveSchema,
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

type TUpdateStatusActive = z.infer<typeof updateStatusActiveSchema>

export {
  IUser,
  TUserRequest,
  TUserResponse,
  TUpdateUserRequest,
  TUpdateStatusActive,
}
