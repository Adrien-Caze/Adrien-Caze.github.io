<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'adrien.caze77@gmail.com'
    $nom = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    mail($to,$subject,$message,$nom,$email+$phone)
}

php>