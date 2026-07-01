const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "";

async function request(path, options = {}) {
  // 5-second timeout — if the serverless function doesn't respond,
  // the caller's catch() will receive an AbortError and fall back gracefully.
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(`${API_BASE}${path}`, {
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers ?? {}),
      },
      ...options,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || "Request failed");
    }

    return response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

export function fetchResumeData() {
  return request("/api/resume");
}

export function submitLead(email, source = "hero") {
  return request("/api/leads", {
    method: "POST",
    body: JSON.stringify({ email, source }),
  });
}