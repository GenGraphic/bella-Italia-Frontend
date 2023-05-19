<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
    function sendEmail($name ,$email, $message, $subject) {
        $to = "gengraphicservices@gmail.com"; // Replace with your email address
        $subject = "$subject";
        $body = "Name: $name\n";
        $body .= "Email: $email\n";
        $body .= "Message:\n$message\n";
    
        if (mail($to, $subject, $body)) {
            return true;
        } else {
            return false;
        }
    }

// Usage example:
$to = "gengraphicservices@gmail.com";
$subject = "Order Confirmation";
$message = "<h1>Thank you for your purchase!</h1><p>Your order has been confirmed.</p>";
$name = "Eduard";

if (sendEmail($name, $to, $subject, $message)) {
    echo "Email sent successfully.";
} else {
    echo "Failed to send email.";
}
?>