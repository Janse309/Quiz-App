let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion];
    console.log('Selected answer is', selection);
    let selectedQuestionNumber = selection.slice(-1);
    console.log('selectedQuestionNumber is', selectedQuestionNumber);
    console.log('current question is', question['right_answer']);

    let idOfRightAnswer = `answer_${question['right_answer']}`

    if (selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-success', 'text-white');
    } else {
        console.log('Falsche Antwort');
        document.getElementById(selection).parentNode.classList.add('bg-danger', 'text-white');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success', 'text-white');
    }
}
