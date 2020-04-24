/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Ethan Chandler is more than just a gunslinger. What kind of creature is he?',
      answers: [
        'Warlock',
        'Vampire',
        'Ghost',
        'Werewolf'
      ],
      correctAnswer: 'Werewolf',
      answered: false
    },
    {
      question: 'What is Dracula\'s profession as Dr. Sweet?',
      answers: [
        'Doctor',
        'Zookeeper',
        'Veterinarian',
        'Zoologist'
      ],
      correctAnswer: 'Zoologist',
      answered: false
    },
    {
      question: 'What\s wrong with Vanessa Ives?',
      answers: ['She\'s a vampire','She\'s dead','She\'s a ghost','She\'s possessed'],
      correctAnswer: 'She\'s possessed',
      answered: false
    },
    {
      question: 'How old is Dorian Gray on the show?',
      answers: [
        'Over 100 years old',
        'Over 300 years old',
        'Over 400 years old',
        'Over 700 years old'
      ],
      correctAnswer: 'Over 400 years old',
      answered: false
    },
    {
      question: 'Dr Frankenstein\'s creature John Clare was employed as what before he died?',
      answers: [
        'Actor',
        'Poet',
        'Stagehand',
        'Teacher'
      ],
      correctAnswer: 'Stagehand',
      answered: false
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

function generateString(obj){
  if (!store.quizStarted){
    return `
            <h2>Welcome to the dreadful Penny Dreadful quiz!</h2>
            <h3>Press the button below to begin:</h3>
            <button type='button' class='startButton'>Begin</button>`;
  }
  else if (store.questionNumber!==store.questions.length){
    return `
            <h3>${store.questions[store.questionNumber].question}</h3>
            <form id='quizForm'>
            <div>
            <input type='radio' id='A' name='answer' value="${store.questions[store.questionNumber].answers[0]}">
            <label for='A'></label>${store.questions[store.questionNumber].answers[0]}</label>
            </div>
            <div>
            <input type='radio' id='B' name='answer' value="${store.questions[store.questionNumber].answers[1]}">
            <label for='B'></label>${store.questions[store.questionNumber].answers[1]}</label>
            </div>
            <div>
            <input type='radio' id='C' name='answer' value="${store.questions[store.questionNumber].answers[2]}">
            <label for='C'>${store.questions[store.questionNumber].answers[2]}</label>
            </div>
            <div>
            <input type='radio' id='D' name='answer' value="${store.questions[store.questionNumber].answers[3]}">
            <label for='D'></label>${store.questions[store.questionNumber].answers[3]}</label>
            </div>
            <button type='submit' class='submit' name='submit'>Submit</button>
            </form>
            <p class='correctStatement hidden'>
            </p>
        <footer>
            <h5 class='Progress'>Question Progress: ${store.questionNumber+1}/${store.questions.length}</h5>
            <h5 class='Score'>Current Score: ${store.score}/${store.questions.length}</h5>
        </footer>`;
  }
  else {
    return `
        <h2>Congratulations!<h2>
        <h3>Here's your final score:</h3>
        <h3>${store.score} out of ${store.questions.length}</h3>
        <button type='button' class='restartButton'>Take it again?</button>`
  }
}

function handleRender(string){
  //Supply the html with the main page content
  console.log('render ran');
  $('main').html(generateString(string));
}

function handleStartButton(){
  //Question 1 of the quiz and associated html change button text/functionality
  console.log('start ran');
  $('main').on('click','.startButton',function(){
    store.quizStarted = true;
    handleRender(store);});
}

function handleQuestionCheck(){
  //post the html for correct/wrong, post the correct answer, change the submit functionality
  console.log('question check ran');
  $('main').on('submit','#quizForm',function(event){
    event.preventDefault();
    if (!$('input:radio',this).is(':checked')){
      alert('You must select an answer')
    }
    else {
      if (!store.questions[store.questionNumber].answered){
        if ($("form input[type='radio']:checked").val()===store.questions[store.questionNumber].correctAnswer){
          $('p').text('Correct!');
          store.score++;
        }
        else {
          $('p').text(`Incorrect. The correct answer was: ${store.questions[store.questionNumber].correctAnswer}`);
        };
        store.questions[store.questionNumber].answered=true;
        $('p').toggleClass('hidden');
        $('h5[class="Score"]').text(`Current Score: ${store.score}/${store.questions.length}`)
        $('.submit').text('Next Question')
      }
      else if (store.questions.length===store.questionNumber){
        null;
      }
      else{
        store.questionNumber++
        $('p').toggleClass('hidden');
        $('.submit').text('Submit')
        handleRender(store);
      }
    }
  });
}

function handleReset(){
  console.log('reset ran');
  $('main').on('click','.restartButton',function(){
    for(let i=0;i<store.questions.length;i++){
      store.questions[i].answered=false;
    }
    store.quizStarted=false;
    store.questionNumber=0;
    store.score=0;
    handleRender(store)
  })
}


function handleApp(){
  handleRender();
  handleStartButton();
  handleQuestionCheck();
  handleReset();
}


$(handleApp);
/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)