import * as z from "zod";

export const userEditSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  roleId: z.any().refine((role) => role, "Role is required"),
});

export const userCreateSchema = userEditSchema.extend({
  password: z.string().min(1, { message: "Password is required" }),
});
