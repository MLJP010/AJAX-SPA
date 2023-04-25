function tabel() {
  $.ajax({
    type: "POST",
    url: "uitlees.php",
    dataType: "json",
    success: function (producten) {
      output = "<tr><th>ID</th><th>Naam</th><th>Prijs</th><th>Producten</th><th>Aanpassen</th><th>Verwijder</th></tr>";
      for (let i = 0; i < producten.length; i++) {
        output += "<tr>";
        output += "<td>" + producten[i].id + "</td>";
        output += "<td>" + producten[i].naam + "</td>";
        output += "<td>" + producten[i].prijs + "</td>";
        output += "<td>" + producten[i].product + "</td>";
        output += "<td><button class='aanpassen btn btn-secondary' data-toggle='modal' data-target='#editModal' data-id='" + producten[i].id + "'>Aanpassen</button></td>";
        output += "<td><button class='verwijder btn btn-danger' data-toggle='modal' data-target='#verwijderModal' data-id='" + producten[i].id + "'>Verwijder</button></td>";
        output += "</tr>";
      }

      $(".table").html(output);
    },
    error: function (xhr, status, error) {
      console.log("Error: " + error);
    }
  });
  return false;
}

$(document).ready(function () {
  tabel();

  $("#add-form").submit(function (event) {
    event.preventDefault();

    let naam = $("#naam").val();
    let prijs = $("#prijs").val();
    let product = $("#product").val();

    $.ajax({
      type: "POST",
      url: "toevoeg.php",
      data: { naam: naam, prijs: prijs, product: product },
      success: function (data) {
        tabel();

        $('#naam').val("");
        $('#prijs').val("");
      },
      error: function (xhr, status, error) {
        console.log("Error: " + error);
      }
    });
  });

  $(document).on('click', '.verwijder', function () {

    let id = $(this).data('id');
    $('#verwijderModal').modal('show');

    $('#verwijderSubmit').click(function () {
      $.ajax({
        type: "POST",
        url: "verwijderVerwerk.php",
        data: { id: id },
        success: function (data) {
          tabel();
        },
        error: function (xhr, status, error) {
          console.log("Error: " + error);
        }
      });
      $('#verwijderModal').modal('hide');
    });
    return false;
  });

  $(document).on('click', '.aanpassen', function () {
    let id = $(this).data('id');
    $('#editModal').modal('show');

    $('#editSubmit').click(function () {
      let naam = $("#naamEdit").val();
      let prijs = $("#prijsEdit").val();
      let product = $("#productEdit").val();

      $.ajax({
        type: "POST",
        url: "update.php",
        data: { id: id, naam: naam, prijs: prijs, product: product },
        success: function (data) {
          tabel();
        },
        error: function (xhr, status, error) {
          console.log("Error: " + error);
        }
      });
      $('#editModal').modal('hide');
    });
    return false;
  });
});

