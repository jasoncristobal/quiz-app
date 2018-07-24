'use strict';

const questions = [
  { // Array Index 0 - Question #1
    question: 'Every President has served two terms or less, except one. He was elected 4 times.',
    options: [
      'Abraham Lincoln', 
      'George Washington', 
      'Franklin D. Roosevelt', 
      'Thomas Jefferson'
    ],
    answer: 'Franklin D. Roosevelt',
    answerDetails: 'He died a few months after he started his 4th term. The Presidency was later limited to 2 terms.',
    photoLinks: 'http://jasoncristobal.com/downloads/Thinkful/2.jpg',
    photoAltAttributes: 'Crowds waving US flags at the US Capitol',
  },
  { // Array Index 1 - Question #2
    question: 'He was the only President whose native language was not English.',
    options: [
      'Martin Van Buren',
      'Barack Obama',
      'Woodrow Wilson',
      'Rutherford B. Hayes'
    ],
    answer: 'Martin Van Buren',
    answerDetails: 'He learned English as a second language. His first language was Dutch.',
    photoLinks: 'http://jasoncristobal.com/downloads/Thinkful/3.jpg',
    photoAltAttributes: 'Close-up of a book with many books in the background',
  },
  { // Array Index 2 - Question #3
    question: 'He was the only President who never married.',
    options: [
      'James Buchanan', 
      'Thomas Jefferson', 
      'Theodore Roosevelt',
      'Abraham Lincoln'
    ],
    answer: 'James Buchanan', 
    answerDetails: 'Every other President had a wife. Buchanan\'s niece served as his First Lady.',
    photoLinks: 'http://jasoncristobal.com/downloads/Thinkful/4.jpg',
    photoAltAttributes: 'Flower bouquet in the hands of a bride in a wedding dress',
  },
  { // Array Index 3 - Question #4
    question: 'Every President completed his term(s) or died in office. Except one. He was the only one who resigned.',
    options: [
      'John Adams', 
      'Richard Nixon', 
      'Jimmy Carter', 
      'Harry S Truman'
    ],
    answer: 'Richard Nixon',
    answerDetails: 'His successor was the only President who was never elected to the Presidency or Vice Presidency (i.e. succession rather than election).',
    photoLinks: 'http://jasoncristobal.com/downloads/Thinkful/5.jpg',
    photoAltAttributes: 'The President\'s plane, Air Force One, at an airport',
  },
  { // Array Index 4 - Question #5
    question: 'Every President spoke a European language (including English). Only one of them also spoke an Asian language.',
    options: [
      'Barack Obama', 
      'Herbert Hoover', 
      'Ronald Reagan', 
      'Bill Clinton'
    ], 
    answer: 'Herbert Hoover',
    answerDetails: 'He and his First Lady spoke Mandarin. Obama spent some childhood years in an Asian country but <a href="https://www.cbsnews.com/news/obama-i-dont-speak-a-foreign-language-its-embarrassing">he says</a> he only speaks English.',
    photoLinks: 'http://jasoncristobal.com/downloads/Thinkful/6.jpg',
    photoAltAttributes: 'The Taj Mahal in India, which is in the continent of Asia',
  },
  { // Array Index 5 - Question #6
    question: 'He was President for only one month, which was the shortest Presidency ever.',
    options: [
      'Benjamin Franklin', 
      'Robert E. Lee', 
      'William Henry Harrison', 
      'John Hancock'
    ],
    answer: 'William Henry Harrison',
    answerDetails: 'He was the 1st President who died in office. Also, Benjamin Franklin, John Hancock, and Robert E. Lee were never President.',
    photoLinks: 'http://jasoncristobal.com/downloads/Thinkful/7.jpg',
    photoAltAttributes: 'Solider playing a trumpet in a cemetery',
  },

];

const scorePage = { 
    photoLinks: 'http://jasoncristobal.com/downloads/Thinkful/8.jpg',
    photoAltAttributes: 'Five living Presidents posing in the Oval Office',
    scoreComments: [
      // Array Index 0 - For 0 out of 6
      'Time to brush up on American history',
      // Array Index 1 - For 1 out of 6
      'These guys are glad you got at least one right',
      // Array Index 2 - For 2 out of 6
      'You still did better than most Americans',
      // Array Index 3 - For 3 out of 6
      'You did better than these guys',
      // Array Index 4 - For 4 out of 6
      'That\'s impressive. Democrats and Republicans can agree on that.',
      // Array Index 5 - For 5 out of 6
      'These 5 guys agree: that\'s excellent',
      // Array Index 6 - For 6 out of 6
      'You\'re presidential! You should run for office.'
    ]
  }


let correct = 0;
let incorrect = 0;
let currentQuestion = 0; 

function loadQuestion() {
  $('main').on('click', '#js-start-next', function(event) {
    const questionNum = currentQuestion + 1
      $('img').attr('alt',questions[currentQuestion].photoAltAttributes);
      $('img').attr('src',questions[currentQuestion].photoLinks);
      $('.q-and-a').html(`<p class="question">${questions[currentQuestion].question}</p>
        <form class="question-form">
          <ul>
          <li>
            <input type="radio" name="choices" value='${questions[currentQuestion].options[0]}' id="ans-1">
            <label for="ans-1"> ${questions[currentQuestion].options[0]} </label>
          </li>
            <input type="radio" name="choices" value='${questions[currentQuestion].options[1]}' id="ans-2">
            <label for="ans-2"> ${questions[currentQuestion].options[1]} </label>
          </li>
          <li>
            <input type="radio" name="choices" value='${questions[currentQuestion].options[2]}' id="ans-3">
            <label for="ans-3"> ${questions[currentQuestion].options[2]} </label>
          </li>
          <li>
            <input type="radio" name="choices" value='${questions[currentQuestion].options[3]}' id="ans-4">
            <label for="ans-4"> ${questions[currentQuestion].options[3]} </label>
          </li>
          </ul>
          <button type='submit' id='js-check'>Check Answer</button>
        </form>
        <aside class="select-an-answer">Please pick a President</aside>
          <p><span class="progress">Progress: </span>${questionNum} of 6, <span class="score">Score: </span>${correct} Correct, ${incorrect} Incorrect</p>`);

    });
}

function checkAnswer() {
  $('main').on('submit','.question-form',function(event) {
    event.preventDefault();
    let userAnswer = $('input[name=choices]:radio:checked').val();
    if (userAnswer === undefined) {
      $('.select-an-answer').toggleClass('no-selection');
    } else if (userAnswer === questions[currentQuestion].answer && currentQuestion < (questions.length - 1)) {
      correct++;
      $('.q-and-a').html(
        `<p><span class="right-ans">You're right!</span></p>
        <p class="correct-answer">${questions[currentQuestion].answer}</p>
        <p class="answerDetails">${questions[currentQuestion].answerDetails}</p>
        <button type='submit' id='js-start-next'>Next</button>`);
      currentQuestion++;
    } else if (userAnswer === questions[currentQuestion].answer && currentQuestion === (questions.length - 1)) {
      correct++;
      $('.q-and-a').html(
        `<p><span class="right-ans">You're right!</span></p>
        <p class="correct-answer">${questions[currentQuestion].answer}</p>
        <p class="answerDetails">${questions[currentQuestion].answerDetails}</p>
        <button type='submit' id='js-last-page'>How Did I Do?</button>`);
      currentQuestion++;
    } else if (userAnswer !== questions[currentQuestion].answer && currentQuestion === (questions.length - 1)) {
      incorrect++;
      $('.q-and-a').html(
        `<p><span class="wrong-ans">Incorrect. That President was:</span></p>
        <p class="correct-answer">${questions[currentQuestion].answer}</p>
        <p class="answerDetails">${questions[currentQuestion].answerDetails}</p>
        <button type='submit' id='js-last-page'>How Did I Do?</button>`);
      currentQuestion++;
    } else {
      incorrect++;
      $('.q-and-a').html(
        `<p><span class="wrong-ans">Incorrect. That President was:</span></p>
        <p class="correct-answer">${questions[currentQuestion].answer}</p>
        <p class="answerDetails">${questions[currentQuestion].answerDetails}</p>
        <button type='submit' id='js-start-next'>Next</button>`);
      currentQuestion++;
    } 
  }); 
}

function finalScore() {
  $('main').on('click', '#js-last-page', function(event) {
    $('main').html(
      `<section role="region" class="image">
      <img alt="${scorePage.photoAltAttributes}" src="${scorePage.photoLinks}">
      </section>
      <section role="region" class="answer bottom">
        <p class="score">You got</p>
        <p class="final-score">${correct} out of 6</p>
        <p class="answerDetails">${scorePage.scoreComments[correct]}</p>
        <button type='submit' id="js-restart">Restart Quiz</button>
      </section>`);
    });
}

function restart() {
  $('main').on('click', '#js-restart', function() {
    location.reload();  
  });
}

$(document).ready(function(){
  loadQuestion();
  checkAnswer();
  finalScore();
  restart();
});