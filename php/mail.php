<?php

if ($_POST) {
  parse_str($_POST, $user);

  //$to_Email = 'hello@voynov.co';
  $to_Email = 'prgrf@ya.ru';
  $subject = 'New Elude Request';
  $headers ="From: Elude Today <hello@elude.co>\nReply-to:hello@elude.co\nContent-Type: text/plain;";

  $message = 'E-mail: '.$user['email'];

  try {
      mail($to_Email, $subject, $message, $headers);

      $message = [
          'text' => sprintf('Hello %s, your message is send.', $user['name'])
      ];
  } catch (Exception $exception) {
      $message = [
          'text' => $exception->getMessage()
      ];
  }

  return json_encode($message);
}
