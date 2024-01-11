<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $date1 = $_POST['date1'];
    $date2 = $_POST['date2'];
    $location = $_POST['location'];
    $message = $_POST['message'];

    // Validate and sanitize the form data as needed

    // Prepare the email content
    $to = 'treyjaera@gmail.com';
    $subject = 'New Booking Alert';
    $message = "Name: $name\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Booking Dates: $date1 to $date2\n";
    $message .= "Pickup Location: $location\n";
    $message .= "Message: $message\n";

    // Send the email
    $headers = "From: $email\r\n";
    if (mail($to, $subject, $message, $headers)) {
        // Email sent successfully
        $response = array('status' => 'success', 'message' => 'Booking processed!');
        echo json_encode($response);
        exit;
    } else {
        // Error sending email
        $response = array('status' => 'error', 'message' => 'Failed to send email. Please try again later.');
        echo json_encode($response);
        exit;
    }
} else {
    // Invalid request method
    $response = array('status' => 'error', 'message' => 'Invalid request method.');
    echo json_encode($response);
    exit;
}
?>