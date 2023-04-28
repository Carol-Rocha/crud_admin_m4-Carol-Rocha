import {
  TLoginRequest,
  TLoginResponse,
} from "../../interfaces/login.interfaces"
import { QueryResult } from "pg"
import { client } from "../../database"
import format from "pg-format"
import { AppError } from "../../error"
import * as bcrypt from "bcryptjs"
import { IUser } from "../../interfaces/users.interfaces"
import jwt from "jsonwebtoken"

const createLoginService = async (
  payload: TLoginRequest
): Promise<TLoginResponse> => {
  const query: string = `
    SELECT
          *
    FROM
          users
    WHERE
          email = %L;
    `

  const queryFormat: string = format(query, payload.email)
  const queryResult: QueryResult<IUser> = await client.query(queryFormat)
  const user = queryResult.rows[0]

  if (queryResult.rowCount === 0) {
    throw new AppError("Wrong email/password", 401)
  }

  const comparePassword: boolean = await bcrypt.compare(
    payload.password,
    user.password
  )

  if (!comparePassword) {
    throw new AppError("Wrong email/password", 401)
  }

  const token: string = jwt.sign(
    {
      email: user.email,
    },
    "secret key",
    {
      expiresIn: "1d",
      subject: user.id.toString(),
    }
  )

  return { token }
}

export default createLoginService
