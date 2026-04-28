import { z } from "zod"


export const loginFormSchema = z.object({
    email: z.email("Invalid email address").trim(),
    password: z.string().min(1, "Password is required"),
})


export type loginFormType = z.infer<typeof loginFormSchema>