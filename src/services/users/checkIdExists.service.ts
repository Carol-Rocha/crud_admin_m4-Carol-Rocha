import { QueryConfig, QueryResult } from "pg"
import { TUser } from "../../__tests__/mocks/interfaces"
import { client } from "../../database"
import { AppError } from "../../error"

// const checkIdExistsService = async (
//   userId: number
// ): Promise<TUser | string> => {
//   const queryString: string = `
//     SELECT
//          *
//     FROM
//          users
//     WHERE
//          id = $1;
//     `

//   const queryConfig: QueryConfig = {
//     text: queryString,
//     values: [userId],
//   }

//   const queryResult: QueryResult<TUser> = await client.query(queryConfig)

//   if (queryResult.rowCount === 0) {
//     throw new AppError("User not found", 404)
//   }

//   return queryResult.rows[0]
// }

// export default checkIdExistsService
