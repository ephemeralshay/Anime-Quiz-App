const { getRandomQuiz } = require("anime-quiz");
export var questions = [];
for (var i = 1; i <= 10; ++i) {
  var question = getRandomQuiz();
  var j = 0;
  while (!question.image && !question.gif && j<10) {
    question = getRandomQuiz();
    j++;
  }
  questions.push(getRandomQuiz());
}
export const alt = "https://avatars.githubusercontent.com/u/92033323?v=4";

export const reset_questions = () => {
  questions.length = 0;
  for (var i = 1; i <= 10; ++i) {
    questions.push(getRandomQuiz());
  }
};

export default questions;
