var player1 = localStorage.getItem("Player1");
var player2 = localStorage.getItem("Player2");
console.log(player1);

var player1_score = 0;
var player2_score = 0;

document.getElementById("question_turn").innerHTML = "Question Turn : " + player1;
document.getElementById("answer_turn").innerHTML = "Answer Turn : " + player2;

document.getElementById("player1_score").innerHTML = player1 + " : "  + player1_score;
document.getElementById("player2_score").innerHTML = player2 + " : "  + player2_score;

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

question_turn = "player1";
answer_turn ="player2";

function check() {
    get_answer = document.getElementById("input_checkbox").value;
    if(get_answer == correct_answer) {
        if(answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1 + " : " + player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2 + " : "  + player2_score;
        }
    }

    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question_turn").innerHTML = "Question Turn : " + player2;
    }
    else{
        question_turn = "player1";
        document.getElementById("question_turn").innerHTML = "Question Turn : " + player1;
    }

    if(answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("question_turn").innerHTML = "Answer Turn : " + player2;
    }
    else{
        answer_turn = "player1";
        document.getElementById("question_turn").innerHTML = "Answer Turn : " + player1;
    }

    innerhtml = '<h2>Question: </h2><hr><h3>Number 1 : </h3><input id="number1" type="text" class="form-control" placeholder="Number 1"><h3>Number 2 : </h3><input id="number2" type="text" class="form-control" placeholder="Number 2"><h3>Operation : </h3><input id="operation" type="text" class="form-control" placeholder="Operation"><br><button class="btn btn-info" onclick="send()">Send</button>'
    document.getElementById("output").innerHTML = innerhtml;
}