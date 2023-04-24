import { QueryResult } from "pg"
import { TUserRequest, TUserResponse } from "../../interfaces/users.interfaces"
import format from "pg-format"
import { client } from "../../database"

const createUsersService = async (
  userData: TUserRequest
): Promise<TUserResponse> => {
  const queryString: string = format(
    `
         INSERT INTO 
                users(%I)
        VALUES
                (%L)
        RETURNING
                "id", "name", "email", "admin", "active";
        `,
    Object.keys(userData),
    Object.values(userData)
  )

  const queryResult: QueryResult<TUserResponse> = await client.query(
    queryString
  )

  return queryResult.rows[0]
}

export default createUsersService