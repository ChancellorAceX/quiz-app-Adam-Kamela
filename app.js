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
  questionNumber: 0;
  score: 0;
  totalQuestions: this.questions.length
};


function initialRender(){
  //Supply the html with the main page content
}

function eventHandlerStartButton(){
  //Question 1 of the quiz and associated html change button text/functionality
}

function eventHandlerQuestionCheck(){
  //post the html for correct/wrong, post the correct answer, change the submit functionality
}

function answeredQuestionEventHandler(){
  //test if the current question is last question
  //If yes, then move to final page and all associated html (change button function)
  //If no, then move to next question page and all associated html (change button function)
}

function eventHandlerReset(){
  //reset the variables for questionNumber and score (and quizStarted?)
  //fill html with initialRender condition
}

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