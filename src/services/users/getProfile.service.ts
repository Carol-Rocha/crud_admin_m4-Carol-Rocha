import { QueryConfig, QueryResult } from "pg"
import { TUserResponse } from "../../interfaces/users.interfaces"
import { client } from "../../database"

const getProfileService = async (email: string): Promise<TUserResponse> => {
  const queryString: string = `
    SELECT 
          * 
    FROM 
          users
    WHERE  
          email = $1;
    `
  const queryConfig: QueryConfig = {
    text: queryString,
    values: [email],
  }

  const queryResult: QueryResult<TUserResponse> = await client.query(
    queryConfig
  )
  console.log(queryResult.rows[0])

  return queryResult.rows[0]
}
export default getProfileService
