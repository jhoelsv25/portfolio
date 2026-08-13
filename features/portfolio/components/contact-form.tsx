"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import {
  contactFormSchema,
  contactDefaultValues,
  type ContactFormData,
} from "../schema/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactDefaultValues,
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      const mailtoLink = `mailto:jhoel.sv25@gmail.com?subject=${encodeURIComponent(
        data.subject,
      )}&body=${encodeURIComponent(
        `Hola Jhoel,\n\nMi nombre es ${data.name} (${data.email}).\n\nMensaje:\n${data.message}`,
      )}`;
      window.open(mailtoLink, "_blank");
      toast.success("¡Mensaje preparado!", {
        description:
          "Se abrió tu cliente de correo para enviar el mensaje directamente a Jhoel.",
      });
      reset();
    } catch {
      toast.error("Ocurrió un error al procesar el mensaje");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card space-y-4 rounded-3xl border-0 p-6 text-left shadow-xs sm:p-8"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label
            htmlFor="name"
            className="text-foreground text-xs font-semibold"
          >
            Nombre Completo <span className="text-orange-500">*</span>
          </Label>
          <Input
            id="name"
            placeholder="Tu nombre"
            {...register("name")}
            className="border-border/80 bg-background h-11 rounded-xl border text-xs transition-colors hover:border-orange-500/40 focus-visible:border-orange-500 focus-visible:ring-1 focus-visible:ring-orange-500/20"
            aria-invalid={!!errors.name}
          />
          {errors.name && (
            <p className="text-destructive text-[11px]">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label
            htmlFor="email"
            className="text-foreground text-xs font-semibold"
          >
            Correo Electrónico <span className="text-orange-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            {...register("email")}
            className="border-border/80 bg-background h-11 rounded-xl border text-xs transition-colors hover:border-orange-500/40 focus-visible:border-orange-500 focus-visible:ring-1 focus-visible:ring-orange-500/20"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-destructive text-[11px]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="subject"
          className="text-foreground text-xs font-semibold"
        >
          Asunto / Proyecto <span className="text-orange-500">*</span>
        </Label>
        <Input
          id="subject"
          placeholder="Ej. Desarrollo de aplicación web, IA o consulta"
          {...register("subject")}
          className="border-border/80 bg-background h-11 rounded-xl border text-xs transition-colors hover:border-orange-500/40 focus-visible:border-orange-500 focus-visible:ring-1 focus-visible:ring-orange-500/20"
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p className="text-destructive text-[11px]">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <Label
          htmlFor="message"
          className="text-foreground text-xs font-semibold"
        >
          Mensaje o Detalles <span className="text-orange-500">*</span>
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Cuéntame sobre tu proyecto, requerimientos o propuesta..."
          {...register("message")}
          className="border-border/80 bg-background resize-none rounded-xl border text-xs transition-colors hover:border-orange-500/40 focus-visible:border-orange-500 focus-visible:ring-1 focus-visible:ring-orange-500/20"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-destructive text-[11px]">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-11 w-full rounded-xl bg-orange-500 text-xs font-bold text-white shadow-sm transition-all hover:scale-[1.01] hover:bg-orange-600"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" /> Procesando...
          </>
        ) : (
          <>
            <Send className="mr-2 size-3.5" /> Enviar Mensaje Directo
          </>
        )}
      </Button>
    </form>
  );
}
