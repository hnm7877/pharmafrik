export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // URL technique O2Switch (HTTP to avoid SSL certificate issues with shared hosting)
    const phpUrl = "http://ouan7198.odns.fr/contact.php";

    console.log(`Forwarding request to: ${phpUrl}`);

    const urlEncodedData = new URLSearchParams();
    for (const key in req.body) {
      urlEncodedData.append(key, req.body[key]);
    }

    const response = await fetch(phpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      body: urlEncodedData.toString(),
    });

    const text = await response.text();

    if (!response.ok) {
      return res.status(response.status).json({
        message: `Error from PHP backend: ${response.status} ${response.statusText}`,
        details: text,
      });
    }

    try {
      // Try to parse JSON, or return text if it's not JSON
      const data = JSON.parse(text);
      return res.status(200).json(data);
    } catch (e) {
      // If PHP returns plain text (success), wrap it in JSON
      return res.status(200).json({
        status: "success",
        message: "Message sent (raw response)",
        rawResponse: text,
      });
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      cause: error.cause ? error.cause.toString() : "Unknown cause",
    });
  }
}
