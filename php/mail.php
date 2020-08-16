<?php

if ($_POST) {
  $user = $_POST;

  $to_Email = 'pasha@pvoynov.ru';
  //$to_Email = 'prgrf@ya.ru';
  $subject = 'New Elude Request';
  $headers ="From: Elude Today <hello@elude.co>\nReply-to:hello@elude.co\nContent-Type: text/plain;";

  $message = 'E-mail: '.$user['mail'];

  try {
      mail($to_Email, $subject, $message, $headers);

      $message = [
          'text' => sprintf('Hello %s, your message is send.', $user['mail'])
      ];
  } catch (Exception $exception) {
      $message = [
          'text' => $exception->getMessage()
      ];
  }

  return json_encode($message);
}
