<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$debug = false;

require dirname(__FILE__) . '/vendor/autoload.php';

if (isset($_POST['name'], $_POST['email'], $_POST['text'])
    && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $text = trim($_POST['text']);

    try {
        $mail = new PHPMailer($debug);
        $mail->IsSMTP();
        $mail->SMTPDebug = 1;
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'ssl';
        $mail->Host = "mybloom.care";
        $mail->Port = 465;
        $mail->Username = "mailer@mybloom.care";
        $mail->Password = "WMQvdlB!kdEY9wp";
        $mail->setFrom('mailer@mybloom.care', 'Mybloom.care');
        $mail->addAddress('mark@mybloom.care');
        $mail->isHTML(true);
        $mail->Subject = 'Customer from Mybloom.care website';
        $mail->Body = "<h3>Customer details:</h3>" .
            "<p><strong>Name:</strong> {$name}</p>" .
            "<p><strong>Email:</strong> {$email}</p>" .
            "<p><strong>Needs care for:</strong> {$text}</p>";
        $mail->send();
        http_response_code(200);
    } catch (Exception $e) {
        http_response_code(400);
        if ($debug === true) {
            echo 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo;
        }
    }

}
