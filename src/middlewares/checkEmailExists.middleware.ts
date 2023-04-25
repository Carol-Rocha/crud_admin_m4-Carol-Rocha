import { NextFunction, Request, Response } from "express"
import { QueryConfig, QueryResult } from "pg"
import { client } from "../database"
import { AppError } from "../error"

const checkEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const email: string = req.body.email

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

  const queryResult: QueryResult = await client.query(queryConfig)

  if (queryResult.rowCount > 0) {
    throw new AppError("Email already exists", 409)
  }

  return next()
}

export default checkEmailExistsMiddleware
