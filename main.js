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
/*
function submit2(questionTwo) {
    var userAnswer2 = document.getElementById("q2").value;
    if (userAnswer2.toLowerCase() == "no") {
        document.getElementById("rightAnswersText").innerHTML =
            document.getElementById("rightAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No hay laboratoria en concepción</p>"
        "</div>";
    } else {
        document.getElementById("wrongAnswersText").innerHTML =
            document.getElementById("wrongAnswersText").innerHTML +
            "<div class='answer'>" +
            "<p>No hay laboratoria en concepción</p>"
        "</div>";
}



/*    var wantToPlay = prompt("¿quieres jugar? s/n");
    if (wantToPlay.toLowerCase() == "s") {
        var answer1 = prompt("¿han egresado hombres en Laboratoria? s/n");
        if (answer1.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No han egresado hombres</p>"
            "</div>";
        }

        var answer2 = prompt("¿hay laboratoria en concepción? s/n");
        if (answer2.toLowerCase() == "n") {
            document.getElementById("rightAnswersText").innerHTML =
                document.getElementById("rightAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        } else {
            document.getElementById("wrongAnswersText").innerHTML =
                document.getElementById("wrongAnswersText").innerHTML +
                "<div class='answer'>" +
                "<p>No hay laboratoria en concepción</p>"
            "</div>";
        }
    } else {
        document.getElementById("warningMessage").innerText = "Bueno Chao";
    }
}
*/
