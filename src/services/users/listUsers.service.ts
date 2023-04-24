import { QueryResult } from "pg"
import { TUserResponse } from "../../interfaces/users.interfaces"
import { client } from "../../database"

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
