// pages/api/webhook/proxy.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const TARGET_WEBHOOK_URL = "https://n8n.gettin.xyz/webhook/sellier";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Autoriser CORS (pour le développement)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const response = await fetch(TARGET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    const data = await response.text();
    let parsed;
    try {
      parsed = JSON.parse(data);
    } catch {
      parsed = data;
    }
    res.status(response.status).json(parsed);
  } catch (error) {
    console.error("Erreur dans le proxy :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
}
