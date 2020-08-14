<?php
if($_POST) {
  $user = $_POST;
  $to_Email = 'hello@voynov.co';
  $subject = 'New Elude Request';
  $headers ="From: Elude Today <hello@eludetoday.com>\nReply-to:hello@eludetoday.com\nContent-Type: text/plain;";
  $message .= 'Name: '.$user['name'];
  $message .= "\r\n";
  $message .= 'E-mail: '.$user['mail'];
  $message .= "\r\n";
  $message .= 'City: '.$user['city'];
  $response;

  if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
    $response = json_encode(array('text' => 'Error'));
    die($response);
  }

  if(!mail($to_Email, $subject, $message, $headers)) {
    $response = json_encode(array('text' => 'Error.'));
    die($response);
    } else {
    $response = json_encode(array('text' => 'Hello '.$user['name'] .', your message is send.'));
    die($response);
  }
}
?>
