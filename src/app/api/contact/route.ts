import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message, budget, projectType } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    const projectTypeLabels: Record<string, string> = {
      vitrine: "Site vitrine",
      webapp: "Application web",
      outil: "Outil interne",
      automation: "Automation IA",
      autre: "Autre",
    };

    const budgetLabels: Record<string, string> = {
      "<1000": "Moins de 1 000€",
      "1000-3000": "1 000 – 3 000€",
      "3000-5000": "3 000 – 5 000€",
      "5000+": "5 000€+",
    };

    const payload = {
      sender: { name: "GregoDev Contact", email: "noreply@gregodev.com" },
      to: [{ email: "contact@gregodev.com", name: "Greg" }],
      replyTo: { email, name },
      subject: subject || `Nouveau contact de ${name}`,
      htmlContent: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${projectType ? `<p><strong>Type de projet :</strong> ${projectTypeLabels[projectType] ?? projectType}</p>` : ""}
        ${budget ? `<p><strong>Budget estimé :</strong> ${budgetLabels[budget] ?? budget}</p>` : ""}
        ${subject ? `<p><strong>Sujet :</strong> ${subject}</p>` : ""}
        <p><strong>Message :</strong></p>
        <p>${(message as string).replace(/\n/g, "<br/>")}</p>
      `,
    };

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Brevo error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
