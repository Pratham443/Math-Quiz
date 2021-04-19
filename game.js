var player1 = localStorage.getItem("Player1");
var player2 = localStorage.getItem("Player2");
console.log(player1);

var player1_score = 0;
var player2_score = 0;

document.getElementById("question_turn").innerHTML = "Question Turn : " + player1;
document.getElementById("answer_turn").innerHTML = "Answer Turn : " + player2;

document.getElementById("player1_score").innerHTML = player1 + " : " + player1_score;
document.getElementById("player2_score").innerHTML = player2 + " : " + player2_score;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    operation = document.getElementById("operation").value;

    if(operation == "addition") {
        correct_answer = parseInt(number1) + parseInt(number2);
        question_word = "<h4>" + number1 + " + " + number2 + "</h4>";
    }
    if(operation == "subtraction") {
        correct_answer = parseInt(number1) - parseInt(number2);
        question_word = "<h4>" + number1 + " - " + number2 + "</h4>";
    }
    if(operation == "multiplication") {
        correct_answer = parseInt(number1) * parseInt(number2);
        question_word = "<h4>" + number1 + " x " + number2 + "</h4>";
    }
    if(operation == "division") {
        correct_answer = parseInt(number1) / parseInt(number2);
        question_word = "<h4>" + number1 + " / " + number2 + "</h4>";
    }

    input_box = "<br>Answer : <input id='input_checkbox' type='text'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
}