import { Resend } from "resend";
import { NextResponse } from "next/server";
import { menu } from "@/data/menu";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  const { formule, event, guests, date, moment, location, items, bodegaChoices, prenom, name, email, phone, address, message } = data;
  const fullName = `${prenom ?? ""} ${name ?? ""}`.trim();

  const itemsList = items?.length > 0
    ? items
        .map((slug: string) => {
          const it = menu.find((m) => m.slug === slug);
          if (!it) return slug;
          return it.bodegaVersion
            ? `${it.name} (${bodegaChoices?.[slug] ? "Bodéga" : "Classique"})`
            : it.name;
        })
        .join(", ")
    : "Aucune sélection";

  const formattedDate = date
    ? new Date(date + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })
    : "Non précisée";

  const formattedMoment = moment === "midi" ? "Midi" : moment === "soir" ? "Soir" : "Non précisé";

  try {
    await resend.emails.send({
      from: "Hola Paella <devis@hola-paella.fr>",
      to: "contact@hola-paella.fr",
      replyTo: email,
      subject: `Nouveau devis — ${event} · ${guests} pers. · ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1a1a1a;">
          <h2 style="color: #c0533a;">Nouvelle demande de devis</h2>

          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px 0; color: #666; width: 160px;">Événement</td><td style="padding: 8px 0; font-weight: 600;">${event}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Formule</td><td style="padding: 8px 0; font-weight: 600;">${formule === "chef-prive" ? "Chef privé à domicile" : formule === "livraison" ? "Livraison à domicile" : "À définir"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Invités</td><td style="padding: 8px 0; font-weight: 600;">${guests} personnes</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Date</td><td style="padding: 8px 0; font-weight: 600;">${formattedDate} (${formattedMoment})</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Lieu</td><td style="padding: 8px 0; font-weight: 600;">${location || "Non précisé"}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Carte</td><td style="padding: 8px 0;">${itemsList}</td></tr>
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

          <h3 style="color: #c0533a;">Contact</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 6px 0; color: #666; width: 160px;">Nom</td><td style="padding: 6px 0; font-weight: 600;">${fullName}</td></tr>
            <tr><td style="padding: 6px 0; color: #666;">Email</td><td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #c0533a;">${email}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #666;">Téléphone</td><td style="padding: 6px 0;"><a href="tel:${phone}" style="color: #c0533a;">${phone}</a></td></tr>
            <tr><td style="padding: 6px 0; color: #666;">Adresse</td><td style="padding: 6px 0; font-weight: 600;">${address || "Non précisée"}</td></tr>
          </table>

          ${message ? `
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #c0533a;">Message</h3>
          <p style="color: #444; white-space: pre-line;">${message}</p>
          ` : ""}
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
