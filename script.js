let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
       showEndScreen();
    } else{
    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success', 'text-white'); // wählt das übergeordnete tag aus
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger', 'text-white');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success', 'text-white');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger', 'bg-success', 'text-white');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger', 'bg-success', 'text-white');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger', 'bg-success', 'text-white');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger', 'bg-success', 'text-white');
}

function showEndScreen() {
    document.getElementById('endscreen').classList.add('d_none');
    document.getElementById('finish').classList.remove('d_none');
}