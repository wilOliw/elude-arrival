<?php
if ($_POST) {
  // $to_Email = 'hello@elude.co';
  $to_Email = 'prgrf@ya.ru';
  $subject = 'New Elude Arrival Request';
  $headers ="From: Elude Today <hello@elude.co>\nReply-to:hello@eludetoday.com\nContent-Type: text/plain;";

  $message = sprintf('E-mail:', $_POST['email']);

  try {
      //mail($to_Email, $subject, $message, $headers);
      mail_to('prgrf@ya.ru', 'test saita', 'ya ya, test', "From: Elude Today <hello@elude.co>\nReply-to:hello@eludetoday.com\nContent-Type: text/plain;")

      $message = [
          'text' => sprintf('Hello! Your message is send.'])
      ];
  } catch (Exception $exception) {
      $message = [
          'text' => $exception->getMessage()
      ];
  }

  return json_encode($message);
}

?>
