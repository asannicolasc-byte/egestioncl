import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(1).max(100),
  empresa: z.string().trim().max(120).optional(),
  correo: z.string().trim().email().max(255),
  telefono: z.string().trim().max(40).optional(),
  mensaje: z.string().trim().min(1).max(1000),
});

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) return { sent: false, error: "missing_api_key" as const };

    const to = process.env["CONTACT_EMAIL"] ?? "agus@coolbrands.cl";

    const rows: Array<[string, string]> = [
      ["Nombre", data.nombre],
      ["Empresa", data.empresa || "-"],
      ["Correo", data.correo],
      ["Teléfono", data.telefono || "-"],
      ["Mensaje", data.mensaje],
    ];

    const html = `<div style="font-family:Arial,sans-serif;color:#0A0A0A">
      <h2 style="color:#0447F3">Nuevo mensaje desde EGestión</h2>
      ${rows
        .map(
          ([label, value]) =>
            `<p style="margin:6px 0"><strong>${label}:</strong> ${escapeHtml(value)}</p>`,
        )
        .join("")}
    </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "EGestión <onboarding@resend.dev>",
        to: [to],
        reply_to: data.correo,
        subject: `Nuevo contacto: ${data.nombre}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error", res.status, detail);
      return { sent: false, error: "send_failed" as const };
    }

    return { sent: true as const };
  });
