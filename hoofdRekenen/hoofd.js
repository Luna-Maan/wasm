answer = 0;
questionNum = 0;
correct = 0;
incorrect = 0;
startTime = 0;
vraag = "";
numOperators = 0;
operators = [];

function loadHandler() {
    let add = document.getElementById("add").checked;
    let subtract = document.getElementById("sub").checked;
    let multiply = document.getElementById("mul").checked;
    let divide = document.getElementById("div").checked;

    let exponent = document.getElementById("exp").checked;
    let root = document.getElementById("root").checked;
    let modulo = document.getElementById("mod").checked;

    let result = document.getElementById("result");
    let stats = document.getElementById("stats");

    result.innerHTML = "";
    stats.innerHTML = "";

    correct = 0;
    incorrect = 0;
    questionNum = 0;

    operators = [];
    numOperators = 0;
    if (add) {
        numOperators += 1;
        operators.push("add");
    }
    if (subtract) {
        numOperators += 1;
        operators.push("subtract");
    }
    if (multiply) {
        numOperators += 1;
        operators.push("multiply");
    }
    if (divide) {
        numOperators += 1;
        operators.push("divide");
    }
    if (exponent) {
        numOperators += 1;
        operators.push("exponent");
    }
    if (root) {
        numOperators += 1;
        operators.push("root");
    }
    if (modulo) {
        numOperators += 1;
        operators.push("modulo");
    }

    if (numOperators == 0) {
        alert("Please select at least one operator");
        return;
    }

    nextQuestion();
}

function nextQuestion() {
    console.log("nextQuestion")
    let question = document.getElementById("question");

    vraag = "<div class=\"tooltip\">Q" + (questionNum + 1);
    let operator = Math.floor(Math.random() * numOperators);
    if (operators[operator] === "add") {
        addQuestion();
    }
    if (operators[operator] === "subtract") {
        subtractQuestion();
    }
    if (operators[operator] === "multiply") {
        multiplyQuestion();
    }
    if (operators[operator] === "divide") {
        divideQuestion();
    }
    if (operators[operator] === "exponent") {
        exponentQuestion();
    }
    if (operators[operator] === "root") {
        rootQuestion();
    }
    if (operators[operator] === "modulo") {
        moduloQuestion();
    }

    question.innerHTML = vraag;
    MathJax.typeset();
    questionNum++;
}

function addQuestion() {
    let max = parseInt(document.getElementById("max").value) + 1;
    let negatives = document.getElementById("negatives").checked;

    if (negatives) {
        een = Math.floor(Math.random() * max * 2) - max;
        twee = Math.floor(Math.random() * max * 2) - max;
    }
    else {
        een = Math.floor(Math.random() * max);
        twee = Math.floor(Math.random() * max);
    }

    vraag += "<span class=\"tooltiptext\"><a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Addition\">wikipedia: addition</a></span></div>: ";
    vraag += "\\(" + een + " + " + twee + "=\\)";
    answer = een + twee;
}

function subtractQuestion() {
    let max = parseInt(document.getElementById("max").value) + 1;
    let negatives = document.getElementById("negatives").checked;

    if (negatives) {
        een = Math.floor(Math.random() * max * 2) - max;
        twee = Math.floor(Math.random() * max * 2) - max;
    }
    else {
        een = Math.floor(Math.random() * max);
        twee = Math.floor(Math.random() * max);
    }

    vraag += "<span class=\"tooltiptext\"><a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Subtraction\">wikipedia: subtraction</a></span></div>";
    vraag += ": \\(" + een + " - " + twee + "=\\)";
    answer = een - twee;
}

function multiplyQuestion() {
    let max = document.getElementById("max").value;
    let negatives = document.getElementById("negatives").checked;

    max = Math.ceil(max ** 0.5);

    if (negatives) {
        een = Math.floor(Math.random() * max * 2) - max;
        twee = Math.floor(Math.random() * max * 2) - max;
    }
    else {
        een = Math.floor(Math.random() * max);
        twee = Math.floor(Math.random() * max);
    }

    vraag += "<span class=\"tooltiptext\"><a target=\"_blank\" href=\"https://wikikids.nl/Vermenigvuldigen\">Wikikids: vermenigvuldig</a></span></div>: "
    vraag += "\\(" + een + " \\cdot " + twee + "=\\)";
    answer = een * twee;
}

function divideQuestion() {
    let max = document.getElementById("max").value;
    let negatives = document.getElementById("negatives").checked;

    max = Math.ceil(max ** 0.5);

    if (negatives) {
        een = Math.floor(Math.random() * max * 2) - max;
        twee = Math.floor(Math.random() * max * 2) - max;
        if (twee == 0) {
            twee = max + 1;
        }
    }
    else {
        een = Math.floor(Math.random() * max);
        twee = Math.floor(Math.random() * max + 1);
    }

    een = een * twee;

    vraag += "<span class=\"tooltiptext\"><a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Division_(mathematics)\">wikipedia: division</a></span></div>";
    vraag += ": \\(\\dfrac{" + een + "}{" + twee + "}=\\)";
    answer = een / twee;
}

function exponentQuestion() {
    let max = document.getElementById("max").value;
    let negatives = document.getElementById("negatives").checked;


    if (negatives) {
        twee = Math.floor(Math.random() * (Math.log(max) - 2)) + 2;
        een = Math.floor(Math.random() * (max ** (1 / twee)) * 2) - Math.floor((max ** (1 / twee)));
    }
    else {
        twee = Math.floor(Math.random() * (Math.log(max) - 2)) + 2;
        een = Math.floor(Math.random() * (max ** (1 / twee)));
    }

    vraag += "<span class=\"tooltiptext\"><a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Exponentiation\">wikipedia: Exponentiation</a></span></div>";
    if (een < 0) {
        vraag += ": \\((" + een + ")^{" + twee + "}=\\)";
    }
    else {
        vraag += ": \\(" + een + "^{" + twee + "}=\\)";
    }
    answer = een ** twee;
}

function moduloQuestion() {
    let max = document.getElementById("max").value;
    let negatives = document.getElementById("negatives").checked;

    if (negatives) {
        een = Math.floor(Math.random() * max * 2) - max;
        max = Math.ceil(max ** 0.5);
        twee = Math.floor(Math.random() * max);
        if (twee == 0) {
            twee = max + 1;
        }
    }
    else {
        een = Math.floor(Math.random() * max);
        max = Math.ceil(max ** 0.5);
        twee = Math.floor(Math.random() * max);
        if (twee == 0) {
            twee = max + 1;
        }
    }

    vraag += "<span class=\"tooltiptext\"><a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Modulo\">wikipedia: modulo</a></span></div>";
    vraag += ": \\(" + een + "\\ mod\\ " + twee + "=\\)";
    answer = een % twee;
}

function rootQuestion() {
    let max = document.getElementById("max").value;

    max = Math.ceil(max ** 0.5);

    een = Math.floor(Math.random() * max);
    een = een * een;

    vraag += "<span class=\"tooltiptext\"><a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Square_root\">wikipedia: square root</a></span></div>";
    vraag += ": \\(\\sqrt{" + een + "}=\\)";
    answer = een ** 0.5;
}

window.addEventListener("load", loadHandler);
start = document.getElementById("start");
start.addEventListener("click", loadHandler);

async function checkAnswer() {
    if (questionNum == 1) {
        startTime = new Date();
    }

    let input = document.getElementById("answer");
    let result = document.getElementById("result");
    let stats = document.getElementById("stats");
    let maxQuestions = document.getElementById("numQuestions").value;

    if (input.value == answer) {
        input.value = "";
        correct++;
        result.innerHTML = "Correct!";
        stats.innerHTML = "Correct: " + correct + "/" + (incorrect + correct);
        if (correct == maxQuestions) {
            alert("You have completed the quiz!\nYou got " + correct + " out of " + (incorrect + correct) + " correct!\nIt took you " + (new Date() - startTime) / 1000 + " seconds!");
            loadHandler();
            return;
        }
        nextQuestion();
    } else {
        input.value = "";
        incorrect++;
        result.innerHTML = "Incorrect!";
        stats.innerHTML = "Correct: " + correct + "/" + (incorrect + correct);
        if (correct == maxQuestions) {
            alert("You have completed the quiz!\nYou got " + correct + " out of " + (incorrect + correct) + " correct!\nIt took you " + (new Date() - startTime) / 1000 + " seconds!");
            loadHandler();
            return;
        }
        nextQuestion();
    }


}

let inputBox = document.getElementById("answer");
inputBox.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});