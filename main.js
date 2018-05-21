function submit1(questionOne) {
    var userAnswer = document.getElementById("q1").value;
    if (userAnswer.toLowerCase() == "no") {
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
}

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
