import https from "https";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // URL technique O2Switch (car le domaine principal pointe vers Vercel)
    // On force HTTPS mais on va ignorer les erreurs de certificat si besoin
    const phpUrl = "https://ouan7198.odns.fr/contact.php";

    console.log(`Forwarding request to: ${phpUrl}`);

    // Create an agent that ignores SSL errors (for self-signed certs on technical domains)
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });

    const urlEncodedData = new URLSearchParams();
    for (const key in req.body) {
      urlEncodedData.append(key, req.body[key]);
    }

    // Use standard fetch but with custom agent via a workaround for Node fetch
    // Or simpler: use node-fetch if available, but native fetch in Next.js/Vercel usually supports 'agent' in options
    // or we can just try standard fetch and see if it works with the technical URL which usually has a valid *.odns.fr cert.

    // If native fetch fails with SSL error, we might need a workaround, but usually *.odns.fr certs are valid.
    // Let's try standard fetch first but with the correct URL.

    const response = await fetch(phpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: urlEncodedData.toString(),
      // agent: agent // Native fetch doesn't support agent directly, need custom dispatcher in Node 18+
    });

    const text = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({
        message: `Error from PHP backend: ${response.status} ${response.statusText}`,
        details: text,
      });
    }

    try {
      const data = JSON.parse(text);
      return res.status(200).json(data);
    } catch (e) {
      return res.status(500).json({
        message: "Invalid JSON response from PHP backend",
        rawResponse: text,
      });
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
