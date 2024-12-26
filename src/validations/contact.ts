import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "required field").max(255),
  email: z.string().email(),
  message: z.string().min(2, "required field").max(255),
});

export { contactSchema };
