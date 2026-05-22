import { NextResponse } from "next/server";

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/\n/g, "<br>");
}

async function sendEmail(payload: object): Promise<boolean> {
  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY!,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });
  return res.ok;
}

export async function POST(request: Request) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, message, subject, budget, projectType } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }
  if (!process.env.BREVO_API_KEY) {
    return NextResponse.json({ error: "Configuration manquante" }, { status: 500 });
  }

  const emailSubject = subject?.trim() || `Nouveau contact de ${name.trim()}`;

  const extraRows = [
    budget ? `<tr><td style="color:#94a3b8;padding:4px 0;width:120px;">Budget</td><td style="color:#f8fafc;">${esc(budget)}</td></tr>` : "",
    projectType ? `<tr><td style="color:#94a3b8;padding:4px 0;width:120px;">Type de projet</td><td style="color:#f8fafc;">${esc(projectType)}</td></tr>` : "",
  ].join("");

  const recapEmail = {
    sender: { name: "GregoDev", email: "contact@gregodev.com" },
    to: [{ email: "contact@gregodev.com", name: "GregoDev" }],
    replyTo: { email: email.trim(), name: name.trim() },
    subject: `[Contact] ${emailSubject}`,
    htmlContent: `
<!DOCTYPE html>
<html lang="fr">
<body style="margin:0;padding:0;background:#0a0a0f;font-family:sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#111118;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
    <div style="background:linear-gradient(135deg,#1e3a8a,#2563eb);padding:32px 40px;">
      <p style="color:#93c5fd;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 4px;">GregoDev</p>
      <h1 style="color:#fff;font-size:22px;margin:0;">Nouvelle demande de contact</h1>
    </div>
    <div style="padding:32px 40px;">
      <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
        <tr><td style="color:#94a3b8;padding:4px 0;width:120px;">Nom</td><td style="color:#f8fafc;">${esc(name)}</td></tr>
        <tr><td style="color:#94a3b8;padding:4px 0;">Email</td><td style="color:#f8fafc;"><a href="mailto:${esc(email)}" style="color:#60a5fa;">${esc(email)}</a></td></tr>
        ${subject?.trim() ? `<tr><td style="color:#94a3b8;padding:4px 0;">Sujet</td><td style="color:#f8fafc;">${esc(subject)}</td></tr>` : ""}
        ${extraRows}
      </table>
      <div style="background:#0a0a0f;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,0.06);">
        <p style="color:#94a3b8;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 12px;">Message</p>
        <p style="color:#f8fafc;line-height:1.7;margin:0;">${esc(message)}</p>
      </div>
    </div>
    <div style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);">
      <p style="color:#475569;font-size:12px;margin:0;">Répondez directement à cet email pour contacter ${esc(name)}.</p>
    </div>
  </div>
</body>
</html>`,
  };

  const confirmEmail = {
    sender: { name: "GregoDev", email: "contact@gregodev.com" },
    to: [{ email: email.trim(), name: name.trim() }],
    subject: "Votre demande a bien été reçue — GregoDev",
    htmlContent: `
<!DOCTYPE html>
<html lang="fr">
<body style="margin:0;padding:0;background:#0a0a0f;font-family:sans-serif;">
  <div style="max-width:600px;margin:40px auto;background:#111118;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">
    <div style="background:linear-gradient(135deg,#1e3a8a,#2563eb);padding:32px 40px;">
      <p style="color:#93c5fd;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 4px;">GregoDev</p>
      <h1 style="color:#fff;font-size:22px;margin:0;">Votre demande a bien été reçue !</h1>
    </div>
    <div style="padding:32px 40px;">
      <p style="color:#f8fafc;font-size:16px;line-height:1.7;margin:0 0 20px;">
        Bonjour ${esc(name)},
      </p>
      <p style="color:#cbd5e1;line-height:1.7;margin:0 0 20px;">
        Merci pour votre message — j'en ai bien pris note et je reviendrai vers vous <strong style="color:#f8fafc;">sous 48h</strong> avec une réponse personnalisée.
      </p>
      <p style="color:#cbd5e1;line-height:1.7;margin:0 0 32px;">
        En attendant, si vous avez des questions urgentes, vous pouvez me joindre directement par email à
        <a href="mailto:contact@gregodev.com" style="color:#60a5fa;">contact@gregodev.com</a>
        ou par téléphone au <a href="tel:0658936788" style="color:#60a5fa;">06 58 93 67 88</a>.
      </p>
      <div style="background:#0a0a0f;border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,0.06);margin-bottom:32px;">
        <p style="color:#94a3b8;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;margin:0 0 12px;">Récapitulatif de votre message</p>
        <p style="color:#94a3b8;font-size:13px;margin:0 0 8px;">${emailSubject}</p>
        <p style="color:#f8fafc;line-height:1.7;margin:0;font-size:14px;">${esc(message)}</p>
      </div>
      <p style="color:#cbd5e1;line-height:1.7;margin:0;">
        À très vite,<br>
        <strong style="color:#f8fafc;">Grégoire</strong><br>
        <span style="color:#94a3b8;font-size:13px;">GregoDev · Développeur Freelance Bordeaux</span>
      </p>
    </div>
    <div style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);">
      <p style="color:#475569;font-size:12px;margin:0;">
        Vous recevez cet email car vous avez utilisé le formulaire de contact sur
        <a href="https://gregodev.com" style="color:#60a5fa;">gregodev.com</a>.
      </p>
    </div>
  </div>
</body>
</html>`,
  };

  try {
    const [ok1, ok2] = await Promise.all([sendEmail(recapEmail), sendEmail(confirmEmail)]);
    if (!ok1 || !ok2) {
      return NextResponse.json({ error: "Erreur d'envoi" }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
