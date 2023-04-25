<?php
require "../config.php";

if (!$conn) {
  die("Verbinding mislukt: " . mysqli_connect_error());
}

$naam = $_POST['naam'];
$prijs = $_POST['prijs'];
$product = $_POST['product'];

$sql = "INSERT INTO producten (naam, prijs, product) VALUES ('$naam', '$prijs', '$product')";

if (mysqli_query($conn, $sql)) {
  echo "product toegevoegd!";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>