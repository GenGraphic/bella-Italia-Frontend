<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;


function sendEmail($name, $email, $message, $subject) {
    $mail = new PHPMailer(true); // Create a new PHPMailer instance

    try {
        // SMTP configuration for Hostinger
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@example.com'; // Replace with your email address
        $mail->Password = 'your-password'; // Replace with your email account password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Set email content
        $mail->setFrom('your-email@example.com', 'Your Name'); // Replace with your email and name
        $mail->addAddress($email, $name); // Add recipient email and name
        $mail->Subject = $subject;
        $mail->Body = $message;

        // Send the email
        $mail->send();
        echo 'Email sent successfully';
    } catch (Exception $e) {
        echo 'Error sending email: ' . $mail->ErrorInfo;
    }
}

// Usage example
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];

sendEmail($name, $email, $message, $subject);

?>
