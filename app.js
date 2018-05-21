function myFunction(button) {
    var user = document.getElementById("userName").value;
    var mensaje = document.getElementById("bienvenida");
    mensaje.innerHTML= "¡Bienvenida " + user + "! Jugamos?";
}
function nextPage(yes) {
    window.location="questions.html";
}
