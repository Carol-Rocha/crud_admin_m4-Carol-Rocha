import format from "pg-format"
import {
  TUpdateUserRequest,
  TUserRequest,
  TUserResponse,
} from "../../interfaces/users.interfaces"
import { QueryConfig, QueryResult } from "pg"
import { client } from "../../database"
import { userSchemaResponse } from "../../schemas/users.schemas"

const updateUsersService = async (
  userId: number,
  userData: TUpdateUserRequest
): Promise<TUserResponse> => {
  const queryString: string = format(
    `
        UPDATE users 
             SET(%I) = ROW(%L)
        WHERE
             id = $1
        RETURNING
                 *;
        `,
    Object.keys(userData),
    Object.values(userData)
  )

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userId],
  }

  const queryResult: QueryResult<TUserResponse> = await client.query(
    queryConfig
  )

  const updatedUser = userSchemaResponse.parse(queryResult.rows[0])

  return updatedUser
}

export default updateUsersService
