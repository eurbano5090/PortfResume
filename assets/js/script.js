document.addEventListener("DOMContentLoaded", function () {
  const btnToggle = document.querySelector(".toggle-btn");
  const btnSwitch = document.querySelector(".switch");

  btnToggle.addEventListener("click", function () {
    console.log("click");
    document.getElementById("sidebar").classList.toggle("active");
    console.log(document.getElementById("sidebar"));
  });

  $("p").click(function () {
    $("p").css("color", "red").slideUp(2000).slideDown(2000);
  });

  btnSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");

    // Guardamos el modo en localstorage.
    if (document.body.classList.contains("dark")) {
      localStorage.setItem("dark-mode", "true");
    } else {
      localStorage.setItem("dark-mode", "false");
    }
  });

  // Obtenemos el modo actual.
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
  } else {
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
  }
});

$("#formulario").submit(function (evento) {
  evento.preventDefault();
  limpiarErrores();
  var nombre = $("#txt-nombre").val();
  var apellido = $("#txt-apellido").val();
  var email = $("#txt-email").val();
  var telefono = $("#txt-telefono").val();
  var comentarios = $("#txt-comentarios").val();
  var valido = true;

  if (nombre == "") {
    valido = false;
    $("#error-nombre").html("Ingresar nombre");
    $("#lbl-nombre").addClass("text-danger");
  }

  if (apellido == "") {
    valido = false;
    $("#error-apellido").html("Ingresar Apellido");
    $("#lbl-apellido").addClass("text-danger");
  }
  if (email == "") {
    valido = false;
    $("#error-email").html("Ingresar el correo electronico");
    $("#lbl-email").addClass("text-danger");
  }

  if (telefono == "") {
    valido = false;
    $("#error-telefono").html("Ingresar telefono");
    $("#lbl-telefono").addClass("text-danger");
  }

  if (comentarios == "") {
    valido = false;
    $("#error-comentarios").html("Ingresar comentarios");
    $("#lbl-comentarios").addClass("text-danger");
  }

  if (valido) {
    $(".alert").removeClass("d-none");
  }
});

function limpiarErrores() {
  $("#error-email").html("");
  $("#error-nombre").html("");
  $("#error-apellido").html("");
  $("#error-telefono").html("");
  $("#error-motivo").html("");
  $("#error-comentarios").html("");
  $("#lbl-email").removeClass("text-danger");
  $("#lbl-nombre").removeClass("text-danger");
  $("#lbl-apellido").removeClass("text-danger");
  $("#lbl-telefono").removeClass("text-danger");
  $("#lbl-comentarios").removeClass("text-danger");
}

$("#btn-limpiar").click(function () {
  limpiarErrores();
  $("#txt-email").val("");
  $("#txt-nombre").val("");
  $("#txt-apellido").val("");
  $("#txt-telefono").val("");
  $("#txt-comentarios").val("");
  $("#alert-send").addClass("d-none");
});
