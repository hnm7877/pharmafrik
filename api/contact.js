export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const phpUrl = "https://pharmafrik.com/contact.php";

    // Log for debugging (visible in Vercel logs)
    console.log(`Forwarding request to: ${phpUrl}`);

    const response = await fetch(phpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Vercel-Serverless-Function",
      },
      body: JSON.stringify(req.body),
    });

    // Get the raw text response first to debug if JSON parsing fails
    const text = await response.text();
    console.log("Response from PHP:", text);

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
