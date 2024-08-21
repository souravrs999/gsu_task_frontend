import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must atleast be 6 characters."),
});
export type AuthSchema = z.infer<typeof authSchema>;
