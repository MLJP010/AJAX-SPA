<?php
require "../config.php";

if (!$conn) {
  die("Verbinding mislukt: " . mysqli_connect_error());
}

$sql = "SELECT * FROM producten";
$result = mysqli_query($conn, $sql);

$books = array();

while ($row = mysqli_fetch_assoc($result)) {
  $books[] = $row;
}

$json_books = json_encode($books);
echo $json_books;
mysqli_close($conn);
?>