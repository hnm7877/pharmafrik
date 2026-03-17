export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const phpUrl = "https://www.pharmafrik.com/contact.php";

    // We will send the data as form-urlencoded which is almost universally accepted by PHP servers
    // instead of application/json which can trigger security rules.
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
