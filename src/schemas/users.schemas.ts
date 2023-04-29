import { z } from "zod"

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  admin: z.boolean().optional(),
  active: z.boolean().optional(),
})

const userSchemaRequest = userSchema.omit({ id: true, active: true })
const userSchemaResponse = userSchema.omit({ password: true })

const updateStatusActiveSchema = userSchema.pick({ active: true }).required()

const updatedUserSchema = userSchemaRequest.omit({ admin: true }).partial()

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  updatedUserSchema,
  updateStatusActiveSchema,
}
