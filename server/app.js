import express from "express";
import { resumeData } from "./data/resumeData.js";
import { storeLead } from "./lib/mongo.js";

const app = express();

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.get("/api/resume", (_request, response) => {
  response.json({ resume: resumeData });
});

app.post("/api/leads", async (request, response) => {
  const { email, source = "hero" } = request.body ?? {};

  if (typeof email !== "string" || !email.trim()) {
    return response.status(400).json({ message: "A valid email is required." });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(normalizedEmail)) {
    return response.status(400).json({ message: "A valid email is required." });
  }

  try {
    const result = await storeLead({
      email: normalizedEmail,
      source,
      submittedAt: new Date().toISOString(),
    });

    return response.status(201).json({
      message: "Lead captured successfully.",
      id: result.insertedId,
      fallback: result.fallback,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Unable to save the lead right now.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

export default app;