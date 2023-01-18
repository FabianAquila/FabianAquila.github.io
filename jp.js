document.getElementById("boton").addEventListener("click", function () {
    document.getElementById('mostrar').style.display = "block" ;
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contacto").addEventListener('submit', validarFormulario);
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('Nombre').value;
    if (nombre.length == 0) {
      alert('ingrese el nombre');
      return;
    }
  
    var apellido = document.getElementById('Apellido').value;
    if (apellido.length == 0) {
      alert('ingrese el apellido');
      return;
    }

    var mail = document.getElementById('mail').value;
    if (mail.length == 0) {
      alert('ingrese el mail');
      return;
    }
  
   
    var str = document.getElementById("textarea");
    if (str.value.trim() === ""){
      alert("El campo mensaje tiene sólo espacios en blanco");
      return;
    }

  
    this.submit();
  
  }
  
  
  
  document.addEventListener("keypress", function () {
    document.getElementById("Nombre").addEventListener('keypress', txNombres);
    document.getElementById("Apellido").addEventListener('keypress', txNombres);
  });  
    

  function txNombres(event) {
    
    if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
      event.returnValue = false;
  }
  
  
  
  
  
  
  
  
  
  
  
  
 