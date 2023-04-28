import { QueryResult } from "pg"
import jwt from "jsonwebtoken"
import { TUserResponse } from "../../interfaces/users.interfaces"
import { client } from "../../database"
import { AppError } from "../../error"
import "dotenv/config"

const listUsersService = async (): Promise<Array<TUserResponse>> => {
  const querystring: string = `
     SELECT 
     "id", "name", "email", "admin", "active"
    FROM
        users;
    `

  const queryResult: QueryResult<TUserResponse> = await client.query(
    querystring
  )

  return queryResult.rows
}

export default listUsersService
