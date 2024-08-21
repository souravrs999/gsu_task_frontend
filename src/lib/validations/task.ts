import { z } from "zod";

export const createSchema = z.object({
  title: z.string().min(3, "Title should be atleast 3 characters."),
  description: z.string().optional(),
  completed: z.boolean().default(false),
});
export type CreateSchema = z.infer<typeof createSchema>;

export const updateSchema = z.object({
  title: z.string().min(3, "Title should be atleast 3 characters.").optional(),
  description: z.string().optional(),
  completed: z.boolean().default(false).optional(),
});
export type UpdateSchema = z.infer<typeof updateSchema>;
