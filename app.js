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
      correctAnswer: 'Werewolf'
    },
    {
      question: 'What is Dracula\'s profession as Dr. Sweet?',
      answers: [
        'Doctor',
        'Zookeeper',
        'Veterinarian',
        'Zoologist'
      ],
      correctAnswer: 'Zoologist'
    },
    {
      question: 'What\s wrong with Vanessa Ives?',
      answers: ['She\'s a vampire','She\'s dead','She\'s a ghost','She\'s possessed'],
      correctAnswer: 'She\'s possessed'
    },
    {
      question: 'How old is Dorian Gray on the show?',
      answers: [
        'Over 100 years old',
        'Over 300 years old',
        'Over 400 years old',
        'Over 700 years old'
      ],
      correctAnswer: 'Over 400 years old'
    },
    {
      question: 'Dr Frankenstein\'s creature John Clare was employed as what before he died?',
      answers: [
        'Actor',
        'Poet',
        'Stagehand',
        'Teacher'
      ],
      correctAnswer: 'Stagehand'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  totalQuestions: 5
};

let currentStore = store;

function generateString(obj = currentStore){
  if (!currentStore.quizStarted){
    return `
            <h2>Welcome to the dreadful Penny Dreadful quiz!</h2>
            <h3>Press the button below to begin:</h3>
            <form id='quizForm'>
            <button type='submit' (click)='submitForm()'>Begin</button>
            </form>`
  }
  else if (currentStore.questionNumber!==currentStore.totalQuestions){
    return `
            <h3>${currentStore.questions[currentStore.questionNumber].question}</h3>
            <form id='quizForm'>
            <input type='radio' id='A' name='A' value=0>
            <label for='A'></label>${currentStore.questions[currentStore.questionNumber].answers[0]}<br>
            <input type='radio' id='B' name='B' value=1>
            <label for='B'></label>${currentStore.questions[currentStore.questionNumber].answers[1]}<br>
            <input type='radio' id='C' name='C' value=2>
            <label for='C'></label>${currentStore.questions[currentStore.questionNumber].answers[2]}<br>
            <input type='radio' id='D' name='D' value=3>
            <label for='D'></label>${currentStore.questions[currentStore.questionNumber].answers[3]}<br>
            <input type="submit" value='Begin Quiz'>
            </form>
            <p class='correctStatement hidden'>
                The correct answer was:
            </p>
        <footer>
            <h5 class='Progress hidden'>Question Progress: ${currentStore.questionNumber}/5</h5>
            <h5 class='Score hidden'>Current Score: ${currentStore.score}/5</h5>
        </footer>`;
  }
  else {
    return ''
  }
}

function handleRender(){
  //Supply the html with the main page content
  console.log('render ran')
  $('main').html(generateString())
}

function handleStartButton(){
  //Question 1 of the quiz and associated html change button text/functionality
  console.log('start ran')
  $('main').on('click','#quizForm',function(){
    if (!currentStore.quizStarted){
      currentStore.quizStarted = true
    }
    else if ($('h5').is('hidden')){
      console.log('button test');
      currentStore.questionNumber++;
    }
    else if (currentStore.questionNumber===currentStore.totalQuestions){
      currentStore = store
    }
    else {};
    console.log(currentStore.questionNumber)
    handleRender(currentStore)})
}

function handleQuestionCheck(){
  //post the html for correct/wrong, post the correct answer, change the submit functionality
  console.log('question check ran')
}

function handleAnsweredQuestion(){
  //test if the current question is last question
  //If yes, then move to final page and all associated html (change button function)
  //If no, then move to next question page and all associated html (change button function)
  console.log('answered question ran')
}

function handleReset(){
  //reset the variables for questionNumber and score (and quizStarted?)
  //fill html with initialRender condition
  console.log('reset ran')
}

function handleApp(){
  handleRender();
  handleStartButton();
  handleQuestionCheck();
  handleAnsweredQuestion();
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