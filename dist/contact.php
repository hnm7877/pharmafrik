<?php
// Define allowed origins
$allowed_origins = [
    'https://pharmafrik.vercel.app',
    'https://pharmafrik.com',
    'https://www.pharmafrik.com',
    'http://localhost:5173'
];

// Get the origin of the current request
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';

// Handle CORS
if (in_array($origin, $allowed_origins)) {
    header('Access-Control-Allow-Origin: ' . $origin);
} else {
    // Fallback for development/testing or unlisted origins
    header('Access-Control-Allow-Origin: *'); 
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Prevent direct access to the script for other methods
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed']);
    exit;
}

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

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

// Send email
if (mail($to, $subject, $email_content, $headers)) {
    echo json_encode(['status' => 'success', 'message' => 'Votre message a été envoyé avec succès.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Une erreur est survenue lors de l\'envoi du message.']);
}
?>
