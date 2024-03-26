let questions = [
{
  'question': 'Who invented HTML?',
  'answer_1': 'Albert Einstein',
  'answer_2': 'Henry Ford',
  'answer_3': 'Tim Berners-Lee',
  'answer_4': 'Charles Babbage',
  'right_answer': 3
},
{
  'question': 'What does HTML stand for?',
  'answer_1': 'Home Tool Markup Language',
  'answer_2': 'Hyper Text Markup Language',
  'answer_3': 'Hyperlinks and Text Markup Language',
  'answer_4': 'Hyper Terms and Milelinks',
  'right_answer': 2
},
{
  'question': 'DOM stands for',
  'answer_1': 'Document object model',
  'answer_2': 'Data object model',
  'answer_3': 'Document Oriented model',
  'answer_4': 'Data oriented model',
  'right_answer': 3
},
{
  'question': 'The href attribute in the link tag specifies the:',
  'answer_1': 'Link',
  'answer_2': 'Hypertext',
  'answer_3': 'None of these',
  'answer_4': 'Destination of a link',
  'right_answer': 4
},
{
  'question': ' What are div tags used for?',
  'answer_1': 'To replace paragraphs. i.e. p tags',
  'answer_2': 'To logically divide the paragraphs',
  'answer_3': 'To logically divide the document',
  'answer_4': 'To provide space between tables',
  'right_answer': 3
},
{
  'question': 'Which character is used to indicate an end tag?',
  'answer_1': '-',
  'answer_2': '*',
  'answer_3': '/',
  'answer_4': '<',
  'right_answer': 3
},
{
  'question': 'The default font-size of HTML document is?',
  'answer_1': '4',
  'answer_2': '6',
  'answer_3': '3',
  'answer_4': '8',
  'right_answer': 1
},
{
  'question': 'How can we resize the image?',
  'answer_1': 'Using resize attribute',
  'answer_2': 'Using height and width ',
  'answer_3': 'Using size attribute',
  'answer_4': 'Using rs attribute',
  'right_answer': 2
},
{
  'question': 'What does an HTML tag do?',
  'answer_1': 'It determines the organizational structure of your Web site.',
  'answer_2': 'It connects your web site to an operating environment.',
  'answer_3': 'It hides programming instructions from view.',
  'answer_4': 'It specifies formatting and layout instructions for your web page. ',
  'right_answer': 4
},
{
  'question': 'Which of the following are attributes of Font Tag?',
  'answer_1': 'All three',
  'answer_2': 'Face',
  'answer_3': 'Size',
  'answer_4': 'Color',
  'right_answer': 1
},
];

let rightAnswers = 0;
let currentQuestion = 0;
let audioRight = new Audio('./sounds/right.mp3');
let audioWrong = new Audio('./sounds/wrong.mp3');

function init() {
  let questionNumber = document.getElementById('questionNumber');
  questionNumber.innerHTML = questions.length;
}

function showQuestion() {
  showQuestionscreen();
  
  if(gameOver()) {
    showEndscreen();
  } else {
    updateProgress();
    showNextQuestion();
  }
}

function gameOver(){
  return currentQuestion >= questions.length;
}

function showStartscreen() {
  document.getElementById('startscreen').style = '';
  document.getElementById('questionBody').style = 'display: none';
  document.getElementById('questionFooter').style = 'display: none';
  document.getElementById('endscreen').style = 'display: none';
  document.getElementById('progressbar').style = `width: 0%;`;
  rightAnswers = 0
  currentQuestion = 0;
}

function showQuestionscreen() {
  document.getElementById('startscreen').style = 'display: none';
  document.getElementById('questionBody').style = '';
  document.getElementById('questionFooter').style = '';
}

function showEndscreen() {
  document.getElementById('endscreen').style = '';
  document.getElementById('questionBody').style = 'display: none';
  document.getElementById('questionFooter').style = 'display: none';

  document.getElementById('amountOfQuestions').innerHTML = questions.length;
  document.getElementById('rightAnswers').innerHTML = rightAnswers;
}

function showNextQuestion() {
  let question = questions[currentQuestion];
  currentNumber = document.getElementById('currentNumber').innerHTML = currentQuestion + 1;
  document.getElementById('questionText').innerHTML = question['question'];
  document.getElementById(1).innerHTML = question['answer_1'];
  document.getElementById(2).innerHTML = question['answer_2'];
  document.getElementById(3).innerHTML = question['answer_3'];
  document.getElementById(4).innerHTML = question['answer_4'];
}

function updateProgress() {
  let percent = Math.round((currentQuestion + 1) / questions.length * 100);
  document.getElementById('progressbar').style = `width: ${percent}%;`;
}

function answer(index) {
  let question = questions[currentQuestion];
  let rightAnswer = question['right_answer'];

  if(index === rightAnswer) {
    document.getElementById(index).parentNode.classList.add('right-answer');
    audioRight.play();
    rightAnswers++;
  } else {;
    document.getElementById(index).parentNode.classList.add('wrong-answer');
    document.getElementById(rightAnswer).parentNode.classList.add('right-answer');
    audioWrong.play();
  }
  document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById('next-button').disabled = true;
  resetAnswerButtons();
  showQuestion();
  init();
}

function resetAnswerButtons() {
  document.getElementById(1).parentNode.classList.remove('wrong-answer');
  document.getElementById(1).parentNode.classList.remove('right-answer');
  document.getElementById(2).parentNode.classList.remove('wrong-answer');
  document.getElementById(2).parentNode.classList.remove('right-answer');
  document.getElementById(3).parentNode.classList.remove('wrong-answer');
  document.getElementById(3).parentNode.classList.remove('right-answer');
  document.getElementById(4).parentNode.classList.remove('wrong-answer');
  document.getElementById(4).parentNode.classList.remove('right-answer');
}

function replayGame() {
  document.getElementById('questionBody').style = '';
  document.getElementById('endscreen').style = 'display: none';
  document.getElementById('progressbar').style = `width: 0%;`;
  document.getElementById('questionFooter').style = '';
  rightAnswers = 0
  currentQuestion = 0;
  init();
}
