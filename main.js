function submit1(questionOne) {
    var userAnswerOne = document.getElementById("q1").value;
    if (userAnswerOne.toLowerCase() == "chile" 
        || userAnswerOne.toLowerCase() == "peru" 
        || userAnswerOne.toLowerCase() == "mexico" 
        || userAnswerOne.toLowerCase() == "brasil") {
        var mensaje = document.getElementById("rightAnswersText");
        mensaje.innerHTML = "En " + userAnswerOne + " sí hay Laboratoria";
        } else {
            var mensaje = document.getElementById("wrongAnswersText");
            mensaje.innerHTML = "En " + userAnswerOne + " no hay Laboratoria";
            }
}
function submit2(questionTwo) {
    var userAnswerTwo = document.getElementById("q2").value;
    if (userAnswerTwo.toLowerCase() == "6 meses"
        || userAnswerTwo.toLowerCase() == "seis meses") {
        var mensaje = document.getElementById("rightAnswersText");
        mensaje.innerHTML = userAnswerTwo + " es la duración del programa";
        } else {
            var mensaje = document.getElementById("wrongAnswersText");
            mensaje.innerHTML = userAnswerTwo + " no es la duración del programa";
        }
}
function submit3(questionThree) {
    var userAnswerThree = document.getElementById("q3").value;
    if (userAnswerThree.toLowerCase() == "no") {
        var mensaje = document.getElementById("rightAnswersText");
        mensaje.innerHTML = "Laboratoria " + userAnswerThree + " es online";
    } else {
        var mensaje = document.getElementById("wrongAnswersText");
        mensaje.innerHTML = "Laboratoria no es online. Es presencial";
    }
}
function submit4(questionFour) {
    var userAnswerFour = document.getElementById("q4").value;
    if (userAnswerFour.toLowerCase() == "peru") {
        var mensaje = document.getElementById("rightAnswersText");
        mensaje.innerHTML = "Laboratoria comenzó en Peru";
    } else {
        var mensaje = document.getElementById("wrongAnswersText");
        mensaje.innerHTML = "Laboratoria comenzó en Peru";
    }
}