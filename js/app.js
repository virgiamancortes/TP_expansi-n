function validacion() {
    let x = document.forms["formulario"]["email"].value;
    if (x == "") {
      alert("Tiene que completar el mail");
      return false;
     } 
    else 
       alert("Gracias por su suscribirse")
  }