export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    // Forward the request to the PHP backend on O2Switch
    const response = await fetch("https://pharmafrik.com/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add a secret header if you want to secure your PHP script later
        "X-Source": "Vercel-Function",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();

    // Return the response from PHP back to the frontend
    return res.status(response.status).json(data);
  } catch (error) {
    console.error("Error forwarding request:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
