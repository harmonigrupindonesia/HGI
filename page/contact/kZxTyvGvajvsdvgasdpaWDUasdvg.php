<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars(trim($_POST["ngaran_na"]));
    $mobile    = htmlspecialchars(trim($_POST["wa_na"]));
    $email     = htmlspecialchars(trim($_POST["email_na"]));
    $message   = htmlspecialchars(trim($_POST["meusi_na"]));
    $to = "ptharmonigrupindonesia@gmail.com"; 
    $subject = "Contact Form from $firstName";
    $body = "Nama: $firstName\n";
    $body .= "Nomor HP: $mobile\n";
    $body .= "Email: $email\n\n";
    $body .= "Pesan:\n$message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    if (mail($to, $subject, $body, $headers)) {
        echo "✅ Pesan berhasil dikirim!";
    } else {
        echo "❌ Gagal mengirim pesan.";
    }
} else {
    echo "❗ Metode tidak diizinkan.";
}
?>
