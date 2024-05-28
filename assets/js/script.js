console.log('test')

let quizForm = document.getElementById('quiz-form');
let scoreDiv = document.getElementById('score');
let correctAnswers = ['a', 'd', 'c', 'b', 'a', 'a', 'd', 'd', 'b', 'c'];

quizForm.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let userAnswers = [quizForm.q1.value, quizForm.q2.value, quizForm.q3.value, quizForm.q4.value, quizForm.q5.value, quizForm.q6.value, quizForm.q7.value, quizForm.q8.value, quizForm.q9.value, quizForm.q10.value];
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1;
        }
    });

    scoreDiv.innerHTML = `Your score is ${score} / ${correctAnswers.length}.`
    showCorrectAnswers();
});

