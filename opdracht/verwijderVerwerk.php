<?php
require "../config.php";

if (!$conn) {
  die("Verbinding mislukt: " . mysqli_connect_error());
}

$id = $_POST['id'];

$sql = "DELETE FROM producten WHERE id = " . $id;
$result = mysqli_query($conn, $sql);

if ($result) {
    echo "Verwijder gelukt!";
} else {
    echo "Verwijder mislukt!";
}

mysqli_close($conn);

?>
