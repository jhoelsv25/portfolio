import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre es demasiado largo"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  subject: z
    .string()
    .min(3, "El asunto debe tener al menos 3 caracteres")
    .max(100, "El asunto es demasiado largo"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(1000, "El mensaje no puede exceder los 1000 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const contactDefaultValues: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
