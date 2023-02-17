document.getElementById("boton").addEventListener("click", function () {
    document.getElementById('mostrar').style.display = "block" ;
  });
  
  const btn_scrolltop = document.getElementById("btn_scrolltop")
  btn_scrolltop.addEventListener('click', () => {
    window.scrollTo(0, 0)
  })

window.onscroll = () => {
  add_btn_scrolltop()
}

const add_btn_scrolltop = () => {
  if (window.scrollY < 300) {
    btn_scrolltop.classList.remove("btn-scrolltop-on")
  } else {
    btn_scrolltop.classList.add("btn-scrolltop-on")
  }
}

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
  
  

  const btn_darkmode = document.getElementById('darkmode');
  btn_darkmode.addEventListener('click', function(){
      document.body.classList.toggle('dark');
  });



  
  
  
  
 