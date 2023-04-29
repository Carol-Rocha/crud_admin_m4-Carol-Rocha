import { Request, Response } from "express"
import { TLoginRequest, TLoginResponse } from "../interfaces/login.interfaces"
import createLoginService from "../services/login/createLogin.service"

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TLoginRequest = req.body
  res.locals.email = req.body.email
  console.log(res.locals.email)

  const token: TLoginResponse = await createLoginService(userData)
  return res.status(201).json(token)
}

export { loginController }
