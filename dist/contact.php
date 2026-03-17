<?php
// ==========================================
// 1. CORS & HEADERS (Must be first!)
// ==========================================
// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
} else {
    header("Access-Control-Allow-Origin: *");
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}, Content-Type");
    } else {
        header("Access-Control-Allow-Headers: Content-Type");
    }
    exit(0);
}

// ==========================================
// 2. MAIN LOGIC
// ==========================================
header('Content-Type: application/json; charset=utf-8');

// Accept POST or GET (some servers rewrite POST to GET if misconfigured, but we strictly want POST data)
// If REQUEST_METHOD is missing or weird, we try to read input anyway
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    // FALLBACK: Allow GET for testing or specific server configs
    if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['test'])) {
        // Just a ping
        echo json_encode(['status' => 'success', 'message' => 'GET method works, but please use POST for data']);
        exit;
    }
    
    // STRICT MODE DISABLED for debugging: We try to proceed even if method is not strictly POST, 
    // because sometimes proxies mess up headers.
    // http_response_code(405);
    // echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed. Method was: ' . $_SERVER['REQUEST_METHOD']]);
    // exit;
}

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Fallback: Check standard POST fields if JSON is empty (form-data)
if (!$data && !empty($_POST)) {
    $data = $_POST;
}

// Check if data is valid
if (!$data) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON data']);
    exit;
}

// Extract and sanitize fields
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$company = filter_var($data['company'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$message = filter_var($data['message'] ?? '', FILTER_SANITIZE_STRING);

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Veuillez remplir tous les champs obligatoires.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Adresse email invalide.']);
    exit;
}

// Email configuration
$to = 'info@pharmafrik.com'; // Replace with the actual recipient email
$subject = "Nouveau message de contact via le site web: $name";

// Email body
$email_content = "Nouveau message reçu depuis le formulaire de contact :\n\n";
$email_content .= "Nom: $name\n";
$email_content .= "Entreprise: $company\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

// Email headers
$headers = "From: no-reply@pharmafrik.com\r\n"; // Use a domain email address
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email to admin
if (mail($to, $subject, $email_content, $headers)) {
    // Send auto-reply to user
    $user_subject = "Confirmation de réception - PHARM'AFRIK";
    
    // Construct HTML email for auto-reply
    $user_headers = "MIME-Version: 1.0" . "\r\n";
    $user_headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $user_headers .= "From: PHARM'AFRIK <no-reply@pharmafrik.com>" . "\r\n";
    $user_headers .= "Reply-To: info@pharmafrik.com" . "\r\n";
    $user_headers .= "X-Mailer: PHP/" . phpversion();

    $user_content = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px; }
            .header { background-color: #f8fafc; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { padding: 30px 20px; }
            .footer { font-size: 12px; color: #666; text-align: center; padding-top: 20px; border-top: 1px solid #eee; }
            .btn { display: inline-block; background-color: #10b981; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-top: 15px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2 style='color: #0f172a; margin:0;'>PHARM'AFRIK</h2>
                <p style='margin:5px 0 0; color: #64748b;'>West & Central Africa</p>
            </div>
            <div class='content'>
                <p>Bonjour <strong>$name</strong>,</p>
                <p>Nous vous remercions de nous avoir contactés.</p>
                <p>Votre message a bien été reçu par notre équipe. Nous l'étudierons avec la plus grande attention et reviendrons vers vous dans les plus brefs délais (généralement sous 24 à 48 heures ouvrées).</p>
                <p>En attendant, n'hésitez pas à consulter nos activités sur notre site web.</p>
                <center><a href='https://pharmafrik.com' class='btn'>Visiter notre site</a></center>
                <br>
                <p>Cordialement,<br>L'équipe PHARM'AFRIK</p>
            </div>
            <div class='footer'>
                <p>Ceci est un message automatique, merci de ne pas y répondre directement.<br>
                Si vous souhaitez nous contacter : <a href='mailto:info@pharmafrik.com'>info@pharmafrik.com</a></p>
                <p>Riviera Bonoumin Abri 2000, Abidjan</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Try to send auto-reply (don't fail if this specific email fails)
    @mail($email, $user_subject, $user_content, $user_headers);

    echo json_encode(['status' => 'success', 'message' => 'Votre message a été envoyé avec succès.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Une erreur est survenue lors de l\'envoi du message.']);
}
?>
