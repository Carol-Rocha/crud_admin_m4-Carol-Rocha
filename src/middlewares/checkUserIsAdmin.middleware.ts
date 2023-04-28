import { NextFunction, Request, Response } from "express"
import { AppError } from "../error"

const checkUserIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { admin } = res.locals

  if (admin === false) {
    throw new AppError("Insufficient Permission", 403)
  }

  return next()
}

export default checkUserIsAdminMiddleware
