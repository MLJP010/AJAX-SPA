<?php
require "../config.php";

if (!$conn) {
  die("Verbinding mislukt: " . mysqli_connect_error());
}

$id = $_POST['id'];
$naam = $_POST['naam'];
$prijs = $_POST['prijs'];
$product = $_POST['product'];

$sql = "UPDATE producten SET naam='$naam', prijs='$prijs', product='$product' WHERE id='$id'";
$result = mysqli_query($conn, $sql);

if ($result) {
  echo "Product bijgewerkt!";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>