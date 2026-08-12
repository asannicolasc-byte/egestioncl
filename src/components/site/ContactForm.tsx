import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  nombre: z.string().trim().min(1, "Cuéntanos tu nombre").max(100),
  empresa: z.string().trim().max(120).optional(),
  correo: z.string().trim().email("Revisa tu correo").max(255),
  telefono: z.string().trim().max(40).optional(),
  mensaje: z.string().trim().min(1, "Escríbenos un mensaje").max(1000),
});

const field =
  "w-full rounded-2xl border border-brand-ink/15 bg-white px-4 py-3 text-sm text-brand-ink outline-none transition-colors placeholder:text-brand-ink/40 focus:border-brand-blue";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Revisa los datos");
      return;
    }
    setSending(true);
    // TODO: conectar a un endpoint real (Formspree, email o Lovable Cloud).
    console.log("Formulario EGestión:", parsed.data);
    await new Promise((r) => setTimeout(r, 500));
    setSending(false);
    form.reset();
    toast.success("¡Gracias! Te contactamos muy pronto.");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
          Nombre
        </label>
        <input id="nombre" name="nombre" required className={field} placeholder="Tu nombre" />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium">
          Empresa
        </label>
        <input id="empresa" name="empresa" className={field} placeholder="Nombre de tu empresa" />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="correo" className="mb-1.5 block text-sm font-medium">
          Correo
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          required
          className={field}
          placeholder="tu@correo.cl"
        />
      </div>
      <div className="sm:col-span-1">
        <label htmlFor="telefono" className="mb-1.5 block text-sm font-medium">
          Teléfono
        </label>
        <input id="telefono" name="telefono" className={field} placeholder="+56 9 ..." />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          className={field}
          placeholder="Cuéntanos en qué estás"
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
        >
          {sending ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </form>
  );
}
