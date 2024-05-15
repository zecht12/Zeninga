"use server"

import { getPasswordResetTokenByToken } from "@/data/password-reset-token"
import { getUserByEmail } from "@/data/user"
import { NewPasswordSchema } from "@/schemas"
import * as z from "zod"
import bcrypt from "bcryptjs";
import { db } from "@/lib/db"

export const newPassword = async (values: z.infer<typeof NewPasswordSchema>, token?: string | null) =>{

}