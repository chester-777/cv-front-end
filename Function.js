function copyEmail() {
  var email = "fernando@ejemplo.com";
  var tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();

  navigator.clipboard.writeText(email).then(function() {
      alert("Email copiado al portapapeles: " + email);
  }, function(err) {
      console.error("Error copiando texto al portapapeles: ", err);
  });

  document.body.removeChild(tempInput);
}

