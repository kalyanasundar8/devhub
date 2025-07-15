import { z } from "zod";

export const signupSchema = z
  .object({
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(8, "Password must be atleast 8 characters long")
      .regex(/[A-Z]/, "Password must contain one uppercase letter")
      .regex(/[a-z]/, "Password must contain one lowercase letter")
      .regex(/\d/, "Password must contain one number")
      .regex(/[^a-zA-Z0-9]/, "Password must contain one special character"),
    confirmpassword: z.string(),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Password do not match",
    path: ["confirmpassword"],
  });
