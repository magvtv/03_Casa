<?php
echo htmlspecialchars($_SERVER["PHP_SELF"]);
$firstname = $surname = $county = $comment = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = test_input($_POST["firstname"]);
  $email = test_input($_POST["surname"]);
  $county = test_input($_POST["county"]);
  $comment = test_input($_POST["comment"]);

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>