import { z } from "zod";

export const CategorySchema = z.object({
  type: z.string().min(2, "Category type must be at least 2 characters long"),
});

export type CategoryFormInput = z.input<typeof CategorySchema>;
export type CategoryFormOutput = z.output<typeof CategorySchema>;