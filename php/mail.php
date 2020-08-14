<?php

if ($_POST) {
  $user = $_POST;

  $to_Email = 'hello@elude.co';
  $subject = 'New Elude Request';
  $headers ="From: Elude Today <hello@elude.co>\nReply-to:hello@eludetoday.com\nContent-Type: text/plain;";

  $message = sprintf('Name: %s %sE-mail: %s %sCity: %s',
    $user['name'],PHP_EOL, $user['mail'], PHP_EOL, $user['city']
  );

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
