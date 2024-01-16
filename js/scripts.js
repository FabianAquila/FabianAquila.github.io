const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // previene el envío del formulario
  
  // Validar nombre
  if (nameInput.value === "") {
    nameInput.classList.add("error");
    nameInput.nextElementSibling.classList.add("active");
    return;
  } else {
    nameInput.classList.remove("error");
    nameInput.nextElementSibling.classList.remove("active");
  }
  
  // Validar correo electrónico
  if (emailInput.value === "") {
    emailInput.classList.add("error");
    emailInput.nextElementSibling.classList.add("active");
    return;
  } else {
    emailInput.classList.remove("error");
    emailInput.nextElementSibling.classList.remove("active");
  }
  
  // Validar mensaje
  if (messageInput.value === "") {
    messageInput.classList.add("error");
    messageInput.nextElementSibling.classList.add("active");
    return;
  } else {
    messageInput.classList.remove("error");
    messageInput.nextElementSibling.classList.remove("active");
  }
  
  // Enviar formulario
  alert("Formulario enviado correctamente.");
  form.submit();
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

document.addEventListener("keypress", function () {
  document.getElementById("name").addEventListener('keypress', txNombres);
});  
  

function txNombres(event) {
  
  if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
    event.returnValue = false;
}

const changeThemeBtn = document.getElementById('change-theme-btn');
const body = document.body;

changeThemeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});

