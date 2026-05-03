let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCES = new Audio('./sounds/right.mp3');
let AUDIO_FAIL = new Audio('./sounds/wrong.mp3');

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showContent();
}

function showContent() {
    if (currentQuestion >= questions.length) {
        showEndScreen();
    } else { // show next question
        showQuestion();
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100); // Runden
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style.width = `${percent}%`;
    }
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function showEndScreen() {
    document.getElementById('question_screen').classList.add('d_none');
    document.getElementById('endscreen').classList.remove('d_none');
    document.getElementById('header-image').src = './img/trophy.png';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`

    if (selectedQuestionNumber == question['right_answer']) { // Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success', 'text-white'); // wählt das übergeordnete tag aus
        AUDIO_SUCCES.play();
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger', 'text-white');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success', 'text-white');
        AUDIO_FAIL.play();
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // z.B. von 0 auf 1
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showContent();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger', 'bg-success', 'text-white');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger', 'bg-success', 'text-white');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger', 'bg-success', 'text-white');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger', 'bg-success', 'text-white');
}

function restartGame() {
    document.getElementById('header-image').src = './img/Group 5.png';
    currentQuestion = 0;
    rightQuestions = 0;

    init();

    document.getElementById('endscreen').classList.add('d_none');
    document.getElementById('question_screen').classList.remove('d_none');
}


// to-do:
// dem zurück button eine funktion geben
// share button eine funtion geben
// Antworten disable machen wenn man eine abgegeben hat
// responsive machen