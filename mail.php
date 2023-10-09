<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if (isset($_POST['submit'])) {
    $to = "pantamrohit@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = $name . " is trying to contact you!";
    $subject2 = "Thanks for contacting Sai Pantam!";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;

    // Send the first email
    $sent = mail($to, $subject, $message, $headers);

    // Send the second email
    $sent2 = mail($from, $subject2, $message2, $headers2);

    if ($sent && $sent2) {
        header("Location: thanks.html");
        exit(); 
    } else {
        echo "Error sending emails.";
    }
} else {
    echo "Form submission failed.";
}
?>
